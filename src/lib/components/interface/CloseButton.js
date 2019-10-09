import React from "react"
import styled from "styled-components"
import { ReactComponent as Logo } from "../../assets/icon/close.svg"
const Container = styled.button`
  width: auto;
  height: auto;
  background-color: transparent;
  border-width: 0px;
  outline: none;
  position: absolute;
  top: 5px;
  left: 100%;
  transform: translateX(-100%);
`

export default ({ onClick }) => (
  <Container onClick={onClick}>
    <Logo></Logo>
  </Container>
)
