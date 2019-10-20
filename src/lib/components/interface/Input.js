import React from "react"
import styled from "styled-components"
import Text from "./Text"

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: max-content auto;
  grid-gap: 10px;
`
const Input = styled.input`
  width: 100%;
  margin: 0px;
  padding: 0px;
  border-style: solid;
  border-width: 0px;
  outline: none;
  transition: 0.3s;
  font-size: 18px;
  color: #757575;
  display: flex;
  align-items: center;
  &:focus {
    border-width: 0px 0px 1px 0px;
    color: #414141;
  }

  &:hover {
    border-width: 0px 0px 1px 0px;
    color: #414141;
  }
`
export default ({ name, onChange, placeholder, type, defaultValue }) => (
  <Container>
    <Text>{name}</Text>
    <Input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      defaultValue={defaultValue}
    ></Input>
  </Container>
)
