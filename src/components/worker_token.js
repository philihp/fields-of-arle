import React from 'react'

const WorkerToken = props => (
  <svg
    width="16"
    height="10"
    viewBox="0 0 100 70"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d=" M 3 25 V 45 A 47 20 0 0 0 50 65 A 47 20 0 0 0 97 45 V 25"
      stroke={props.stroke}
      strokeWidth="3"
      fill={props.fill}
    />
    <ellipse
      cx="50"
      cy="25"
      rx="47"
      ry="20"
      stroke={props.stroke}
      strokeWidth="3"
      fill={props.fill}
    />
  </svg>
)

export default WorkerToken
