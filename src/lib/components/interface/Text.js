import styled from "styled-components"

const Text = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  color: ${({ color }) => (color ? color : "#414141")};
  display: inline;
`

export default Text
