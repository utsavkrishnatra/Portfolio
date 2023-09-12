import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wse from "../../Assets/Projects/wse.png";
import foodApp from "../../Assets/Projects/foodApp_1.png";
import insta_reels from "../../Assets/Projects/insta_part_1.png";
import csp2 from "../../Assets/Projects/csp2.png";
import movie from "../../Assets/Projects/Movie_App.png";
import auto from "../../Assets/Projects/auto.png";

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
              imgPath={insta_reels}
              isBlog={false}
              title="React Reels"
              description=" React Reels project is a sophisticated social media platform built on React.js, Redux, Next.js, MaterialUI and Firebase.It provides a secure and engaging environment for users to connect, share content, and stay updated with the latest posts from their friends."
              ghLink="https://github.com/utsavkrishnatra/web_dev/tree/main/reels"
              //demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={csp2}
              isBlog={false}
              title="Client-Server Application in Linux"
              description="This application is a robust client-server system with load balancing and fault tolerance capabilities. It efficiently manages client connections, ensuring seamless scalability and uninterrupted service delivery. Additionally, a mirror server enhances reliability and handles excessive traffic, making it a resilient and high-performance solution."
              ghLink="https://github.com/utsavkrishnatra/ASP-CLIENT-SERVER-FINAL"
              //demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodApp}
              isBlog={false}
              title="EatFit"
              description="The EatFit clone is a health-focused meal plan delivery website utilizing React for the frontend and Express for the backend, featuring user authentication with JWT and secure payments via RazorPay. It offers a dynamic interface with user profiles, reviews, and booking capabilities, ensuring a seamless and convenient experience for health-conscious customers."
              ghLink="https://github.com/utsavkrishnatra/web_dev/tree/main/foodApp"
              //demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wse}
              isBlog={false}
              title="Web Search Engine (Java)"
              description="This projects showcases use of advenced data structures such as Trie, PriorityQueue, HashMaps ,MinHeaps, Ternary Search Trees and Splay Trees (propesed for searching).It executes algorithms such as BFS for scraping, Regex Dynamic Programming (Edit Distance) for finding nearest word along with optimization done to make the search faster.
              It has features like word search and ranking, word suggestion, frequency check and history."
              ghLink="https://github.com/utsavkrishnatra/Web_Search_Engine"
              //demoLink=""<--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movies App"
              description="The Movies App empowers users to apply diverse filters, including release date, genre, and watch trailer options, facilitating comprehensive movie exploration and reviews. The application leverages the Axios library for seamless data retrieval, integrates Redux for state management, and incorporates advanced technologies like React-Bootstrap, SCSS, Material UI, and Firebase, culminating in an immersive and feature-rich experience"
              ghLink="https://github.com/utsavkrishnatra/web_dev/tree/main/React_Movies_13_Mine"
              // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={auto}
              isBlog={false}
              title="HackerRank Automation "
              description="It used puppeteer and axios to automate question solving.Axios fetches data from relevant APIs and puppeteer navigates to the desired section and feeds the answer data simulating a user through various options available."
              ghLink="https://github.com/utsavkrishnatra/web_dev/tree/main/9_Automation"
              // demoLink="" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
