import React from "react"
import Shape from "../../Shape"
import Positioner from "../../Positioner"
import ShapeEditor from "../../shapeEditor/ShapeEditor"

const render = element => {
  if (element.type === "shape")
    return (
      <Positioner data={element}>
        <ShapeEditor data={element}>
          <Shape data={element}></Shape>
        </ShapeEditor>
      </Positioner>
    )
  return null
}

export default elementList => <>{elementList.map(element => render(element))}</>
