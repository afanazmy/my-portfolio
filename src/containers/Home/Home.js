import { Col, Row, Skeleton } from "antd";
import React, { useEffect, useState } from "react";

import "./home.css";
import Detail from "./Detail";
import Summary from "./Summary";

const Home = () => {
  const [state, setState] = useState({ loading: true, data: null });

  useEffect(() => {
    fetch("/me.json")
      .then((res) => res.json())
      .then((data) =>
        setState((state) => ({ ...state, loading: false, data }))
      );
  }, []);

  return (
    <div className="container">
      <Skeleton loading={state.loading} active>
        <Row>
          <Col xs={24} sm={24} md={24} lg={10} xl={9} xxl={8}>
            <div className="sider-summary">
              <Summary data={state.data} />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={14} xl={15} xxl={16}>
            <Detail data={state.data} />
          </Col>
        </Row>
      </Skeleton>
    </div>
  );
};

export default Home;
