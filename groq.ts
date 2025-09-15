// groq.ts
import Groq from "groq-sdk";

export const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,  // <-- this is fine inside a file
});

