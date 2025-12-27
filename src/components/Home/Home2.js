import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I’m a passionate Full-Stack Developer who enjoys transforming ideas into clean, user-centric web applications. I love building intuitive interfaces backed by robust backend systems that solve real-world problems.
              <br />
              <br />
              I work comfortably across the stack using
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, React, Redux, Node.js, Express, and
                  MongoDB{" "}
                </b>
              </i>
              — and I enjoy working across both frontend and backend stacks.
              
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  modern Web Applications, APIs, and data-driven products{" "}
                </b>
              </i>
              
              <br />
              <br />
              I’m always exploring new tools and best practices to improve performance and user experience, and I particularly enjoy building projects with
              <b className="purple"> Node.js</b>,{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
