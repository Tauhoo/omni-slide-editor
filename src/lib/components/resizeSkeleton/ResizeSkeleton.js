import React, { Component, createRef } from "react"
import styled from "styled-components"

const Dot = styled.div`
  width: ${({ borderWidth }) => borderWidth}px;
  height: ${({ borderWidth }) => borderWidth}px;
  position: absolute;
  border-radius: 50%;
  left: ${({ alt }) => ((alt === 0) | (alt === 3) ? "0px" : "100%")};
  top: ${({ alt }) => ((alt === 0) | (alt === 1) ? "0px" : "100%")};
  transform: translateX(-50%) translateY(-50%);
  background-color: #34495e;
  z-index: 1000;
  user-select: none;
`

const Container = styled.div`
  position: absolute;
  border-color: #34495e;
  border-style: dashed;
  border-width: 3px;
  box-sizing: border-box;
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
    this.setState({ order: this.props.order, mouseMode: this.props.mouseMode })
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps({ order, mouseMode }) {
    this.setState({ order, mouseMode })
  }

  render() {
    if (this.state.mouseMode !== "resize") return <></>
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
