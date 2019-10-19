import { styleChecker } from "../lib/checker"

const onChangeBackgroundColor = function(e) {
  let value = e.target.value
  value = value === "" ? "white" : value
  if (!styleChecker("backgroundColor", value)) return
  this.data.ref.current.style.backgroundColor = value
  this.data.backgroundColor = value
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
  component.onChangeBackgroundColor = onChangeBackgroundColor.bind(component)
  component.onChangeBorderWidth = onChangeBorderWidth.bind(component)
  component.onChangeBorderColor = onChangeBorderColor.bind(component)
  component.onChangeBorderRadius = onChangeBorderRadius.bind(component)
}
