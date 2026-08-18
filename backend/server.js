const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(cors());
app.use(express.json());

// 👇 PASTE YOUR NEW KEY HERE 👇
const genAI = new GoogleGenerativeAI("ENTER-YOUR API KEY");

// 🛡️ THE AUTO-SWITCHER LIST
// We will try these models in order until one works.
// "Lite" models usually have better free limits.
const MODEL_CANDIDATES = [
  "gemini-2.0-flash-lite-preview-02-05", // The newest, lightest one
  "gemini-2.0-flash-lite",                // The standard lite
  "gemini-flash-latest",                  // The generic flash pointer
  "gemini-1.5-flash-latest",              // The legacy flash
  "gemini-pro"                            // The classic fallback
];

app.post("/explain", async (req, res) => {
  console.log("-----------------------------------------");
  console.log("📨 Analyzing:", req.body.text?.substring(0, 30) + "...");

  let lastError = null;

  // 🔄 LOOP THROUGH MODELS UNTIL ONE WORKS
  for (const modelName of MODEL_CANDIDATES) {
    try {
      console.log(`👉 Trying model: ${modelName}...`);
      const model = genAI.getGenerativeModel({ model: modelName });
      
      const prompt = `
        You are a helpful assistant. Explain this text: "${req.body.text}"
        Return a JSON object exactly like this (no markdown):
        { "simple": "Summary", "context": "Context", "bias": "Bias" }
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text().replace(/```json/g, "").replace(/```/g, "").trim();
      const data = JSON.parse(text);

      console.log(`✅ SUCCESS with ${modelName}!`);
      res.json(data);
      return; // 🏆 EXIT THE LOOP, WE WON!

    } catch (error) {
      console.log(`❌ ${modelName} failed: ${error.message.split('[')[0]}`);
      lastError = error;
      // Continue to the next model...
    }
  }

  // 💀 IF ALL FAIL
  console.error("😭 All models failed.");
  res.json({
    simple: "Connection Error",
    context: "We tried 5 different AI models and Google blocked them all.",
    bias: "Error"
  });
});

app.listen(5000, () => {
  console.log("ContextIQ (Auto-Switch Mode) is READY! 🛡️");
});