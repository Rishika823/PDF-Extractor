const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// ----------------------
// Test Connection
// ----------------------
const testGroqConnection = async () => {
  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "user",
        content: "Say Hello from Groq AI in one sentence.",
      },
    ],
  });

  return response.choices[0].message.content;
};

// ----------------------
// Resume Parser
// ----------------------
const parseResumeWithAI = async (resumeText) => {
  const prompt = `
You are an expert resume parser.

Extract the following information.

Return ONLY valid JSON.

{
  "name": "",
  "email": "",
  "phone": "",
  "linkedin": "",
  "github": "",
  "skills": [],
  "education": [],
  "experience": [],
  "projects": [],
  "certifications": []
}

Resume:

${resumeText}
`;

  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content: "You are a professional resume parser.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0,
  });

  let content = response.choices[0].message.content;

// Print the AI response (for debugging)
console.log("========== AI RESPONSE ==========");
console.log(content);
console.log("================================");

// Remove markdown code fences if Groq returns them
content = content
    .replace(/```json\s*/gi, "")
    .replace(/```/g, "")
    .trim();

// Print cleaned response
console.log("========== CLEANED RESPONSE ==========");
console.log(content);
console.log("======================================");

return JSON.parse(content);

};

module.exports = {
  testGroqConnection,
  parseResumeWithAI,
};
