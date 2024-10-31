import React from "react";
import { Col, Row } from "antd";

import Experience from "../../components/Experience";
import Project from "../../components/Project";
import Closing from "../../components/Closing";

const Detail = ({ data }) => {
  return (
    <div className="detail">
      <Row className="experience">
        <Col span={24}>
          <Experience experiences={data?.experiences} />
        </Col>
      </Row>

      <Row className="projects">
        <Col span={24}>
          <Project projects={data?.projects} />
        </Col>
      </Row>

      <Row className="closing">
        <Col span={24}>
          <Closing closing={data?.closing} contact={data?.contact} />
        </Col>
      </Row>
    </div>
  );
};

export default Detail;
