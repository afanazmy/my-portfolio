import styled from "styled-components";

const Text = styled.span`
  @import url('https://fonts.googleapis.com/css2?family=Fira+Mono&family=Raleway&display=swap');
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  color: ${({ theme, type }) =>
    type ? theme.colors[type] : theme.colors.text};
`;

export default Text;
