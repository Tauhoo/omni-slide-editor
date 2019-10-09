import React, { Component, createRef } from "react"
import Title from "../interface/Title"
import Input from "../interface/Input"
import CloseButton from "../interface/CloseButton"
import styled from "styled-components"
import { eventRegister } from "./inputEvent"

const Container = styled.div`
  width: 300px;
  padding: 20px;
  box-sizing: border-box;
  background-color: white;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  border-radius: 10px;
  position: absolute;
  border: 1px solid #cccccc;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
`

const Wrapper = styled.div``

export default class extends Component {
  data = this.props.data
  ref = createRef()
  state = { active: false, left: 0, top: 0 }

  constructor(props) {
    super(props)
    eventRegister(this)
  }

  onRightClick = e => {
    e.preventDefault()
    this.setState({ active: true, left: e.offsetX, top: e.offsetY })
  }

  componentDidMount() {
    this.ref.current.addEventListener("contextmenu", this.onRightClick)
  }

  componentWillUnmount() {
    this.ref.current.removeEventListener("contextmenu", this.onRightClick)
  }

  render() {
    return (
      <Wrapper ref={this.ref}>
        {this.props.children}
        {this.state.active ? (
          <Container left={this.state.left} top={this.state.top}>
            <Title>Setting</Title>
            <Input
              placeholder='background color'
              name='color'
              defaultValue={this.data.backgroundColor}
              onChange={this.onChangeBackgroundColor}
            ></Input>
            <Input
              placeholder='border color'
              name='border-color'
              defaultValue={this.data.borderColor}
              onChange={this.onChangeBorderColor}
            ></Input>
            <Input
              type='number'
              placeholder='border width'
              name='border-width'
              defaultValue={this.data.borderWidth}
              onChange={this.onChangeBorderWidth}
            ></Input>
            <Input
              type='number'
              placeholder='border radius'
              name='border-radius'
              defaultValue={this.data.borderRadius}
              onChange={this.onChangeBorderRadius}
            ></Input>
            <CloseButton
              onClick={() => this.setState({ active: false })}
            ></CloseButton>
          </Container>
        ) : null}
      </Wrapper>
    )
  }
}
