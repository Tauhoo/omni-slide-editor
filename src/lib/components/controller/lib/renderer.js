import React from "react"
import Shape from "../../Shape"
import Image from "../../Image"
import Positioner from "../../Positioner"
import ImageEditor from "../../imageEditor/ImageEidtor"
import ShapeEditor from "../../shapeEditor/ShapeEditor"
import Text from "../../Text"
import TextEditor from "../../textEditor/TextEditor"

const render = element => {
  if (element.type === "shape")
    return (
      <Positioner data={element}>
        <ShapeEditor data={element}>
          <Shape data={element}></Shape>
        </ShapeEditor>
      </Positioner>
    )

  if (element.type === "text")
    return (
      <Positioner data={element}>
        <TextEditor data={element}>
          <Text data={element}></Text>
        </TextEditor>
      </Positioner>
    )

  if (element.type === "image")
    return (
      <Positioner data={element}>
        <ImageEditor data={element}>
          <Image data={element}></Image>
        </ImageEditor>
      </Positioner>
    )
  return null
}

export default elementList => <>{elementList.map(element => render(element))}</>
