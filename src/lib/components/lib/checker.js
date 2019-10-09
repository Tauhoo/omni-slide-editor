export const styleChecker = (style, value) => {
  let checker = new Option().style
  checker[style] = value
  return checker[style] === value
}
