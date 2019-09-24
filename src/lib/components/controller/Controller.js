import React, { Component, createRef } from "react"
import styled from "styled-components"
import { getOffset, getParentElement, getOffsetDot, resize, move } from "./lib"
import Menu from "../menu/Menu"
import Board from "../Board"
import Point from "../Point"
import Shape from "../Shape"
import Text from "../Text"

const Container = styled.div`
  border-width: 1px;
  border-style: solid;
  border-color: #d8d8d8;
  border-radius: 15px 15px 0px 0px;
  overflow: hidden;
`

const Line = styled.div`
  background-color: #d8d8d8;
  width: 100%;
  height: 1px;
`

const LineContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0px 10px;
`

const renderer = function() {
  const result = []
  const { mouseMode } = this.state
  for (let element of this.data.elementList) {
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
        break
      case "text":
        result.push(
          <Text {...element} order={element.key} mouseMode={mouseMode}></Text>
        )
        break
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
    this.renderer = renderer.bind(this)
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
        text: "iceice",
        top: 200,
        left: 200,
        isFocus: false,
        key: 2,
        shapeRef: createRef(),
        dotsRef: [createRef(), createRef(), createRef(), createRef()],
      },
      {
        type: "text",
        fontSize: 16,
        color: "black",
        top: 60,
        left: 20,
        isFocus: false,
        text: "Text",
        height: 10,
        width: 100,
        key: 3,
        shapeRef: createRef(),
        inputRef: createRef(),
        dotsRef: [createRef(), createRef(), createRef(), createRef()],
        borderWidth: 5,
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
      <Container>
        <Menu
          move={() => this.setState({ mouseMode: "move" })}
          resize={() => this.setState({ mouseMode: "resize" })}
          edit={() => this.setState({ mouseMode: "edit" })}
        ></Menu>
        <LineContainer>
          <Line></Line>
        </LineContainer>
        <Board width='1000px' height='500px' boardRef={this.boardRef}>
          {this.renderer()}
        </Board>
      </Container>
    )
  }
}
