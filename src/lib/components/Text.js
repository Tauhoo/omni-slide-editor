import React, { Component } from "react"
import styled from "styled-components"

const Container = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
  text-decoration: ${({ textDecoration }) => textDecoration};
  cursor: default;
`

export default class extends Component {
  constructor(props) {
    super(props)
    this.data = this.props.data
  }
  render() {
    return (
      <Container {...this.data} ref={this.data.ref}>
        {this.data.text}
      </Container>
    )
  }
}
