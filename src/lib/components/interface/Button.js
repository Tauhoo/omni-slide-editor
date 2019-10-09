import React from "react"
import styled from "styled-components"
import Text from "./Text"

const Container = styled.button`
  width: 100%;
  padding: 10px 0px;
  border-radius: 5px;
  background-color: #2c3e50;
  border-width: 0px;
  outline: none;
`

export default ({ children, onClick }) => (
  <Container onClick={onClick}>
    <Text color='#ffff'>{children}</Text>
  </Container>
)
