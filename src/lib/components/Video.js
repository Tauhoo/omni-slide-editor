import React, { Component } from "react"
import styled from "styled-components"
import { ReactComponent as Video } from "../assets/icon/video.svg"

const Container = styled.div`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  border-width: ${({ borderWidth }) => borderWidth}px;
  border-style: solid;
  border-color: ${({ borderColor }) => borderColor};
  background-color: #ecf0f1;
  position: relative;
  overflow: hidden;
`

const Iframe = styled.iframe`
  height: 100%;
  width: 100%;
  border: none;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
`

const VideoSized = styled(Video)`
  height: 100px;
  width: 100px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default class extends Component {
  constructor(props) {
    super(props)
    this.data = this.props.data
  }
  render() {
    return (
      <Container {...this.data} ref={this.data.ref}>
        <Iframe src={this.data.src}></Iframe>
        <VideoSized></VideoSized>
      </Container>
    )
  }
}
