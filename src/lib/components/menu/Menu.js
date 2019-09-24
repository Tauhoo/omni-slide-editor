import React, { Component } from "react"
import styled from "styled-components"

import MenuButton from "../menu/MenuButton"

const Container = styled.div`
  padding: 10px;
  box-sizing: border-box;
`

export default ({ move, resize, edit }) => {
  return (
    <Container>
      <MenuButton onClick={move}>move</MenuButton>
      <MenuButton onClick={resize}>resize</MenuButton>
      <MenuButton onClick={edit}>edit</MenuButton>
    </Container>
  )
}
