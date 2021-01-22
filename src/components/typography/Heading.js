import styled from "styled-components";

const Heading = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Fira+Mono&family=Raleway&display=swap');
  font-family: 'Fira Mono', monospace;
  font-size: 62px;
  color: ${({ theme, type }) =>
    type ? theme.colors[type] : theme.colors.primary};
  line-height: 62px;
  letter-spacing: -3px;
`;

export default Heading;
