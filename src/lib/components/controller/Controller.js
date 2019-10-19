import React, { Component, createRef } from "react"
import styled from "styled-components"
import Board from "../Board"
import renderer from "./lib/renderer"
import ToolBar from "../../ToolBar"

const Container = styled.div`
  width: 100%;
  border-width: 1px;
  border-color: #b2bec3;
  border-style: solid;
  overflow: hidden;
  border-radius: 10px;
  padding: 0px 10px;
  box-sizing: border-box;
`
const Line = styled.div`
  width: 100%;
  padding: 0px 15px;
  box-sizing: border-box;
  height: 5px;
  hr {
    border-top: 1px solid #dfe6e9;
    margin: 0px;
  }
`

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
      {
        type: "text",
        color: "black",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: 16,
        fontWeight: 100,
        textDecoration: "overline",
        left: 100,
        top: 100,
        text: "text",
        ref: createRef(),
      },
      {
        type: "image",
        height: 100,
        width: 100,
        borderRadius: 0,
        borderColor: "pink",
        backgroundImage:
          "https://previews.123rf.com/images/objowl/objowl1103/objowl110300009/9040493-computer-generated-iimage-with-an-abstract-circular-geometric-design-in-red-and-green-.jpg",
        borderWidth: 5,
        left: 100,
        top: 0,
        ref: createRef(),
      },
      {
        type: "video",
        height: 200,
        width: 200,
        borderRadius: 0,
        borderColor: "pink",
        src:
          "https://drive.google.com/file/d/1PH10PRuCtr4d91uhQ4BuDZ4rgC15uWyx/preview",
        borderWidth: 5,
        left: 0,
        top: 0,
        ref: createRef(),
      },
    ],
  }
  render() {
    return (
      <Container>
        <ToolBar></ToolBar>
        <Line>
          <hr />
        </Line>
        <Board data={this.data}>
          {renderer(this.data.elementList, this.data.boardRef)}
        </Board>
      </Container>
    )
  }
}
