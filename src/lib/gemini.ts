import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const getChisomResponse = async (userMessage: string, history: { role: 'user' | 'model', parts: [{ text: string }] }[] = []) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: `You are Chisom, a smart, helpful, and friendly AI voice assistant for a modern shopping platform. 
        You speak naturally in English, but you can also understand and respond in Pidgin and Igbo when appropriate. 
        Your tone is professional yet approachable (startup vibe).
        You help users find products, track orders, and add items to their cart.
        Keep responses concise and helpful. 
        If a user asks to "add to cart", confirm the item they want.
        Current context: You are demonstrating your capabilities on the Chisom AI landing page.`,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having a bit of trouble connecting right now. Let's try again in a bit!";
  }
};
