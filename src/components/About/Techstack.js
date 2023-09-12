import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiApachekafka,
  SiSolidity,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiPandas,
  SiNumpy
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

const iconArr = [
  <CgCPlusPlus />,
  <DiJavascript1 />,
  <TbBrandGolang />,
  <DiNodejs />,
  <DiReact />,
  <SiSolidity />,
  <DiMongodb />,
  <SiMicrosoftsqlserver/>,
  <SiApachekafka/>,
  <DiGit />,
  <SiFirebase />,
  <SiRedis />,
  <SiPostgresql />,
  <DiPython />,
  <SiPandas/>,
  <SiNumpy/>,
  <DiJava />
  
];
function Techstack() {
  
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {iconArr.map((elem, idx) => (
        <Col xs={4} md={2} className={`tech-icons ${idx}`} key={idx}>
          {elem}
        </Col>
      ))}
    </Row>
  );
  
  // return (
  //   <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  //     <Col xs={4} md={2} className="tech-icons">
  //       <CgCPlusPlus />
  //     </Col>
  //     <Col xs={4} md={2} className="tech-icons">
  //       <DiJavascript1 />
  //     </Col>
  //     <Col xs={4} md={2} className="tech-icons">
  //       <TbBrandGolang />
  //     </Col>
  //     <Col xs={4} md={2} className="tech-icons">
  //       <DiNodejs />
  //     </Col>
  //     <Col xs={4} md={2} className="tech-icons">
  //       <DiReact />
  //     </Col>
  //     <Col xs={4} md={2} className="tech-icons">
  //       <SiSolidity />
  //     </Col>
  //     <Col xs={4} md={2} className="tech-icons">
  //       <DiMongodb />
  //     </Col>
  //     <Col xs={4} md={2} className="tech-icons">
  //       <SiNextdotjs />
  //     </Col>
  //     <Col xs={4} md={2} className="tech-icons">
  //       <DiGit />
  //     </Col>
  //     <Col xs={4} md={2} className="tech-icons">
  //       <SiFirebase />
  //     </Col>
  //     <Col xs={4} md={2} className="tech-icons">
  //       <SiRedis />
  //     </Col>
  //     <Col xs={4} md={2} className="tech-icons">
  //       <SiPostgresql />
  //     </Col>
  //     <Col xs={4} md={2} className="tech-icons">
  //       <DiPython />
  //     </Col>
  //     <Col xs={4} md={2} className="tech-icons">
  //       <DiJava />
  //     </Col>
  //   </Row>
  // );
}

export default Techstack;
