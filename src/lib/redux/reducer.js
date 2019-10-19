const defaultState = {
  mode: "Move",
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, mode: action.mode }
    default:
      return state
  }
}
