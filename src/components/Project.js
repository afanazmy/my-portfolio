import React, { useState, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";
import { Col, Grid, Row, Tooltip } from "antd";

import Box from "./Box";
import { Link, Text } from "./typography";

import { ReactComponent as NextJS } from "../assets/images/nextjs.svg";
import { ReactComponent as Laravel } from "../assets/images/laravel.svg";
import { ReactComponent as ReactJS } from "../assets/images/reactjs.svg";
import { ReactComponent as ExpressJS } from "../assets/images/expressjs.svg";
import { ReactComponent as Javascript } from "../assets/images/javascript.svg";

const { useBreakpoint } = Grid;

const LaravelIcon = styled(Laravel)`
  path {
    stroke: ${({ theme, type }) =>
      type ? theme.colors[type] : theme.colors.tersier};
  }
`;

const ReactJSIcon = styled(ReactJS)`
  path {
    fill: ${({ theme, type }) =>
      type ? theme.colors[type] : theme.colors.tersier};
  }
`;

const JavascriptIcon = styled(Javascript)`
  path {
    fill: ${({ theme, type }) =>
      type ? theme.colors[type] : theme.colors.tersier};
  }
`;

const group = (link, key) => {
  const comp = {
    nextjs: <NextJS key={link.icon} style={{ marginRight: 6 }} />,
    laravel: <LaravelIcon key={link.icon} style={{ marginRight: 6 }} />,
    reactjs: <ReactJSIcon key={link.icon} style={{ marginRight: 6 }} />,
    expressjs: <ExpressJS key={link.icon} style={{ marginRight: 6 }} />,
    javascript: <JavascriptIcon key={link.icon} style={{ marginRight: 6 }} />,
  };

  return (
    <Tooltip key={key} title={link.name} placement="bottom">
      {comp[link.icon]}
    </Tooltip>
  );
};

const Project = ({ projects = [] }) => {
  const [modified, setModified] = useState([]);
  const [hover, setHover] = useState(undefined);
  const screen = useBreakpoint(null);

  useEffect(() => {
    let mods = [];
    if ((!screen.xl && screen.lg) || !screen.md) {
      mods = [...projects];
    } else {
      for (let i = 0; i < projects.length; i++) {
        if ((i + 1) % 2 === 0) {
          mods.push(projects[i], projects[i - 1]);
        } else if (i === projects.length - 1) {
          mods.push(null, projects[i]);
        }
      }
    }

    return setModified(mods);
  }, [projects, screen]);

  return (
    <>
      <Link
        style={{
          fontSize: 20,
          marginLeft: 6,
          transition: "all 0.2s ease-in-out",
          opacity: hover !== undefined ? 0.5 : 1,
        }}
      >
        My Projects
      </Link>
      <Row>
        {modified?.map((modif, i) =>
          modif ? (
            <Col
              key={i}
              xs={24}
              sm={24}
              md={12}
              lg={24}
              xl={12}
              xxl={12}
              style={{
                padding: 6,
                marginTop:
                  (!screen.xl && screen.lg) || !screen.md
                    ? 0
                    : i % 2 !== 0
                    ? -12
                    : 0,
              }}
            >
              <Box
                idx={i}
                hovered={hover}
                onMouseOver={() => setHover(i)}
                onTouchStart={() => setHover(i)}
                onMouseLeave={() => setHover(undefined)}
                onTouchEnd={() => setHover(undefined)}
              >
                <Row>
                  <Col span={24}>
                    <Text style={{ fontSize: 13 }}>
                      {moment(modif.start).format("MMM yyyy")}
                      {modif.end
                        ? ` - ${moment(modif.end).format("MMM yyyy")}`
                        : " - Present"}{" "}
                    </Text>
                  </Col>
                  <Col span={24}>
                    <strong>
                      <Link type="primary" style={{ fontSize: 16 }}>
                        {modif.title}
                      </Link>
                    </strong>
                  </Col>
                  <Col span={24}>
                    <Text style={{ fontSize: 13 }}>{modif.subtitle}</Text>
                  </Col>
                  <Col span={24} style={{ marginTop: 24 }}>
                    {modif.stacks.map((stack, i) => group(stack, i))}
                  </Col>
                </Row>
              </Box>
            </Col>
          ) : (
            <Col key={i} xs={24} sm={24} md={12} lg={24} xl={12} xxl={12} />
          )
        )}
      </Row>
    </>
  );
};

export default Project;
