import React, { Component, createRef } from "react"
import styled from "styled-components"
import { getOffset, getParentElement, getOffsetDot } from "./lib"
import Board from "../Board"
import Point from "../Point"
import Square from "../Square"

const renderer = ({ elementList }, mouseMode) => {
  const result = []
  for (let element of elementList) {
    switch (element.type) {
      case "point":
        result.push(
          <Point {...element} order={element.key} mouseMode={mouseMode}></Point>
        )
        break
      case "square":
        result.push(
          <Square
            {...element}
            order={element.key}
            mouseMode={mouseMode}
          ></Square>
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
        type: "square",
        height: 200,
        width: 200,
        borderColor: "gray",
        borderWidth: 10,
        color: "black",
        top: 100,
        left: 100,
        isFocus: false,
        key: 1,
        shapeRef: createRef(),
        dotsRef: [createRef(), createRef(), createRef(), createRef()],
      },
    ],
  }
  counter = this.data.elementList.length
  boardRef = createRef()
  state = { mouseMode: "resize" }

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
    } else if (e.target.getAttribute("type") === "dot") {
      this.element = e.target
      this.elementSelectedOffsetX = e.offsetX
      this.elementSelectedOffsetY = e.offsetY
      this.elementOrder = this.element.getAttribute("order")
    } else {
      this.element = this.getParentElement(e.path)
      if (this.element.getAttribute("type") !== "movable") return
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
      const targetElement = this.data.elementList[this.elementOrder]
      const [x, y] = this.getOffset(e)

      targetElement.top = y
      targetElement.left = x

      this.element.style.top = y + "px"
      this.element.style.left = x + "px"
      return
    }

    //resize
    if (
      this.state.mouseMode === "resize" &&
      this.isPress &&
      this.element !== null &&
      this.element.getAttribute("type") === "dot"
    ) {
      const alt = this.element.getAttribute("alt")
      const targetElement = this.data.elementList[this.elementOrder]
      const [x, y] = this.getOffsetDot(e, targetElement.shapeRef.current)
      const dots = targetElement.dotsRef
      const parent = targetElement.shapeRef.current
      let height = 0
      let width = 0
      if (alt === "0") {
        // dots[1].current.style.top = y + "px"
        //dots[3].current.style.left = x + "px"
        parent.style.top = parent.offsetTop + y + "px"
        parent.style.left = parent.offsetLeft + x + "px"
        height = Math.abs(y - dots[3].current.offsetTop)
        width = Math.abs(x - dots[1].current.offsetLeft)
      } else if (alt === "1") {
        //dots[0].current.style.top = y + "px"
        //dots[2].current.style.left = x + "px"
        parent.style.top = parent.offsetTop + y + "px"
        height = Math.abs(y - dots[2].current.offsetTop)
        width = Math.abs(x - dots[0].current.offsetLeft)
      } else if (alt === "2") {
        //dots[3].current.style.top = y + "px"
        //dots[1].current.style.left = x + "px"
        height = Math.abs(y - dots[1].current.offsetTop)
        width = Math.abs(x - dots[3].current.offsetLeft)
      } else {
        //dots[2].current.style.top = y + "px"
        //dots[0].current.style.left = x + "px"
        parent.style.left = parent.offsetLeft + x + "px"
        height = Math.abs(y - dots[0].current.offsetTop)
        width = Math.abs(x - dots[2].current.offsetLeft)
      }

      targetElement.height = height
      targetElement.width = width

      parent.style.width = width + "px"
      parent.style.height = height + "px"

      //this.element.style.top = y + "px"
      //this.element.style.left = x + "px"
      return
    }
  }

  onMouseOut = () => {
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
      <Board width='1000px' height='500px' boardRef={this.boardRef}>
        {renderer(this.data, this.state.mouseMode)}
      </Board>
    )
  }
}
