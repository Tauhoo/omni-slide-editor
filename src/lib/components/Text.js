import React, { Component } from "react"
import ResizeSkeleton from "./resizeSkeleton/ResizeSkeleton"
import styled from "styled-components"

const Container = styled.div`
  position: absolute;
  top: ${({ height }) => height}px;
  left: ${({ width }) => width}px;
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize}px;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`
const Text = styled.input`
  height: 100%;
  width: 100%;
  position: absolute;
  border: none;
  background-color: transparent;
  text-align: center;
`
export default class extends Component {
  top = 0
  left = 0
  text = ""
  state = {
    fontSize: 16,
    color: "black",
    isFocus: false,
    shapeRef: null,
    inputRef: null,
    order: null,
  }
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    const {
      fontSize,
      color,
      top,
      left,
      text,
      isFocus,
      shapeRef,
      inputRef,
      order,
      mouseMode,
      dotsRef,
      borderWidth,
      height,
      width,
    } = this.props
    this.width = width
    this.height = height
    this.top = top
    this.left = left
    this.text = text
    this.setState({
      fontSize,
      color,
      isFocus,
      shapeRef,
      inputRef,
      order,
      mouseMode,
      dotsRef,
      borderWidth,
    })
  }
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps({
    fontSize,
    color,
    top,
    text,
    left,
    isFocus,
    shapeRef,
    order,
    inputRef,
    mouseMode,
    dotsRef,
    borderWidth,
    height,
    width,
  }) {
    this.top = top
    this.left = left
    this.text = text
    this.width = width
    this.height = height
    this.setState({
      fontSize,
      color,
      isFocus,
      shapeRef,
      inputRef,
      order,
      mouseMode,
      dotsRef,
      borderWidth,
    })
  }
  render() {
    const {
      inputRef,
      shapeRef,
      order,
      fontSize,
      color,
      isFocus,
      mouseMode,
      dotsRef,
      borderWidth,
    } = this.state
    console.log(fontSize)

    return (
      <Container
        top={this.top}
        left={this.left}
        ref={shapeRef}
        order={order}
        width={this.width}
        height={this.height}
        type='movable'
      >
        <ResizeSkeleton
          dotsRef={dotsRef}
          borderWidth={borderWidth}
          order={order}
          mouseMode={mouseMode}
        ></ResizeSkeleton>
        <Text
          ref={inputRef}
          fontSize={fontSize}
          color={color}
          isFocus={isFocus}
          defaultValue={this.text}
          disabled={mouseMode !== "edit"}
        ></Text>
      </Container>
    )
  }
}
