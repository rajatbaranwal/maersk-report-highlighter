📘 Maersk Report Highlighter

A React-based PDF reference highlighter built for the Maersk Q2 2025 Case Study assignment.
The application loads the official Maersk Q2 2025 Interim Report, displays all pages, and allows users to click on inline references (e.g., [3]) which automatically:

Scroll to the correct page

Highlight the relevant section/page

This improves readability and enables quick navigation inside dense financial documents.

🚀 Features
📄 Full PDF Viewer

Renders all pages of the Maersk Q2 2025 report using react-pdf.

Smooth scrolling enabled for long reports.

🔗 Clickable References

Clicking [3] auto-scrolls to Page 15.

✨ Highlight System

The corresponding page gets automatically highlighted for 3 seconds.

Helps reviewers instantly locate referenced content.

🎯 Clean & Maintainable Code

Uses React hooks (useState, useRef).

Works reliably on deployment (Vercel / Netlify).

📦 Compatible Setup

react-pdf v6.2.2

pdfjs-dist v2.14.305
(Chosen because latest versions break compatibility with CRA)


📁 Project Structure

maersk-report-highlighter/
│
├── public/
│   └── pdfs/
│       └── maersk.pdf   ← required PDF file
│
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── components/ (optional future structure)
│
└── README.md

📄 PDF Used

The application uses the official:

Maersk Q2 2025 Interim Report

File location: public/pdfs/maersk.pdf


🧑‍💻 How to Run Locally

Clone the repository:

git clone https://github.com/rajatbaranwal/maersk-report-highlighter.git


Install dependencies:

npm install


Start development server:

npm start


Open:

http://localhost:3000

