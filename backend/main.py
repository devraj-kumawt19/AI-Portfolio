import os
import json
import re
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="AI Portfolio Brain")

# Enable CORS for the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this to your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Groq client
# Make sure GROQ_API_KEY is in your .env file
groq_api_key = os.getenv("GROQ_API_KEY")
client = Groq(api_key=groq_api_key) if groq_api_key else None

class ChatMessageModel(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    query: str
    history: list[ChatMessageModel] = []

class ChatResponse(BaseModel):
    intent: str
    ai_text: str

# Base prompt layout
BASE_SYSTEM_PROMPT = """You are Noorullah Zamindar's AI Portfolio Assistant. Your job is to answer questions about Noorullah based on the provided Knowledge Base and determine what UI component the frontend should render.

Knowledge Base:
======================
{knowledge_base}
======================

Your response MUST be valid JSON matching this schema exactly:
{{
  "intent": "me" | "projects" | "resume" | "skills" | "contact" | "general",
  "ai_text": "Your natural, conversational response speaking as Noorullah's assistant."
}}

Rules:
- If the user asks "Tell me about yourself" or asks for a general introduction, set intent to "me".
  CRITICAL FOR "me" INTENT: The frontend will automatically display a visual profile card with his bio and skills just above your text. DO NOT repeat his basic info. Instead, provide a pleasant prompt to spark conversation. 
  Example `ai_text` for "me": "You can see a quick summary of my background above! What specifically would you like to know more about? My journey into AI, my philosophy on building intelligent systems, or perhaps my thoughts on the future of LLMs?"
- If the user explicitly asks to view, show, list, or see your projects or portfolio, set intent to "projects".
- If the user asks detailed or follow-up questions about a specific project (like "what is the tech stack of the Facial Emotion Recognition System?" or "tell me about the AI Email Auto-Responder Agent"), set intent to "general" so that only the text response is rendered without showing the projects carousel again.
- If the user asks about experience, jobs, career, resume, or past work, set intent to "resume".
  CRITICAL FOR "resume" INTENT: The frontend will automatically display the visual professional experience timeline. DO NOT list every job or date in full. Instead, write a warm, brief 1-2 sentence overview and ask if they have specific questions about his roles.
  Example `ai_text` for "resume": "I have displayed Noorullah's professional journey above, covering AI training, data science, system management, teaching, freelancing, and technical support. Which experience would you like to know more about?"
- If the user asks about education, university, college, school, degree, study, or where Noorullah learned, set intent to "general" and answer with his education details from the Knowledge Base.
- If the user asks about skills, set intent to "skills".
- If the user wants to contact him, set intent to "contact".
  CRITICAL FOR "contact" INTENT: You MUST set the `ai_text` to EXACTLY: "You can reach Noorullah through the contact info above. Feel free to message him anytime. What's on your mind?"
- For anything else (like follow-up questions about his journey, philosophy, etc.), set intent to "general".
- Keep `ai_text` friendly, professional, and conversational.
- Response Length & Detail Rules:
  * For simple greetings, greetings response, or when dynamic visual cards are triggered (intents: 'me', 'projects', 'resume', 'skills', 'contact'), keep response short and welcoming (under 3 sentences).
  * CRITICAL EXCEPTION FOR TECHNICAL/DETAILED QUESTIONS: If the user asks detailed, architectural, or biographical questions (e.g. "How does the Facial Emotion Recognition System work?", "Explain the AI Email Auto-Responder Agent", "What did Noorullah do at UNDP?", "Why does Noorullah focus on AI automation?"), DO NOT restrict yourself to 3 sentences. Provide a detailed, professional, and structured response (1 to 3 paragraphs, using bullet points where appropriate) to explain the technologies, engineering challenges, and tradeoffs. Write like an experienced AI engineer explaining their work to a technical recruiter.
- Do not mention personal social accounts unless explicitly requested.
- CRITICAL Punctuation Rule: Always write English contractions with proper apostrophes (e.g. use "I've", "I'm", "don't", "it's", "you're", "we've", "they're"). NEVER write them as "Ive", "Im", "dont", "its" (unless possessive), "youre", "weve", "theyre".
"""

def get_system_prompt() -> str:
    try:
        kb_path = os.path.join(os.path.dirname(__file__), "knowledge_base.md")
        with open(kb_path, "r", encoding="utf-8") as f:
            kb_content = f.read()
        return BASE_SYSTEM_PROMPT.format(knowledge_base=kb_content)
    except Exception as e:
        print(f"Error loading knowledge base: {e}")
        return BASE_SYSTEM_PROMPT.format(knowledge_base="Knowledge base file not found.")

def get_local_response(query: str) -> ChatResponse:
    q = query.lower()

    if any(word in q for word in ["contact", "email", "linkedin", "github"]):
        return ChatResponse(intent="contact", ai_text="You can reach Noorullah through the contact info above. Feel free to message him anytime. What's on your mind?")

    if any(word in q for word in ["education", "university", "study", "studied", "learn", "college", "school", "degree", "bachelor", "rana", "alagappa", "storai"]):
        return ChatResponse(intent="general", ai_text="Noorullah studied Bachelor of Computer Science in Software Engineering at Rana University, Afghanistan. He is also pursuing a Bachelor of Business Administration at Alagappa University, India through an ICCR scholarship. He completed a Diploma in English Language at Storai Institute, Afghanistan, and high school at Abdul Qayum Wardak High School, Afghanistan.")

    if any(word in q for word in ["project", "portfolio", "emotion", "email agent", "bot", "invoice", "reservation", "pos"]):
        return ChatResponse(intent="projects", ai_text="I have displayed Noorullah's projects above, including AI automation, machine learning, chatbot, OCR, web application, and POS analytics work.")

    if any(word in q for word in ["skill", "stack", "technology", "python", "machine learning", "automation"]):
        return ChatResponse(intent="skills", ai_text="Noorullah's core strengths include Python, data science, machine learning, AI automation, Flask, SQL, dashboards, and tools like Zapier, Make, and n8n.")

    if any(word in q for word in ["experience", "resume", "work", "job", "trainer", "undp"]):
        return ChatResponse(intent="resume", ai_text="I have displayed Noorullah's professional journey above, covering AI training, data science, system management, teaching, freelancing, and technical support.")

    if any(word in q for word in ["about", "yourself", "who are you", "noorullah"]):
        return ChatResponse(intent="me", ai_text="You can see a quick summary of Noorullah's background above. Ask about his AI projects, teaching experience, automation work, or data science stack.")

    return ChatResponse(intent="general", ai_text="I can help you explore Noorullah Zamindar's AI/data science profile, projects, skills, experience, education, and contact details.")

@app.post("/api/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    if not client:
        return get_local_response(request.query)
        
    try:
        system_prompt = get_system_prompt()
        
        messages = [{"role": "system", "content": system_prompt}]
        
        # Append conversation history
        for msg in request.history:
            role = "user" if msg.role == "user" else "assistant"
            messages.append({"role": role, "content": msg.content})
            
        # Append latest user query
        messages.append({"role": "user", "content": request.query})
        
        completion = client.chat.completions.create(
            model="llama-3.3-70b-versatile", # Active Groq model for JSON
            messages=messages,
            response_format={"type": "json_object"},
            temperature=0.3,
            max_tokens=200
        )
        
        response_content = completion.choices[0].message.content
        data = json.loads(response_content)
        
        ai_text = data.get("ai_text", "I'm not quite sure how to answer that.")
        
        # Post-process to restore missing apostrophes in common contractions
        ai_text = re.sub(r"\b[Ii]ve\b", "I've", ai_text)
        ai_text = re.sub(r"\b[Ii]m\b", "I'm", ai_text)
        ai_text = re.sub(r"\b[Dd]ont\b", "don't", ai_text)
        ai_text = re.sub(r"\b[Cc]ant\b", "can't", ai_text)
        ai_text = re.sub(r"\b[Yy]oure\b", "you're", ai_text)
        ai_text = re.sub(r"\b[Ww]eve\b", "we've", ai_text)
        ai_text = re.sub(r"\b[Tt]heyre\b", "they're", ai_text)
        
        return ChatResponse(
            intent=data.get("intent", "general"),
            ai_text=ai_text
        )
        
    except Exception as e:
        print(f"AI backend fallback used: {e}")
        return get_local_response(request.query)

@app.get("/")
async def root():
    return {"message": "Hello from the AI Portfolio Backend!"}
