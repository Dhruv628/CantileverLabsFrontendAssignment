import React from "react";

function Icon({height,width}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 38 38"
    >
      <g>
        <circle cx="19" cy="19" r="19" fill="#E8F9EE"></circle>
        <circle cx="19" cy="19" r="7" fill="#0EBC93"></circle>
      </g>
    </svg>
  );
}

export default Icon;
