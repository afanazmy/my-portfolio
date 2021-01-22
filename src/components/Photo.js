import React from "react";
import { Avatar } from "antd";

import myPhoto from "../assets/images/afan_azmi.jpg";

const Photo = () => {
  return (
    <>
      <Avatar size={48} src={myPhoto} />
    </>
  );
};

export default Photo;
