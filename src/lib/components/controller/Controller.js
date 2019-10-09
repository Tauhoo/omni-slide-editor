import React, { Component, createRef } from "react"
import Board from "../Board"
import renderer from "./lib/renderer"

export default class extends Component {
  data = {
    boardRef: createRef(),
    height: "1000px",
    width: "1000px",
    elementList: [
      {
        type: "shape",
        height: 100,
        width: 100,
        borderRadius: 0,
        borderColor: "pink",
        backgroundColor: "blue",
        borderWidth: 5,
        left: 0,
        top: 0,
        ref: createRef(),
      },
    ],
  }
  render() {
    return (
      <Board data={this.data}>
        {renderer(this.data.elementList, this.data.boardRef)}
      </Board>
    )
  }
}
