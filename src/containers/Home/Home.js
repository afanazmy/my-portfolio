import React from "react";
import { Col, Row } from "antd";

import Summary from "./Summary";
import data from "../../components/data";

import "./home.css";
import Detail from "./Detail";

const Home = () => {
  return (
    <div className="container">
      <Row>
        <Col xs={24} sm={24} md={24} lg={10} xl={9} xxl={8}>
          <div className="sider-summary">
            <Summary data={data} />
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={14} xl={15} xxl={16}>
          <Detail data={data} />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
