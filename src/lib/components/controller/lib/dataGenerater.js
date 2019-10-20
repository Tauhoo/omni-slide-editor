import { createRef } from "react"
export default function(offsetX, offsetY, mode, path) {
  let x = offsetX
  let y = offsetY
  for (let element of path) {
    if (this.data.boardRef.current === element) break
    const { offsetLeft, offsetTop } = element
    if (offsetLeft === undefined || offsetTop === undefined) {
      const { top, left } = element.getBoundingClientRect()
      x += left
      y += top
      break
    }
    x += offsetTop
    y += offsetLeft
  }
  x = Math.floor(x)
  y = Math.floor(y)

  if (mode === "Image") {
    return {
      type: "image",
      height: 100,
      width: 100,
      borderRadius: 0,
      borderColor: "black",
      backgroundImage:
        "https://previews.123rf.com/images/objowl/objowl1103/objowl110300009/9040493-computer-generated-iimage-with-an-abstract-circular-geometric-design-in-red-and-green-.jpg",
      borderWidth: 5,
      left: x,
      top: y,
      ref: createRef(),
      refPositioner: createRef(),
    }
  } else if (mode === "Video") {
    return {
      type: "video",
      height: 200,
      width: 200,
      borderRadius: 0,
      borderColor: "pink",
      src:
        "https://drive.google.com/file/d/1PH10PRuCtr4d91uhQ4BuDZ4rgC15uWyx/preview",
      borderWidth: 5,
      left: x,
      top: y,
      ref: createRef(),
      refPositioner: createRef(),
    }
  } else if (mode === "Text") {
    return {
      type: "text",
      color: "black",
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize: 16,
      fontWeight: 100,
      textDecoration: "none",
      left: x,
      top: y,
      text: "text",
      ref: createRef(),
      refPositioner: createRef(),
    }
  } else if (mode === "Circle") {
    return {
      type: "shape",
      height: 100,
      width: 100,
      borderRadius: 50,
      borderColor: "black",
      backgroundColor: "white",
      borderWidth: 5,
      left: x,
      top: y,
      ref: createRef(),
      refPositioner: createRef(),
    }
  } else if (mode === "Rectangle") {
    return {
      type: "shape",
      height: 100,
      width: 100,
      borderRadius: 0,
      borderColor: "black",
      backgroundColor: "white",
      borderWidth: 5,
      left: x,
      top: y,
      ref: createRef(),
      refPositioner: createRef(),
    }
  }

  return null
}

/*

      {
        type: "video",
        height: 200,
        width: 200,
        borderRadius: 0,
        borderColor: "pink",
        src:
          "https://drive.google.com/file/d/1PH10PRuCtr4d91uhQ4BuDZ4rgC15uWyx/preview",
        borderWidth: 5,
        left: 0,
        top: 0,
        ref: createRef(),
      }*/
