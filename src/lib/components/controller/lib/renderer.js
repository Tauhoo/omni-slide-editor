import React from "react"
import Shape from "../../Shape"
import Image from "../../Image"
import Text from "../../Text"
import Video from "../../Video"
import ImageEditor from "../../imageEditor/ImageEidtor"
import ShapeEditor from "../../shapeEditor/ShapeEditor"
import TextEditor from "../../textEditor/TextEditor"
import VideoEditor from "../../videoEditor/VideoEditor"
import Positioner from "../../Positioner"

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
  if (element.type === "video")
    return (
      <Positioner data={element}>
        <VideoEditor data={element}>
          <Video data={element}></Video>
        </VideoEditor>
      </Positioner>
    )
  return null
}

export default elementList => <>{elementList.map(element => render(element))}</>
