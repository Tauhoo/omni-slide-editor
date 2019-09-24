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

export const resize = function(e) {
  const alt = this.element.getAttribute("alt")
  const targetElement = this.data.elementList[this.elementOrder]
  const [x, y] = this.getOffset(e) //, targetElement.shapeRef.current)
  const parent = targetElement.shapeRef.current
  let height = 0
  let width = 0
  if (alt === "0") {
    height = Math.abs(parent.clientHeight - (y - parent.offsetTop))
    width = Math.abs(parent.clientWidth - (x - parent.offsetLeft))
    parent.style.top = y + "px"
    parent.style.left = x + "px"
  } else if (alt === "1") {
    height = Math.abs(parent.clientHeight - (y - parent.offsetTop))
    width = Math.abs(x - parent.offsetLeft)
    parent.style.top = y + "px"
  } else if (alt === "2") {
    height = Math.abs(y - parent.offsetTop)
    width = Math.abs(x - parent.offsetLeft)
  } else {
    height = Math.abs(y - parent.offsetTop)
    width = Math.abs(parent.clientWidth - (x - parent.offsetLeft))
    parent.style.left = x + "px"
  }

  targetElement.height = height
  targetElement.width = width

  parent.style.width = width + "px"
  parent.style.height = height + "px"
}

export const move = function(e) {
  const targetElement = this.data.elementList[this.elementOrder]
  const [x, y] = this.getOffset(e)

  targetElement.top = y
  targetElement.left = x

  this.element.style.top = y + "px"
  this.element.style.left = x + "px"
}
