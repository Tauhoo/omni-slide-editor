import React, { Component, createRef } from "react"
import styled from "styled-components"
import Board from "../Board"
import renderer from "./lib/renderer"
import ToolBar from "../../ToolBar"
import dataGenerater from "./lib/dataGenerater"
import { connect } from "react-redux"
import store from "../../redux/store"

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

class Controller extends Component {
  data = {
    boardRef: createRef(),
    height: "1000px",
    width: "1000px",
    elementList: [],
  }
  constructor(props) {
    super(props)
    this.dataGenerater = dataGenerater.bind(this)
  }
  onClick = e => {
    let data = this.dataGenerater(e.offsetX, e.offsetY, this.props.mode, e.path)
    if (data === null) return

    this.data.elementList.push(data)
    this.setState({})
  }

  componentDidMount() {
    this.data.boardRef.current.addEventListener("click", this.onClick)
  }

  componentWillUnmount() {
    this.data.boardRef.current.removeEventListener("click", this.onClick)
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
  )(Controller)
)
