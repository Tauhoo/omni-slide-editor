import React, { Component, createRef } from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  position: relative;
`

const Board = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  overflow: hidden;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  z-index: 0;
`

export default class extends Component {
  containerRef = createRef()
  boardRef = this.props.boardRef

  onResize = () => {
    const container = this.containerRef.current
    const board = this.boardRef.current

    const containerWidth = container.offsetWidth

    const boardWidth = board.offsetWidth
    const boardHeight = board.offsetHeight

    const scale = containerWidth / boardWidth

    container.setAttribute("style", `height: ${scale * boardHeight}px;`)
    board.setAttribute(
      "style",
      `transform: translate(-50%, -50%) scale(${scale});`
    )
  }

  componentDidMount() {
    if (typeof window === "undefined") return
    window.addEventListener("resize", this.onResize)
    this.onResize()
  }

  componentWillUnmount() {
    if (typeof window === "undefined") return
    window.removeEventListener("resize", this.onResize)
  }

  render() {
    return (
      <Container ref={this.containerRef}>
        <Board
          ref={this.boardRef}
          width={this.props.width}
          height={this.props.height}
          onMouseDown={this.props.onMouseDown}
          onMouseUp={this.props.onMouseUp}
        >
          {this.props.children}
        </Board>
      </Container>
    )
  }
}
