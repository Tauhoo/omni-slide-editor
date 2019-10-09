import React, { Component } from "react"
import styled from "styled-components"

const Container = styled.div`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-width: ${({ borderWidth }) => borderWidth}px;
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
