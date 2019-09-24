import React from "react"
import styled from "styled-components"

const Button = styled.div`
  background-color: white;
  font-size: 16px;
  padding: 5px 30px;
  margin: 0px;
  display: inline-block;
  transition: 0.3s;
  &:hover {
    transform: scale(1.5);
  }
  $:active {
    background-color: black;
    color: white;
  }
`

export default ({ onClick, children }) => (
  <Button onClick={onClick}>{children}</Button>
)
