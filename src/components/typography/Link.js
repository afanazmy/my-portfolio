import styled from "styled-components";

const Link = styled.span`
  @import url("https://fonts.googleapis.com/css2?family=Fira+Mono&family=Raleway&display=swap");
  font-family: "Fira Mono", monospace;
  font-size: 14px;
  color: ${({ theme, type }) =>
    type ? theme.colors[type] : theme.colors.primary};
  letter-spacing: -0.5px;

  :after {
    background: none repeat scroll 0 0 transparent;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: ${({ theme, type }) =>
      type ? theme.colors[type] : theme.colors.primary};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  ${({ isUrl }) => (isUrl ? ":hover:after { width: 100%; left: 1px; }" : "")}
`;

export default Link;
