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
import Resizer from "../../Resizer"

const render = (element, boardRef) => {
  if (element.type === "shape")
    return (
      <Positioner data={element}>
        <ShapeEditor data={element}>
          <Resizer data={element} boardRef={boardRef}>
            <Shape data={element}></Shape>
          </Resizer>
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
          <Resizer data={element} boardRef={boardRef}>
            <Image data={element}></Image>
          </Resizer>
        </ImageEditor>
      </Positioner>
    )
  if (element.type === "video")
    return (
      <Positioner data={element}>
        <VideoEditor data={element}>
          <Resizer data={element} boardRef={boardRef}>
            <Video data={element}></Video>
          </Resizer>
        </VideoEditor>
      </Positioner>
    )
  return null
}

export default (elementList, boardRef) => (
  <>{elementList.map(element => render(element, boardRef))}</>
)
