import React from "react"
import Shape from "../../Shape"
import Positioner from "../../Positioner"
import ShapeEditor from "../../shapeEditor/ShapeEditor"
import Text from "../../Text"

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
        <Text data={element}></Text>
      </Positioner>
    )
  return null
}

export default elementList => <>{elementList.map(element => render(element))}</>
