import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Tanya Patel</span>.
          
            I’m a passionate{" "}
            <span className="purple">Full-Stack Developer</span> who loves
            building user-focused web applications and exploring data-driven
            solutions.
            <br />
            <br />
            I enjoy working with modern technologies like{" "}
            <span className="purple">
              {" "}
              React, Redux, Node.js, Express, and MongoDB
            </span>{" "}
            to craft clean, scalable, and impactful products.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music 
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Mobile:</strong> 9634313011
            <br />
            <strong>Email:</strong> tptanya123@gmail.com
            <br />
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/tanya0404"
              target="_blank"
              rel="noreferrer"
            >
              github.com/tanya0404
            </a>
            <br />
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/tanya0404/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/tanya0404/
            </a>
          </p>
          <footer className="blockquote-footer">Tanya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
