import React, { Component } from "react"
import styled from "styled-components"
import { ReactComponent as Video } from "../assets/icon/video.svg"
import { connect } from "react-redux"
import store from "../redux/store"

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
  display: ${({ mode, display }) =>
    mode === "Preview" || display ? "block" : "none"};
  transition-duration: 0.3s;
`

const VideoSized = styled(Video)`
  height: 100px;
  width: 100px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${({ mode, display }) =>
    mode === "Preview" || display ? "none" : "block"};
  transition-duration: 0.3s;
`

class VideoComponent extends Component {
  constructor(props) {
    super(props)
    this.data = this.props.data
  }
  render() {
    return (
      <Container {...this.data} ref={this.data.ref}>
        <Iframe
          src={this.data.src}
          mode={this.props.mode}
          display={this.props.display}
        ></Iframe>
        <VideoSized
          mode={this.props.mode}
          display={this.props.display}
        ></VideoSized>
      </Container>
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
  )(VideoComponent)
)
