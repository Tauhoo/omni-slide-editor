import React, { Component } from "react"
import styled, { keyframes } from "styled-components"
import { imageUrlValidator } from "../lib/checker"
import { ReactComponent as Loading } from "../../assets/icon/loading.svg"
import { ReactComponent as Correct } from "../../assets/icon/correct.svg"
import { ReactComponent as Close } from "../../assets/icon/close.svg"
import Text from "./Text"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LoadingAnimation = styled(Loading)`
  animation: ${rotate} 0.6s linear infinite;
`

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-gap: 10px;
`
const Input = styled.input`
  width: 100%;
  margin: 0px;
  padding: 0px;
  border-style: solid;
  border-width: 0px;
  outline: none;
  transition: 0.3s;
  font-size: 18px;
  color: #757575;
  display: flex;
  align-items: center;
  &:focus {
    border-width: 0px 0px 1px 0px;
    color: #414141;
  }

  &:hover {
    border-width: 0px 0px 1px 0px;
    color: #414141;
  }
`

export default class extends Component {
  state = { isValid: false, loading: false }
  isTyping = false
  componentDidMount() {
    this.value = this.props.defaultValue
    this.onTypeFinish()
  }

  onTypeFinish = async () => {
    this.isTyping = false
    const isValid = await imageUrlValidator(this.value)
      .then(res => res)
      .catch(res => res)

    if (isValid && this.props.onChange)
      return this.setState({ isValid: true, loading: false }, () =>
        this.props.onChange(this.value)
      )

    this.setState({ isValid: false, loading: false })
  }

  onChange = ({ target }) => {
    this.value = target.value
    clearTimeout(this.timeout)
    this.timeout = setTimeout(this.onTypeFinish, 1000)
    if (!this.isTyping) this.setState({ isValid: false, loading: true })
  }

  render() {
    const { name, placeholder, type, defaultValue } = this.props
    return (
      <Container>
        <Text>{name}</Text>
        <Input
          type={type}
          onChange={this.onChange}
          placeholder={placeholder}
          defaultValue={defaultValue}
        ></Input>
        {this.state.loading ? (
          <LoadingAnimation></LoadingAnimation>
        ) : this.state.isValid ? (
          <Correct></Correct>
        ) : (
          <Close></Close>
        )}
      </Container>
    )
  }
}
