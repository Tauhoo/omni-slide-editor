import React from "react"
import styled from "styled-components"

const Button = styled.button`
  font-size: 16px;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 10px;
  transition: 0.3s;
  height: 50px;
  min-width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-align: center;
  border-radius: 5px;
  border-color: transparent;
  outline: none;

  color: ${({ active }) => (active ? "#25CCF7" : "#2C3A47")};
  > * {
    fill: ${({ active }) => (active ? "#25CCF7" : "#2C3A47")};
  }
  &:hover {
    background-color: #ecf0f1;
  }
`

export default ({ onClick, children, active, onBlur, onMouseDown }) => (
  <Button
    onClick={onClick}
    active={active === "true"}
    onBlur={onBlur}
    onMouseDown={onMouseDown}
  >
    {children}
  </Button>
)
