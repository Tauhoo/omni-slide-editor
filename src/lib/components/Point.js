import React, { Component, createRef } from "react"
import styled from "styled-components"

const Container = styled.div`
  background-color: ${({ color }) => color};
  transform: scale(${({ isFocus }) => (isFocus ? 1.5 : 1)});
  height: ${({ radius }) => radius}px;
  width: ${({ radius }) => radius}px;
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  border-radius: 50%;
  &:hover {
    transform: scale(
      ${({ editable, isFocus }) => (editable || isFocus ? 1.5 : 1)}
    );
  }
`

export default class extends Component {
  top = this.props.top
  left = this.props.left
  isMove = false
  point = createRef()
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    const { radius, editable, color, top, left, isFocus, order } = this.props

    this.top = top
    this.left = left
    this.setState({ radius, editable, color, isFocus, order })
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps({
    radius,
    editable,
    color,
    top,
    left,
    isFocus,
    order,
  }) {
    this.top = top
    this.left = left
    this.setState({ radius, editable, color, isFocus, order })
  }

  render() {
    return (
      <Container
        {...this.state}
        top={this.top}
        left={this.left}
        order={this.state.order}
      />
    )
  }
}
