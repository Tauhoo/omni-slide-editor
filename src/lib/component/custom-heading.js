import React from "react";

function CustomHeading(props) {
  const { label, fontSize, backgroundColor, fontWeight ,padding} = props;
  return <div style={{ fontSize, fontWeight, backgroundColor,padding }}>{label}</div>;
}
export default CustomHeading;
