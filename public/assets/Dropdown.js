 
import React from "react";

function Icon({height,width}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 12 6"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M6 5.833a.828.828 0 01-.533-.193l-5-4.167A.833.833 0 111.533.193l4.476 3.73L10.477.328a.834.834 0 011.046 1.298l-5 4.023A.833.833 0 016 5.833z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
