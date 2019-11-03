import React, { Component, createRef } from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import store from "../redux/store"

const Dot = styled.div`
  display: ${({ mode }) => (mode === "Resize" ? "block" : "none")};
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  transform: translate(-50%, -50%);
  height: 10px;
  width: 10px;
  position: absolute;
  background-color: blue;
`

const Container = styled.div`
  border-width: ${({ mode }) => (mode === "Resize" ? "2px" : "0px")};
  border-style: solid;
  border-color: black;
`

class Resizer extends Component {
  isActive = false
  doteNum = 0
  Refs = [createRef(), createRef(), createRef(), createRef()]

  onMouseUp = () => {
    this.isActive = false
  }

  onMouseDown = doteNum => e => {
    this.isActive = true
    this.doteNum = doteNum
  }
  getMousePosition = e => {
    let x = e.offsetX
    let y = e.offsetY
    for (let element of e.path) {
      if (element === this.props.boardRef.current) break

      x += element.offsetLeft
      y += element.offsetTop
    }
    return [x, y]
  }
  onMouseMove = e => {
    if (!this.isActive) return
    const positioner = this.props.data.refPositioner.current
    const [newX, newY] = this.getMousePosition(e)
    const element = this.props.data.ref.current
    if (this.doteNum === 0) {
      this.props.data.height =
        positioner.offsetTop - newY + element.clientHeight
      this.props.data.width = positioner.offsetLeft - newX + element.clientWidth

      element.style.height = this.props.data.height + "px"
      element.style.width = this.props.data.width + "px"

      positioner.style.top = newY + "px"
      positioner.style.left = newX + "px"

      this.props.data.left = newX
      this.props.data.top = newY
    } else if (this.doteNum === 1) {
      this.props.data.height =
        positioner.offsetTop - newY + element.clientHeight
      this.props.data.width =
        newX -
        positioner.offsetLeft -
        positioner.clientWidth +
        element.clientWidth

      element.style.height = this.props.data.height + "px"
      element.style.width = this.props.data.width + "px"

      positioner.style.top = newY + "px"

      this.props.data.top = newY
    } else if (this.doteNum === 2) {
      this.props.data.height =
        newY -
        positioner.offsetTop -
        positioner.clientHeight +
        element.clientHeight
      this.props.data.width =
        newX -
        positioner.offsetLeft -
        positioner.clientWidth +
        element.clientWidth

      element.style.height = this.props.data.height + "px"
      element.style.width = this.props.data.width + "px"
    } else if (this.doteNum === 3) {
      this.props.data.height =
        newY -
        positioner.offsetTop -
        positioner.clientHeight +
        element.clientHeight
      this.props.data.width = positioner.offsetLeft - newX + element.clientWidth

      element.style.height = this.props.data.height + "px"
      element.style.width = this.props.data.width + "px"

      positioner.style.left = newX + "px"

      this.props.data.left = newX
    }
  }

  componentDidMount() {
    if (typeof window === "undefined") return
    window.addEventListener("mousemove", this.onMouseMove)
    window.addEventListener("mouseup", this.onMouseUp)
  }
  componentWillUnmount() {
    if (typeof window === "undefined") return
    window.removeEventListener("mousemove", this.onMouseMove)
    window.addEventListener("mouseup", this.onMouseUp)
  }
  render() {
    const { mode, children } = this.props
    return (
      <Container mode={mode}>
        <Dot
          mode={mode}
          onMouseDown={this.onMouseDown(1)}
          ref={this.Refs[1]}
          left='100%'
          top='0px'
        ></Dot>
        <Dot
          mode={mode}
          onMouseDown={this.onMouseDown(2)}
          ref={this.Refs[2]}
          left='100%'
          top='100%'
        ></Dot>
        <Dot
          mode={mode}
          onMouseDown={this.onMouseDown(3)}
          ref={this.Refs[3]}
          left='0px'
          top='100%'
        ></Dot>
        <Dot
          mode={mode}
          onMouseDown={this.onMouseDown(0)}
          ref={this.Refs[0]}
          left='0px'
          top='0px'
        ></Dot>
        {children}
      </Container>
    )
  }
}

const mapStateToProps = ({ controller }) => {
  return {
    mode: controller.mode,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default store(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Resizer)
)
