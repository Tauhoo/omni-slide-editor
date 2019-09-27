import React from "react"
import styled from "styled-components"
import MenuButton from "../MenuButton"

import { ReactComponent as RectangleIcon } from "../../../assets/icon/rectangle.svg"
import { ReactComponent as CircleIcon } from "../../../assets/icon/circle.svg"
import { ReactComponent as TextleIcon } from "../../../assets/icon/text.svg"

const Container = styled.div`
  position: absolute;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 300px;
  grid-gap: 5px;
  padding-right: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  border-color: #d8d8d8;
  border-width: 1px;
  border-style: solid;
  z-index: 9999;
`

export default ({ x, y, onAdd, display, onBlur }) =>
  display === "true" ? (
    <Container x={x} y={y}>
      <MenuButton onMouseDown={() => onAdd("rectangle")}>
        <RectangleIcon></RectangleIcon>
      </MenuButton>
      <MenuButton onMouseDown={() => onAdd("circle")}>
        <CircleIcon></CircleIcon>
      </MenuButton>
      <MenuButton onMouseDown={() => onAdd("text")}>
        <TextleIcon></TextleIcon>
      </MenuButton>
    </Container>
  ) : null
