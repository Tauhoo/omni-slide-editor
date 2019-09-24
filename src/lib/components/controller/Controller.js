import React, { Component, createRef } from "react"
import styled from "styled-components"
import { getOffset, getParentElement, getOffsetDot, resize, move } from "./lib"
import Board from "../Board"
import Point from "../Point"
import Shape from "../Shape"

const renderer = ({ elementList }, mouseMode) => {
  const result = []
  for (let element of elementList) {
    switch (element.type) {
      case "point":
        result.push(
          <Point {...element} order={element.key} mouseMode={mouseMode}></Point>
        )
        break
      case "shape":
        result.push(
          <Shape {...element} order={element.key} mouseMode={mouseMode}></Shape>
        )
      default:
        break
    }
  }
  return result
}

export default class extends Component {
  constructor(props) {
    super(props)
    this.getOffset = getOffset.bind(this)
    this.getParentElement = getParentElement.bind(this)
    this.getOffsetDot = getOffsetDot.bind(this)
    this.resize = resize.bind(this)
    this.move = move.bind(this)
  }
  data = {
    elementList: [
      {
        type: "point",
        radius: 10,
        editable: true,
        color: "gray",
        top: 10,
        left: 10,
        isFocus: false,
        key: 0,
        shapeRef: createRef(),
      },
      {
        type: "shape",
        height: 200,
        width: 200,
        borderColor: "gray",
        borderWidth: 10,
        color: "black",
        isCircle: true,
        top: 100,
        left: 100,
        isFocus: false,
        key: 1,
        shapeRef: createRef(),
        dotsRef: [createRef(), createRef(), createRef(), createRef()],
      },
      {
        type: "shape",
        height: 100,
        width: 100,
        borderColor: "gray",
        borderWidth: 10,
        color: "pink",
        isCircle: false,
        top: 200,
        left: 200,
        isFocus: false,
        key: 2,
        shapeRef: createRef(),
        dotsRef: [createRef(), createRef(), createRef(), createRef()],
      },
    ],
  }
  counter = this.data.elementList.length
  boardRef = createRef()
  state = { mouseMode: "move", displayDot: false }

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

  onMouseDown = e => {
    this.isPress = true

    if (e.target === this.boardRef.current) {
      this.element = null
      this.elementSelectedOffsetX = 0
      this.elementSelectedOffsetY = 0
      this.elementOrder = null
    } else if (
      e.target.getAttribute("type") === "dot" &&
      this.state.mouseMode === "resize"
    ) {
      this.element = e.target
      this.elementSelectedOffsetX = e.offsetX
      this.elementSelectedOffsetY = e.offsetY
      this.elementOrder = this.element.getAttribute("order")
    } else if (
      this.state.mouseMode === "move" &&
      e.target.getAttribute("type") !== "dot"
    ) {
      const target = this.getParentElement(e.path)
      if (target.getAttribute("type") !== "movable") return
      this.element = target
      this.elementSelectedOffsetX = e.offsetX
      this.elementSelectedOffsetY = e.offsetY
      this.elementOrder = this.element.getAttribute("order")
      this.element.style.zIndex = 1000
    }
  }

  onMouseUp = e => {
    if (this.element !== null && e.target !== this.boardRef.current)
      this.element.style.zIndex = 0

    this.isPress = false
    this.element = null
    this.elementOrder = null
  }

  onMouseMove = e => {
    if (!this.isIn) return

    // move element
    if (
      this.state.mouseMode === "move" &&
      this.isPress &&
      this.element !== null
    ) {
      this.move(e)
      return
    }

    //resize
    if (
      this.state.mouseMode === "resize" &&
      this.isPress &&
      this.element !== null
    ) {
      this.resize(e)
      return
    }
  }

  onMouseLeave = () => {
    this.isIn = false
    this.isPress = false
    this.element = null
    this.elementOrder = null
  }

  onMouseOver = () => {
    this.isIn = true
  }

  componentDidMount() {
    const board = this.boardRef.current
    board.addEventListener("mousedown", this.onMouseDown)
    board.addEventListener("mouseup", this.onMouseUp)
    board.addEventListener("mousemove", this.onMouseMove)
    board.addEventListener("mouseleave", this.onMouseLeave)
    board.addEventListener("mouseover", this.onMouseOver)
  }

  componentWillUnmount() {
    const board = this.boardRef.current
    board.removeEventListener("mousedown", this.onMouseDown)
    board.removeEventListener("mouseup", this.onMouseUp)
    board.removeEventListener("mousemove", this.onMouseMove)
    board.removeEventListener("mouseleave", this.onMouseLeave)
    board.removeEventListener("mouseover", this.onMouseOver)
  }

  render() {
    return (
      <>
        <Board width='1000px' height='500px' boardRef={this.boardRef}>
          {renderer(this.data, this.state.mouseMode)}
        </Board>
        <button onClick={() => this.setState({ mouseMode: "move" })}>
          Move
        </button>
        <button onClick={() => this.setState({ mouseMode: "resize" })}>
          dot
        </button>
      </>
    )
  }
}
