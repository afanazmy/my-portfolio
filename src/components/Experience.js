import React, { useEffect, useState } from "react";
import moment from "moment";
import { Col, Grid, Row } from "antd";

import Box from "./Box";
import { Link, Text } from "./typography";

const { useBreakpoint } = Grid;

const Experience = ({ experiences }) => {
  const [modified, setModified] = useState([]);
  const [hover, setHover] = useState(undefined);
  const screen = useBreakpoint(null);

  useEffect(() => {
    let mods = [];
    if ((!screen.xl && screen.lg) || !screen.md) {
      mods = [...experiences];
    } else {
      for (let i = 0; i < experiences.length; i++) {
        if ((i + 1) % 2 === 0) {
          mods.push(experiences[i], experiences[i - 1]);
        } else if (i === experiences.length - 1) {
          mods.push(null, experiences[i]);
        }
      }
    }

    return setModified(mods);
  }, [experiences, screen]);

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
        My Experiences
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
                    <strong>
                      <Link type="primary" style={{ fontSize: 16 }}>
                        {modif.position}
                      </Link>
                    </strong>
                  </Col>
                  <Col span={24}>
                    <Text style={{ fontSize: 13 }}>
                      {modif.company} {modif.type ? `• ${modif.type}` : ""}
                    </Text>
                  </Col>
                  <Col span={24}>
                    <Text style={{ fontSize: 13 }}>
                      {moment(modif.start).format("MMM yyyy")}
                      {modif.end
                        ? ` - ${moment(modif.end).format("MMM yyyy")}`
                        : " - Present"}{" "}
                      •{" "}
                      {moment
                        .duration(
                          moment(modif.end || undefined).diff(
                            moment(modif.start)
                          )
                        )
                        .humanize()}
                    </Text>
                  </Col>
                  <Col span={24} style={{ fontSize: 13 }}>
                    <Text>{modif.location}</Text>
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

export default Experience;
