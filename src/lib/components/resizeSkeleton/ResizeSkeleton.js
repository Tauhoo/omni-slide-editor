import React, { Component, createRef } from "react"
import styled from "styled-components"

const Dot = styled.div`
  width: ${({ borderWidth }) => borderWidth * 2}px;
  height: ${({ borderWidth }) => borderWidth * 2}px;
  position: absolute;
  border-radius: 50%;
  background-color: transparent;
  left: ${({ alt }) => ((alt === 0) | (alt === 3) ? "0px" : "100%")};
  top: ${({ alt }) => ((alt === 0) | (alt === 1) ? "0px" : "100%")};
  transform: translate(-50%, -50%);
  &:hover {
    background-color: blue;
  }
  z-index: 1000;
`

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`

export default class extends Component {
  aDot = this.props.dotsRef[0]
  bDot = this.props.dotsRef[1]
  cDot = this.props.dotsRef[2]
  dDot = this.props.dotsRef[3]

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    this.setState({ order: this.props.order })
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps({ order }) {
    this.setState({ order })
  }

  render() {
    return (
      <Container>
        <Dot
          ref={this.aDot}
          alt={0}
          borderWidth={this.props.borderWidth}
          type='dot'
          {...this.state}
        ></Dot>
        <Dot
          ref={this.bDot}
          alt={1}
          borderWidth={this.props.borderWidth}
          type='dot'
          {...this.state}
        ></Dot>
        <Dot
          ref={this.cDot}
          alt={2}
          borderWidth={this.props.borderWidth}
          type='dot'
          {...this.state}
        ></Dot>
        <Dot
          ref={this.dDot}
          alt={3}
          borderWidth={this.props.borderWidth}
          type='dot'
          {...this.state}
        ></Dot>
      </Container>
    )
  }
}
