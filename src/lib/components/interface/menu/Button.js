import React from "react"
import styled from "styled-components"
import Icons from "../../../assets/icon/Icon"

const Container = styled.button`
  height: 40px;
  width: 40px;
  background-color: white;
  border-radius: 5px;
  display: inline-block;
  fill: ${({ mode, type }) => (mode === type ? "#0984e3" : "#333333")};
  outline: none;
  transition-duration: 0.3s;
  border-width: 0px;
  margin: 6px 3px;

  &:hover {
    background-color: #dfe6e9;
  }

  &:active {
    background-color: #b2bec3;
  }
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default ({ type, ...props }) => {
  const Icon = Icons[type]
  return (
    <Container {...props} type={type}>
      <Center>
        <Icon></Icon>
      </Center>
    </Container>
  )
}
