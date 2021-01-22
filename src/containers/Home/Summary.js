import React from "react";
import { Col, Row } from "antd";

import { Heading, Text } from "../../components/typography";
import Skill from "../../components/Skill";
import OtherProfile from "../../components/OtherProfile";

const Summary = ({ data }) => {
  return (
    <div className="summary">
      <Row>
        <Col>
          <Heading>{data.title}</Heading>
          <Text>{data.personalStatement}</Text>
        </Col>
      </Row>

      <Row style={{ marginTop: 24, width: "100%" }}>
        <Col>
          <Text>{data.skillsIntro}</Text>
        </Col>
      </Row>

      <Row style={{ marginTop: 6, width: "100%" }}>
        <Col style={{ width: "100%" }}>
          <Skill skills={data.skills} />
        </Col>
      </Row>

      <Row className="links" style={{ width: "100%" }}>
        <Col style={{ width: "100%" }}>
          <OtherProfile links={data.links} />
        </Col>
      </Row>
    </div>
  );
};

export default Summary;
