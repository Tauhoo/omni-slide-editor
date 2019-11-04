const defaultState = {
  mode: "Move",
  display: false,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, mode: action.mode }
    case "SET_DISPLAY":
      return { ...state, display: action.display ? true : false }
    default:
      return state
  }
}
