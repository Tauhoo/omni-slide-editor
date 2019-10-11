import React, { Component } from "react"
import styled from "styled-components"

const Container = styled.div`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  border-width: ${({ borderWidth }) => borderWidth}px;
  border-color: ${({ borderColor }) => borderColor};
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-style: solid;
`

export default class extends Component {
  constructor(props) {
    super(props)
    this.data = this.props.data
  }
  render() {
    return <Container {...this.data} ref={this.data.ref}></Container>
  }
}
