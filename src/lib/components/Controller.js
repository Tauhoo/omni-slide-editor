import React, { Component, createRef } from "react"
import styled from "styled-components"
import Board from "./Board"
import Point from "./Point"

const renderer = ({ elementList }) => {
  const result = []
  for (let element of elementList) {
    switch (element.type) {
      case "point":
        result.push(<Point {...element} order={element.key}></Point>)
        break
      default:
        break
    }
  }
  return result
}

export default class extends Component {
  data = {
    elementList: [
      {
        type: "point",
        radius: 10,
        editable: true,
        color: "white",
        top: 10,
        left: 10,
        isFocus: false,
        key: 0,
      },
    ],
  }
  counter = this.data.elementList.length
  boardRef = createRef()
  state = { mouseMode: "move" }

  isIn = false
  isPress = false
  element = null
  elementSelectedOffsetX = 0
  elementSelectedOffsetY = 0
  elementOrder = null

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps({ mouseMode }) {
    this.setState({ mouseMode })
  }

  addPoint = () => {}

  addLine = () => {}

  addCircle = () => {}

  addSquare = () => {}

  onMouseDown = e => {
    this.isPress = true
    if (e.target === this.boardRef.current) {
      this.element = null
      this.elementSelectedOffsetX = 0
      this.elementSelectedOffsetY = 0
      this.elementOrder = null
    } else {
      this.element = e.target
      this.elementSelectedOffsetX = e.offsetX
      this.elementSelectedOffsetY = e.offsetY
      this.elementOrder = e.target.getAttribute("order")
    }
  }

  onMouseUp = () => {
    this.isPress = false
    this.element = null
    this.elementOrder = null
  }

  onMouseMove = e => {
    if (!this.isIn) return

    // move element
    if (this.isPress && this.element !== null) {
      if (e.srcElement === this.element) return
      const targetElement = this.data.elementList[this.elementOrder]
      targetElement.top = e.offsetY - this.elementSelectedOffsetY
      targetElement.left = e.offsetX - this.elementSelectedOffsetX
      console.log(this.data)

      this.element.setAttribute(
        "style",
        `top: ${targetElement.top}px; left: ${targetElement.left}px;`
      )
    }
  }

  onMouseOut = () => (this.isIn = false)

  onMouseOver = () => (this.isIn = true)

  componentDidMount() {
    const board = this.boardRef.current
    board.addEventListener("mousedown", this.onMouseDown)
    board.addEventListener("mouseup", this.onMouseUp)
    board.addEventListener("mousemove", this.onMouseMove)
    board.addEventListener("mouseout", this.onMouseOut)
    board.addEventListener("mouseover", this.onMouseOver)
  }

  componentWillUnmount() {
    const board = this.boardRef.current
    board.removeEventListener("mousedown", this.onMouseDown)
    board.removeEventListener("mouseup", this.onMouseUp)
    board.removeEventListener("mousemove", this.onMouseMove)
    board.removeEventListener("mouseout", this.onMouseOut)
    board.removeEventListener("mouseover", this.onMouseOver)
  }

  render() {
    return (
      <div>
        <Board width='1000px' height='500px' boardRef={this.boardRef}>
          {renderer(this.data)}
        </Board>
      </div>
    )
  }
}
