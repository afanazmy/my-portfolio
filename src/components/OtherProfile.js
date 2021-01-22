import React, { useState } from "react";

import { Avatar, Col, Row, Grid, Image, Tooltip } from "antd";
import { Link } from "./typography";

import photo from "../assets/images/afan_azmi.jpg";
import resume from "../assets/files/resume_afan_azmi.pdf";
import { ReactComponent as LinkedIn } from "../assets/images/linkedin.svg";
import { ReactComponent as GitHub } from "../assets/images/github.svg";
import { ReactComponent as Resume } from "../assets/images/link.svg";
import styled from "styled-components";

const { useBreakpoint } = Grid;

const LinkedInIcon = styled(LinkedIn)`
  path {
    fill: ${({ theme, type }) =>
      type ? theme.colors[type] : theme.colors.primary};
  }
`;
const GitHubIcon = styled(GitHub)`
  path {
    fill: ${({ theme, type }) =>
      type ? theme.colors[type] : theme.colors.primary};
  }
`;

const ResumeIcon = styled(Resume)`
  path {
    fill: ${({ theme, type }) =>
      type ? theme.colors[type] : theme.colors.primary};
    stroke: ${({ theme, type }) =>
      type ? theme.colors[type] : theme.colors.primary};
  }
`;

const group = (link) => {
  const comp = {
    linkedin: <LinkedInIcon style={{ marginRight: 6, marginTop: 15 }} />,
    github: <GitHubIcon style={{ marginRight: 6, marginTop: 15 }} />,
    link: <ResumeIcon style={{ marginRight: 6, marginTop: 15 }} />,
  };

  return (
    <Col key={link.icon}>
      <Tooltip title={link.info} placement="top">
        {comp[link.icon]}
        <a
          href={link.url === "resumeUrl" ? resume : link.url}
          target="_blank"
          rel="noreferrer"
        >
          <Link isUrl={true}>{link.name}</Link>
        </a>
      </Tooltip>
    </Col>
  );
};

const OtherProfile = ({ links }) => {
  const screen = useBreakpoint(null);
  const [visible, setVisible] = useState(false);

  return (
    <Row
      style={{ width: "100%" }}
      gutter={12}
      justify={!screen.sm ? "center" : "start"}
    >
      <Image
        src={photo}
        height={0}
        width={0}
        preview={{
          visible: visible,
          onVisibleChange: (value) => (!value ? setVisible(value) : true),
        }}
      />
      <Col
        xs={24}
        sm={3}
        md={2}
        lg={4}
        xl={4}
        xxl={4}
        style={{ textAlign: !screen.sm ? "center" : "left" }}
      >
        <Avatar
          size={48}
          src={photo}
          onClick={() => setVisible(true)}
          style={{ cursor: "pointer" }}
          onContextMenu={(e) => e.preventDefault()}
        />
      </Col>

      {links.map((link) => group(link))}
    </Row>
  );
};

export default OtherProfile;
