import React, { Component } from "react"
import { Controller } from "../lib"

class App extends Component {
  render() {
    return (
      <div>
        <Controller
          onChange={value => console.log(JSON.stringify(value))}
          data={{
            height: "500px",
            width: "1000px",
            elementList: [
              {
                type: "video",
                height: 200,
                width: 200,
                borderRadius: 0,
                borderColor: "pink",
                src:
                  "https://drive.google.com/file/d/1PH10PRuCtr4d91uhQ4BuDZ4rgC15uWyx/preview",
                borderWidth: 5,
                left: 553,
                top: 82,
              },
              {
                type: "video",
                height: 200,
                width: 200,
                borderRadius: 0,
                borderColor: "pink",
                src:
                  "https://drive.google.com/file/d/1PH10PRuCtr4d91uhQ4BuDZ4rgC15uWyx/preview",
                borderWidth: 5,
                left: 85,
                top: 207,
              },
              {
                type: "shape",
                height: 100,
                width: 100,
                borderRadius: 50,
                borderColor: "black",
                backgroundColor: "white",
                borderWidth: 5,
                left: 415,
                top: 201,
              },
              {
                type: "shape",
                height: 100,
                width: 100,
                borderRadius: 0,
                borderColor: "black",
                backgroundColor: "white",
                borderWidth: 5,
                left: 350,
                top: 178,
              },
              {
                type: "text",
                color: "black",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: 16,
                fontWeight: 100,
                textDecoration: "none",
                left: 250,
                top: 103,
                text: "text",
              },
            ],
          }}
        ></Controller>
      </div>
    )
  }
}

export default App
