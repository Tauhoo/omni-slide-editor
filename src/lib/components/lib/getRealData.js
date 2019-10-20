export default data => {
  let result = {}
  result.height = data.height
  result.width = data.height
  result.elementList = []

  for (let element of data.elementList) {
    if (element.type === "image") {
      result.elementList.push({
        type: element.type,
        height: element.height,
        width: element.width,
        borderRadius: element.borderRadius,
        borderColor: element.borderColor,
        backgroundImage: element.backgroundImage,
        borderWidth: element.borderWidth,
        left: element.left,
        top: element.top,
      })
    } else if (element.type === "video") {
      result.elementList.push({
        type: element.type,
        height: element.height,
        width: element.width,
        borderRadius: element.borderRadius,
        borderColor: element.borderColor,
        src: element.src,
        borderWidth: element.borderWidth,
        left: element.left,
        top: element.top,
      })
    } else if (element.type === "text") {
      result.elementList.push({
        type: element.type,
        color: element.color,
        fontFamily: element.fontFamily,
        fontSize: element.fontSize,
        fontWeight: element.fontWeight,
        textDecoration: element.textDecoration,
        left: element.left,
        top: element.top,
        text: element.text,
      })
    } else if (element.type === "shape") {
      result.elementList.push({
        type: element.type,
        height: element.height,
        width: element.width,
        borderRadius: element.borderRadius,
        borderColor: element.borderColor,
        backgroundColor: element.backgroundColor,
        borderWidth: element.borderWidth,
        left: element.left,
        top: element.top,
      })
    }
  }
  return result
}
