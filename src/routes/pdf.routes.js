const express = require("express");
const router = express.Router();

console.log("✅ pdf.routes.js loaded");

const upload = require("../middleware/upload.middleware");

const {
    uploadPdf,
    testAI
} = require("../controllers/pdf.controller");

// Test route
router.get("/test", (req, res) => {
    res.json({
        success: true,
        message: "PDF route is working"
    });
});

// AI Test route
router.get("/ai-test", testAI);

// Upload PDF
router.post(
    "/upload",
    upload.single("pdf"),
    uploadPdf
);

module.exports = router;