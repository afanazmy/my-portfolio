import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 26px 30px 30px 30px;
  background-color: ${({ theme }) => theme.colors.secondary};
  transition: all 0.2s ease-in-out;

  &.opacity-half {
    opacity: 0.5;
  }

  &.opacity-full {
    opacity: 1;
  }

  &.opacity-full-hovered {
    opacity: 1;
    transform: scale(1.18);
  }
`;
const Box = ({ children, hovered, idx, ...props }) => {
  return (
    <Wrapper
      className={
        hovered !== undefined && hovered !== idx
          ? "opacity-half"
          : hovered === idx
          ? "opacity-full-hovered"
          : "opacity-full"
      }
      {...props}
    >
      {children}
    </Wrapper>
  );
};

export default Box;
