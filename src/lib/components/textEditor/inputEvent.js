import { styleChecker } from "../lib/checker"

const onChangeColor = function(e) {
  let value = e.target.value
  value = value === "" ? "white" : value
  if (!styleChecker("color", value)) return
  this.data.ref.current.style.color = value
  this.data.color = value
}

const onChangeFontSize = function(e) {
  let value = e.target.value
  value = value === "" ? 0 : value
  this.data.ref.current.style.fontSize = value + "px"
  this.data.fontSize = value
}

const onChangeFontWeight = function(e) {
  let value = e.target.value
  value = value === "" ? 0 : value
  this.data.ref.current.style.fontWeight = value
  this.data.fontWeight = value
}

const onChangeText = function(e) {
  this.data.ref.current.innerHTML = e.target.value
  this.data.text = e.target.value
}

export const eventRegister = component => {
  component.onChangeColor = onChangeColor.bind(component)
  component.onChangeFontSize = onChangeFontSize.bind(component)
  component.onChangeFontWeight = onChangeFontWeight.bind(component)
  component.onChangeText = onChangeText.bind(component)
}
