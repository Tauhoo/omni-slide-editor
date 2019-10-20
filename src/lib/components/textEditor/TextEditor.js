import React, { Component, createRef } from "react"
import Title from "../interface/Title"
import Input from "../interface/Input"
import CloseButton from "../interface/CloseButton"
import { eventRegister } from "./inputEvent"
import styled from "styled-components"
import { connect } from "react-redux"
import store from "../../redux/store"

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
  z-index: 10000;
`

const Wrapper = styled.div``

class TextEditor extends Component {
  data = this.props.data
  ref = createRef()
  state = { active: false, left: 0, top: 0 }

  constructor(props) {
    super(props)
    eventRegister(this)
  }

  onRightClick = e => {
    e.preventDefault()
    if (this.props.mode !== "Setting" || this.props.display) return
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
        {this.state.active && this.props.mode === "Setting" ? (
          <Container left={this.state.left} top={this.state.top}>
            <Title>Setting</Title>
            <Input
              placeholder='color'
              name='color'
              defaultValue={this.data.color}
              onChange={this.onChangeColor}
            ></Input>
            <Input
              placeholder='font family'
              name='font family'
              defaultValue={this.data.fontFamily}
            ></Input>
            <Input
              placeholder='text decoration'
              name='text-decoration'
              defaultValue={this.data.textDecoration}
            ></Input>
            <Input
              type='number'
              placeholder='font size'
              name='font-size'
              defaultValue={this.data.fontSize}
              onChange={this.onChangeFontSize}
            ></Input>
            <Input
              type='number'
              placeholder='font weight'
              name='font-weight'
              defaultValue={this.data.fontWeight}
              onChange={this.onChangeFontWeight}
            ></Input>
            <Input
              type='text'
              placeholder='text'
              name='text'
              defaultValue={this.data.text}
              onChange={this.onChangeText}
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

const mapStateToProps = ({ controller }) => {
  return {
    mode: controller.mode,
    display: controller.display,
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default store(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TextEditor)
)
