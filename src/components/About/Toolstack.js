import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiLinux,
  SiAndroidstudio,
  SiJupyter
} from "react-icons/si";

function Toolstack() {

  const iconComponents = [
    <SiVisualstudiocode />,
    <SiPostman />,
    <SiSlack />,
    <SiVercel />,
    <SiLinux />,
    <SiAndroidstudio />,
    <SiJupyter />,
  ];
  
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {iconComponents.map((elem, idx) => (
        <Col xs={4} md={2} className={`tech-icons ${idx}`} key={idx}>
          {elem}
        </Col>
      ))}
    </Row>
  );
  // return (
  //   <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  //     <Col xs={4} md={2} className="tech-icons">
  //       <SiMacos />
  //     </Col>
  //     <Col xs={4} md={2} className="tech-icons">
  //       <SiVisualstudiocode />
  //     </Col>
  //     <Col xs={4} md={2} className="tech-icons">
  //       <SiPostman />
  //     </Col>
  //     <Col xs={4} md={2} className="tech-icons">
  //       <SiSlack />
  //     </Col>
  //     <Col xs={4} md={2} className="tech-icons">
  //       <SiVercel />
  //     </Col>
  //   </Row>
  // );
}

export default Toolstack;
