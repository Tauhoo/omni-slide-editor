import React, { Component } from "react"
import styled from "styled-components"

import { ReactComponent as MoveIcon } from "../../assets/icon/move.svg"
import { ReactComponent as TextIcon } from "../../assets/icon/text.svg"
import { ReactComponent as ResizeIcon } from "../../assets/icon/resize.svg"

import MenuButton from "./MenuButton"
import ShapeMenu from "./ShapeMenu/ShapeMenu"
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
`

export default ({ move, resize, edit, mouseMode, onAdd }) => {
  return (
    <Container>
      <MenuButton onClick={move} active={(mouseMode === "move").toString()}>
        <MoveIcon />
      </MenuButton>
      <MenuButton onClick={resize} active={(mouseMode === "resize").toString()}>
        <ResizeIcon></ResizeIcon>
      </MenuButton>
      <MenuButton onClick={edit} active={(mouseMode === "edit").toString()}>
        <TextIcon></TextIcon>
      </MenuButton>
      <ShapeMenu onAdd={onAdd}></ShapeMenu>
    </Container>
  )
}
