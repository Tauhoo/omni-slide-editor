import React, { Component, createRef } from "react"
import styled from "styled-components"
import ResizeSkeleton from "./resizeSkeleton/ResizeSkeleton"

const Container = styled.div`
  background-color: ${({ color }) => color};
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  border-radius: ${({ isCircle }) => (isCircle ? "50%" : "0%")};
  border-width: ${({ borderWidth }) => borderWidth}px;
  border-color: ${({ borderColor }) => borderColor};
  border-style: solid;
`

export default class extends Component {
  top = this.props.top
  left = this.props.left
  height = this.props.height
  width = this.props.width
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    const {
      height,
      width,
      borderColor,
      borderWidth,
      color,
      top,
      left,
      isFocus,
      order,
      mouseMode,
      shapeRef,
      isCircle,
    } = this.props

    this.top = top
    this.left = left
    this.width = width
    this.height = height
    this.setState({
      borderColor,
      borderWidth,
      color,
      isFocus,
      order,
      ref: shapeRef,
      isCircle,
      mouseMode,
    })
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps({
    borderColor,
    borderWidth,
    color,
    isFocus,
    order,
    mouseMode,
    shapeRef,
    isCircle,
  }) {
    this.setState({
      borderColor,
      borderWidth,
      color,
      isFocus,
      order,
      ref: shapeRef,
      isCircle,
      mouseMode,
    })
  }

  render() {
    return (
      <Container
        {...this.state}
        top={this.top}
        left={this.left}
        width={this.width}
        height={this.height}
        order={this.state.order}
        type='movable'
        isCircle={this.state.isCircle}
      >
        <ResizeSkeleton
          dotsRef={this.props.dotsRef}
          borderWidth={this.state.borderWidth}
          order={this.state.order}
          mouseMode={this.state.mouseMode}
        ></ResizeSkeleton>
      </Container>
    )
  }
}
