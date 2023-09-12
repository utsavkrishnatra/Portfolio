import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Utsav Krishnatra </span>
            from <span className="purple"> New Delhi, India.</span>
            <br /> I am a final year student pursuing Master of Applied Computing
            from University of Windsor,Canada.
            <br />
            I have worked with Tata Consultancy Services,Ernst & Young, and DRDO as a software developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning about Emerging Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Spiritual Endeavors
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Utsav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
