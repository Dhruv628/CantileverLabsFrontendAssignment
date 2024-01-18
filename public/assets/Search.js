import React from "react";

function Icon({height,width}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g>
        <path
          stroke="#C4C4C4"
          strokeLinecap="round"
          strokeWidth="2"
          d="M21 21l-4.486-4.494L21 21zm-2-10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0v0z"
        ></path>
      </g>
    </svg>
  );
}

export default Icon;
