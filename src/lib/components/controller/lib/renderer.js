import React from "react"
import Shape from "../../Shape"
import Positioner from "../../Positioner"

const render = element => {
  if (element.type === "shape")
    return (
      <Positioner data={element}>
        <Shape data={element}></Shape>
      </Positioner>
    )
  return null
}

export default elementList => <>{elementList.map(element => render(element))}</>
