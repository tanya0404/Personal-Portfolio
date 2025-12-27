import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";

const resumeUrl = "/final3.pdf";
const resumeFileName = "Tanya_Patel_Resume.pdf";

function ResumeNew() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      const response = await fetch(resumeUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = resumeFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading resume:", error);
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = resumeFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleViewResume = () => {
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Container fluid className="resume-section">
      <Particle />

      <Row className="resume-heading-row">
        <Col md={12} className="text-center">
          <h2 className="project-heading resume-title">
            My <strong className="purple">Resume</strong>
          </h2>
          <p className="resume-subtitle">
            Explore my professional journey and achievements
          </p>
        </Col>
      </Row>

      <Row className="resume-content-row">
        <Col md={10} className="resume-content-col">
          <div className="resume-button-container">
            <Button
              onClick={handleDownload}
              disabled={isDownloading}
              className="resume-download-btn"
              variant="primary"
            >
              {isDownloading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Downloading...
                </>
              ) : (
                <>
                  <svg className="resume-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download Resume
                </>
              )}
            </Button>

            <Button
              onClick={handleViewResume}
              className="resume-view-btn"
              variant="outline-light"
            >
              <svg className="resume-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              View Resume
            </Button>
          </div>

          <div className="resume-preview-container">
            <div className="resume-preview-badge">PDF Preview</div>
            <object
              data={resumeUrl}
              type="application/pdf"
              width="100%"
              height="100%"
              className="resume-pdf-object"
            >
              <div className="resume-fallback">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#623686" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <p>Unable to display the resume preview.</p>
                <Button onClick={handleViewResume} variant="primary" className="resume-fallback-btn">
                  Open Resume in New Tab
                </Button>
              </div>
            </object>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ResumeNew;
