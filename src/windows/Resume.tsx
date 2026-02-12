import WindowControls from "#components/WindowControls";
import WindowsWrapper from "#hoc/WindowsWrapper";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useState } from "react";

// Initialize PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  const [numPages, setNumPages] = useState<number>(0);

  return (
    <>
      {/* Window Header */}
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>

        {/* Download Button */}
        <a
          href="files/anil-resume.pdf"
          download
          className="cursor-pointer"
          title="Download Resume"
        >
          <Download className="icon cursor-pointer" />
        </a>
      </div>

      {/* PDF Document */}
      <div className="max-h-[80vh] overflow-y-auto bg-white px-4 py-3">
        <Document
          file="files/anil-resume.pdf"
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={index + 1}
              pageNumber={index + 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          ))}
        </Document>
      </div>
    </>
  );
};

const ResumeWindow = WindowsWrapper(Resume, "resume");

export default ResumeWindow;
