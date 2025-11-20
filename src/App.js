import React, { useState, useRef } from "react";
import "./App.css";

import { Document, Page, pdfjs } from "react-pdf";

// Correct worker for react-pdf v6 + pdfjs-dist v2
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function App() {
  const [numPages, setNumPages] = useState(null);

  // Refs for each page so we can scroll to a specific one
  const pageRefs = useRef([...Array(50)].map(() => React.createRef()));

  // Track which page should be highlighted
  const [highlightedPage, setHighlightedPage] = useState(null);

  // Called when PDF loads
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    console.log("PDF has", numPages, "pages");
  }

  // Scroll to a given page + highlight it
  const scrollToPage = (pageNumber) => {
    const pageDiv = pageRefs.current[pageNumber - 1]?.current;

    if (pageDiv) {
      // Scroll smoothly to the page
      pageDiv.scrollIntoView({ behavior: "smooth" });

      // Apply highlight
      setHighlightedPage(pageNumber);

      // Remove highlight after 3 seconds
      setTimeout(() => setHighlightedPage(null), 3000);
    }
  };

  return (
    <div className="container">

      {/* LEFT SIDE — PDF VIEWER */}
      <div className="pdf-section" style={{ height: "100vh", overflowY: "scroll" }}>
        <Document
          file={process.env.PUBLIC_URL + "/pdfs/maersk.pdf"}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(err) => console.error("PDF load error:", err)}
        >
          {numPages &&
            Array.from(new Array(numPages), (el, index) => (
              <div
                key={`page_${index + 1}`}
                ref={pageRefs.current[index]}
                style={{
                  marginBottom: "20px",
                  padding: "10px",
                  borderRadius: "8px",
                  transition: "background 0.3s ease",
                  background:
                    highlightedPage === index + 1
                      ? "yellow"
                      : "transparent",
                }}
              >
                <Page pageNumber={index + 1} width={600} />
              </div>
            ))}
        </Document>
      </div>

      {/* RIGHT SIDE — ANALYSIS TEXT */}
      <div className="text-section">
        <h2>Analysis</h2>

        <p>
          No extraordinary or one-off items affecting EBITDA were reported in
          Maersk’s Q2 2025 results. Gains or losses from asset sales, which
          could qualify as extraordinary items, are shown separately under EBIT
          and not included in EBITDA. The gain on sale of non-current assets was
          USD 25 m in Q2 2025, significantly lower than USD 208 m in Q2 2024 [
          <span
            className="ref"
            id="ref3"
            onClick={() => scrollToPage(15)}
            style={{ color: "blue", cursor: "pointer", fontWeight: "bold" }}
          >
            3
          </span>
          ].
        </p>

        <p>
          Clicking on <strong>[3]</strong> will scroll and highlight the correct part
          inside the PDF (Page 15).
        </p>
      </div>

    </div>
  );
}

export default App;
