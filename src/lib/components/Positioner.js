import React, { Component, createRef } from "react"
import styled from "styled-components"

const Container = styled.div`
  position: absolute;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
`

export default class extends Component {
  ref = createRef()
  data = this.props.data
  isHold = false
  mouseX = 0
  mouseY = 0
  onMouseMove = e => {
    if (!this.isHold) return
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
      >
        {this.props.children}
      </Container>
    )
  }
}
