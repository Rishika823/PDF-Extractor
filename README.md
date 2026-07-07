# 📄 PDF Resume Extractor Backend

A Node.js and Express backend application that uploads PDF resumes, extracts their text, and converts the content into structured JSON using AI (Groq LLM). This project demonstrates file upload handling, PDF processing, AI integration, and REST API development.

---

# 🚀 Features

- Upload PDF resumes
- Validate uploaded files (PDF only)
- Extract text from PDF documents
- Parse resume information using Groq AI
- Return structured JSON response
- RESTful API architecture
- Modular backend structure
- Environment variable support
- Error handling

---

# 📌 What This Project Does

The backend accepts a PDF resume from the client.

Workflow:

```
Client
   │
   ▼
Upload PDF
   │
   ▼
Multer Middleware
   │
   ▼
Store PDF in uploads/
   │
   ▼
Extract Text from PDF
   │
   ▼
Send Text to Groq AI
   │
   ▼
Extract Resume Information
   │
   ▼
Return Structured JSON
```

---

# 📂 Project Structure

```
src/
│
├── config/
│
├── controllers/
│     pdf.controller.js
│
├── middleware/
│     upload.middleware.js
│
├── routes/
│     pdf.routes.js
│
├── services/
│     pdf.service.js
│     groq.service.js
│
├── uploads/
│
├── app.js
└── server.js
```

---

# 🛠 Tech Stack

- Node.js
- Express.js
- Multer
- pdf-parse
- Groq API
- dotenv
- Nodemon

---

# 📦 Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project

```bash
cd pdf-extractor-backend
```

Install dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file.

```env
PORT=3000

GROQ_API_KEY=your_groq_api_key
```

---

# ▶️ Run the Project

Development

```bash
npm run dev
```

Production

```bash
npm start
```

---

# 📌 API Endpoints

## Health Check

```
GET /
```

Response

```json
{
  "message": "PDF Extractor Backend is running 🚀"
}
```

---

## Test AI Connection

```
GET /api/pdf/ai-test
```

Response

```json
{
  "success": true,
  "message": "Hello from Groq AI!"
}
```

---

## Upload Resume

```
POST /api/pdf/upload
```

Body

```
form-data

Key: pdf
Type: File
```

---

# Example Response

```json
{
  "success": true,
  "message": "Resume parsed successfully using AI.",
  "data": {
    "name": "John Doe",
    "email": "john@gmail.com",
    "phone": "9876543210",
    "linkedin": "linkedin.com/in/johndoe",
    "github": "github.com/johndoe",
    "skills": [
      "Node.js",
      "Express",
      "JavaScript"
    ],
    "education": [],
    "experience": [],
    "projects": [],
    "certifications": []
  }
}
```

---

# 🔄 Request Flow

```
POST /api/pdf/upload
            │
            ▼
Upload Middleware (Multer)
            │
            ▼
Store PDF
            │
            ▼
Extract PDF Text
            │
            ▼
Groq AI
            │
            ▼
Structured JSON
            │
            ▼
Response
```

---

# ⚙️ How It Works

### 1. Upload PDF

The client uploads a resume using a multipart/form-data request.

---

### 2. File Validation

The middleware validates that only PDF files are accepted.

---

### 3. Save File

The uploaded PDF is stored inside the `uploads` directory.

---

### 4. Extract Text

The application extracts all readable text from the PDF using `pdf-parse`.

---

### 5. AI Processing

The extracted text is sent to Groq AI with a carefully designed prompt that instructs the model to return structured resume information.

---

### 6. JSON Response

The backend returns structured resume details as JSON.

---

# 📚 Skills Demonstrated

- REST API Development
- Express.js
- Middleware
- File Uploads
- Multer
- PDF Processing
- AI Integration
- Prompt Engineering
- Environment Variables
- Error Handling
- Modular Backend Architecture
- Service Layer Pattern

---

# 🚀 Future Improvements

- OCR support for scanned PDFs
- Multiple document formats (DOCX, TXT)
- Resume scoring
- Skill extraction with confidence scores
- ATS compatibility analysis
- Bulk resume parsing
- Database integration
- Authentication and authorization
- Resume comparison
- Export structured data to Excel or CSV

---

# 👨‍💻 Author

Developed using **Node.js**, **Express.js**, and **Groq AI** to demonstrate modern backend development with AI-powered document processing.

# Example Response

```json
{
  "success": true,
  "message": "Resume parsed successfully using AI.",
  "data": {
    "name": "Aarav Mehta",
    "email": "aarav.mehta@example.com",
    "phone": "+91 9876543210",
    "linkedin": "https://www.linkedin.com/in/aarav-mehta",
    "github": "https://github.com/aaravmehta",
    "skills": [
      "Python",
      "Django",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Git",
      "REST APIs"
    ],
    "education": [
      {
        "degree": "Bachelor of Technology",
        "field": "Information Technology",
        "institution": "National Institute of Technology",
        "cgpa": "8.6/10",
        "completionDate": "2024"
      }
    ],
    "experience": [
      {
        "role": "Backend Developer",
        "company": "TechNova Solutions",
        "startDate": "July 2024",
        "endDate": "Present",
        "achievements": [
          "Built scalable REST APIs using Django and FastAPI.",
          "Optimized SQL queries, reducing API response time by 35%.",
          "Integrated third-party payment and authentication services."
        ]
      }
    ],
    "projects": [
      {
        "name": "Inventory Management System",
        "technologies": [
          "Python",
          "FastAPI",
          "PostgreSQL",
          "Docker"
        ],
        "description": "Developed a cloud-based inventory management platform with role-based access and real-time stock tracking."
      }
    ],
    "certifications": [
      {
        "name": "AWS Certified Cloud Practitioner",
        "provider": "Amazon Web Services",
        "year": "2024"
      }
    ]
  }
}
```
