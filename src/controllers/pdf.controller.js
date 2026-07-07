const { extractTextFromPDF } = require("../services/pdf.service");
const {
  testGroqConnection,
  parseResumeWithAI,
} = require("../services/groq.service");

const uploadPdf = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No PDF uploaded.",
      });
    }

   const extractedText = await extractTextFromPDF(req.file.path);

const resumeData = await parseResumeWithAI(extractedText);

console.log("========== PARSED RESUME ==========");
console.log(resumeData);
console.log("==================================");

res.status(200).json({
  success: true,
  message: "Resume parsed successfully using AI.",
  data: resumeData,
});

  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

const testAI = async (req, res) => {
  try {
    const result = await testGroqConnection();

    res.status(200).json({
      success: true,

      message: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

module.exports = {
  uploadPdf,
  testAI,
};
