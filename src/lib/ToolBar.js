import React, { Component } from "react"
import { connect } from "react-redux"
import store from "./redux/store"
import styled from "styled-components"
import MenuButton from "./components/interface/menu/Button"
import { changeMode } from "./redux/action"

const Container = styled.div`
  width: 100%;
  padding: 0px 20px;
  box-sizing: border-box;
`

class ToolBar extends Component {
  onChangeMode = mode => () => this.props.changeMode(mode)

  render() {
    return (
      <Container>
        <MenuButton
          mode={this.props.mode}
          onClick={this.onChangeMode("Move")}
          type='Move'
        ></MenuButton>
        <MenuButton
          mode={this.props.mode}
          onClick={this.onChangeMode("Resize")}
          type='Resize'
        ></MenuButton>
        <MenuButton
          mode={this.props.mode}
          onClick={this.onChangeMode("Video")}
          type='Video'
        ></MenuButton>
        <MenuButton
          mode={this.props.mode}
          onClick={this.onChangeMode("Preview")}
          type='Preview'
        ></MenuButton>
        <MenuButton
          mode={this.props.mode}
          onClick={this.onChangeMode("Setting")}
          type='Setting'
        ></MenuButton>
        <MenuButton
          mode={this.props.mode}
          onClick={this.onChangeMode("Text")}
          type='Text'
        ></MenuButton>
        <MenuButton
          mode={this.props.mode}
          onClick={this.onChangeMode("Circle")}
          type='Circle'
        ></MenuButton>
        <MenuButton
          mode={this.props.mode}
          onClick={this.onChangeMode("Rectangle")}
          type='Rectangle'
        ></MenuButton>
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
  return {
    changeMode: mode => dispatch(changeMode(mode)),
  }
}

export default store(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ToolBar)
)
