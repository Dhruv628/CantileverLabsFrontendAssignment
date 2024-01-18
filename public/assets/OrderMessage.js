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
        <g
          stroke="#5932EA"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        >
          <path
            strokeMiterlimit="10"
            d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4z"
          ></path>
          <path d="M7 8h10"></path>
          <path d="M7 13h6"></path>
        </g>
      </g>
    </svg>
  );
}

export default Icon;
