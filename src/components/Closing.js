import React from "react";
import { Col, Row } from "antd";

import { Link, Text } from "./typography";

const Closing = ({ closing, contact }) => {
  return (
    <>
      <Row className="closing">
        <Col span={24}>
          <Link>{closing?.title}</Link>
        </Col>
        <Col span={24}>
          <Text>{closing?.content}</Text>
        </Col>
      </Row>

      <Row className="contact">
        <Col span={24}>
          <Text>{contact?.title}</Text>
        </Col>
        <Col>
          <a href={`mailto:${contact?.email}`}>
            <Link isUrl={true}>{contact?.email}</Link>
          </a>
        </Col>
      </Row>
    </>
  );
};

export default Closing;
