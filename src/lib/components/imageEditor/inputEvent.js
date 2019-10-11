import { styleChecker } from "../lib/checker"

const onChangeBackgroundImage = function(e) {
  let value = e
  value = value === "" ? "" : value
  this.data.ref.current.style.backgroundImage = `url(${
    value === "" ? "none" : value
  })`
  this.data.backgroundImage = value === "" ? "none" : value
}

const onChangeBorderWidth = function(e) {
  let value = e.target.value
  value = value === "" ? 0 : value
  this.data.ref.current.style.borderWidth = value + "px"
  this.data.borderWidth = value
}

const onChangeBorderColor = function(e) {
  let value = e.target.value
  value = value === "" ? "white" : value
  if (!styleChecker("borderColor", value)) return
  this.data.ref.current.style.borderColor = value
  this.data.borderColor = value
}

const onChangeBorderRadius = function(e) {
  let value = e.target.value
  value = value === "" ? 0 : value
  this.data.ref.current.style.borderRadius = value + "px"
  this.data.borderRadius = value
}

export const eventRegister = component => {
  component.onChangeBackgroundImage = onChangeBackgroundImage.bind(component)
  component.onChangeBorderWidth = onChangeBorderWidth.bind(component)
  component.onChangeBorderColor = onChangeBorderColor.bind(component)
  component.onChangeBorderRadius = onChangeBorderRadius.bind(component)
}
