import styled from "react-emotion";

const IconButton = styled('img')`
  cursor: pointer;

  opacity: 0.9;

  transition: opacity .2s;

  &:hover {
    opacity: 1;
  }
`;

export default IconButton;
