// app/resume/page.js
import Link from "next/link";

export default function ResumePage() {
  return (
    <div style={{ padding: "2rem 1rem", maxWidth: "768px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "1rem" }}>
        My Resume
      </h1>
      <p style={{ marginBottom: "1rem", color: "#4b5563" }}>
        Below is my resume. You can scroll to view it, or download it directly.
      </p>

      {/* Embed the PDF (falls back to browser PDF viewer) */}
      <iframe
        src="/juan-resume.pdf"
        width="100%"
        height="800px"
        style={{ border: "1px solid #e5e7eb", borderRadius: "8px" }}
      ></iframe>

      <p style={{ marginTop: "1rem" }}>
        <a
          href="/resume.pdf"
          download
          style={{
            display: "inline-block",
            padding: "0.5rem 1rem",
            backgroundColor: "#2563eb",
            color: "#ffffff",
            borderRadius: "4px",
            textDecoration: "none",
          }}
        >
          Download Resume
        </a>
      </p>

      <p style={{ marginTop: "2rem" }}>
        <Link href="/" style={{ color: "#2563eb", textDecoration: "underline" }}>
          ← Back to Home
        </Link>
      </p>
    </div>
  );
}
