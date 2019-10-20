import { createRef } from "react"
export default function(data) {
  data.boardRef = createRef()
  for (let element of data.elementList) {
    element.ref = createRef()
    element.refPositioner = createRef()
  }
  return data
}
