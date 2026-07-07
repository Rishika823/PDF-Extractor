const express = require("express");

const pdfRoutes = require("./routes/pdf.routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "PDF Extractor Backend is running 🚀"
    });
});

app.use("/api/pdf", pdfRoutes);

module.exports = app;