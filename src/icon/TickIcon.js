import * as React from "react"

const TickIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 490 490"
    fill = {props.fill}
    style={{
      enableBackground: "new 0 0 490 490",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path d="M452.253 28.326 197.831 394.674 29.044 256.875 0 292.469l207.253 169.205L490 54.528z" />
  </svg>
)

export default TickIcon
