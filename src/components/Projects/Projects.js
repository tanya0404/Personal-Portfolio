import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="EduMate"
              description="EduMate is an AI-powered educational platform designed to enhance personalized learning and academic productivity for students and educators. It integrates intelligent modules such as user management, AI-assisted note processing, quiz generation, study planning, and learning analytics to support effective learning workflows. With features for teachers and institutions, secure authentication, and cross-platform integration, EduMate aims to transform traditional studying into a smart, data-driven, and engaging learning experience."
              ghLink="https://github.com/tanya0404/EduMate-4"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Recipe Maker"
              description="Recipe Maker is a modern React-based web application that allows users to easily create, manage, and explore a personalized collection of recipes. It offers rich recipe details, category-based filtering, and a favorites feature, all wrapped in a clean, responsive Tailwind CSS interface. By leveraging React hooks, efficient form handling, and persistent local storage, the app delivers a smooth and interactive user experience while showcasing best practices in modern frontend development."
              ghLink="https://github.com/tanya0404/Recipe-Maker"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Moodify"
              description="Moodify is an AI-powered web application that detects a user’s real-time mood through facial expression analysis using their webcam and instantly recommends music that matches that emotion. By leveraging face-api.js for emotion detection and a full-stack MERN-based architecture, Moodify creates a personalized and immersive music experience. The platform supports multiple moods such as Happy, Sad, Angry, and Neutral, delivering curated song recommendations seamlessly through a fast, responsive interface."
              ghLink="https://github.com/tanya0404/Moodify"
            //   demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>


      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
