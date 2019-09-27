import React, { Component } from "react"
import MenuButton from "../MenuButton"
import ShapeModal from "./ShapeModal"

import { ReactComponent as AddIcon } from "../../../assets/icon/add.svg"

export default class extends Component {
  state = {
    display: false,
    x: 0,
    y: 0,
  }

  onClick = e => {
    this.setState({ display: !this.state.display, x: e.pageX, y: e.pageY })
  }

  render() {
    const { display, x, y } = this.state
    return (
      <>
        <MenuButton
          active={display.toString()}
          onClick={this.onClick}
          onBlur={() => this.setState({ display: false })}
        >
          <AddIcon></AddIcon>
        </MenuButton>
        <ShapeModal
          display={display.toString()}
          onAdd={this.props.onAdd}
          x={x}
          y={y}
        ></ShapeModal>
      </>
    )
  }
}
