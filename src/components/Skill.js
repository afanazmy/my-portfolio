import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";

import { Link } from "./typography";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const Skill = ({ skills }) => {
  const [twoDividedSkills, setTwoDividedSkills] = useState({});
  const [threeDividedSkills, setThreeDividedSkills] = useState({});
  const screen = useBreakpoint();

  useEffect(() => {
    let two = {};
    let three = {};
    skills.map((skill, i) => {
      Array.isArray(two[Math.ceil((i + 1) / 4)])
        ? two[Math.ceil((i + 1) / 4)].push(skill)
        : (two[Math.ceil((i + 1) / 4)] = [skill]);
      Array.isArray(three[Math.ceil((i + 1) / 3)])
        ? three[Math.ceil((i + 1) / 3)].push(skill)
        : (three[Math.ceil((i + 1) / 3)] = [skill]);
      return true;
    });

    setTwoDividedSkills(two);
    setThreeDividedSkills(three);
    return true;
  }, [skills]);

  return (
    <Row>
      {screen.md ? (
        <>
          <Col span={8}>
            {threeDividedSkills[1]?.map((skill, i) => (
              <div key={i}>
                <Link>{`> ${skill}`}</Link>
              </div>
            ))}
          </Col>
          <Col span={8}>
            {threeDividedSkills[2]?.map((skill, i) => (
              <div key={i}>
                <Link>{`> ${skill}`}</Link>
              </div>
            ))}
          </Col>
          <Col span={8}>
            {threeDividedSkills[3]?.map((skill, i) => (
              <div key={i}>
                <Link>{`> ${skill}`}</Link>
              </div>
            ))}
          </Col>
        </>
      ) : (
        <>
          <Col span={12}>
            {twoDividedSkills[1]?.map((skill, i) => (
              <div key={i}>
                <Link>{`> ${skill}`}</Link>
              </div>
            ))}
          </Col>
          <Col span={12}>
            {twoDividedSkills[2]?.map((skill, i) => (
              <div key={i}>
                <Link>{`> ${skill}`}</Link>
              </div>
            ))}
          </Col>
        </>
      )}
    </Row>
  );
};

export default Skill;
