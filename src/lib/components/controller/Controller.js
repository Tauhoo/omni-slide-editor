import React, { Component, createRef } from "react"
import Board from "../Board"
import renderer from "./lib/renderer"

export default class extends Component {
  data = {
    boardRef: createRef(),
    height: "100px",
    width: "200px",
    elementList: [
      {
        type: "shape",
        height: 100,
        width: 100,
        borderRadius: "none",
        backgroundColor: "blue",
        borderWidth: 5,
        left: 0,
        top: 0,
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
