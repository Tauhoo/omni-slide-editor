import React, { Component } from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import store from "../redux/store"

const Container = styled.div`
  position: absolute;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  cursor: ${({ mode, display }) => {
    if (display) return "pointer"
    return mode === "Move" ? "move" : "pointer"
  }};
`

class Positioner extends Component {
  data = this.props.data
  ref = this.props.data.refPositioner
  isHold = false
  mouseX = 0
  mouseY = 0
  onMouseMove = e => {
    if (!this.isHold || this.props.mode !== "Move" || this.props.display) return
    const element = this.ref.current
    this.data.left = element.offsetLeft + e.offsetX - this.mouseX
    this.data.top = element.offsetTop + e.offsetY - this.mouseY
    element.style.left = this.data.left + "px"
    element.style.top = this.data.top + "px"
  }

  componentDidMount() {
    if (typeof window === "undefined") return
    this.ref.current.addEventListener("mousemove", this.onMouseMove)
    this.ref.current.addEventListener("mousedown", this.onMouseDown)
  }

  componentWillUnmount() {
    if (typeof window === "undefined") return
    this.ref.current.removeEventListener("mousemove", this.onMouseMove)
    this.ref.current.removeEventListener("mousedown", this.onMouseDown)
  }
  onMouseDown = e => {
    if (this.props.mode !== "Move" || this.props.display) return
    this.isHold = true
    this.mouseX = e.offsetX
    this.mouseY = e.offsetY
  }

  render() {
    const { left, top } = this.data
    return (
      <Container
        top={top}
        left={left}
        ref={this.ref}
        onMouseUp={() => (this.isHold = false)}
        onBlur={() => (this.isHold = false)}
        mode={this.props.mode}
        display={this.props.display}
      >
        {this.props.children}
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

const mapDispatchToProps = dispatch => {
  return {}
}

export default store(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Positioner)
)
