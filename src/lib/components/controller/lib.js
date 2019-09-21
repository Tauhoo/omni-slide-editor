export const getOffset = function(e) {
  const offset = [e.offsetX, e.offsetY]
  for (let element of e.path) {
    if (element === this.boardRef.current) break
    offset[0] += element.offsetLeft
    offset[1] += element.offsetTop
  }

  offset[0] -= this.elementSelectedOffsetX
  offset[1] -= this.elementSelectedOffsetY

  return offset
}

export const getOffsetDot = function(e, parent) {
  const offset = [e.offsetX, e.offsetY]
  for (let element of e.path) {
    if (element === parent) break
    offset[0] += element.offsetLeft
    offset[1] += element.offsetTop
  }

  offset[0] -= this.elementSelectedOffsetX
  offset[1] -= this.elementSelectedOffsetY

  return offset
}

export const getParentElement = function(path) {
  for (let element of path) {
    if (element.getAttribute("type") === "movable") return element
    if (element === this.boardRef.current) return element
  }

  return this.boardRef.current
}
