import React from "react";

function Icon({height,width}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 188 188"
    >
      <g strokeWidth="11.478">
        <circle
          cx="94"
          cy="93.879"
          r="88"
          fill="#1F1D2B"
          stroke="#fff"
          opacity="0.1"
        ></circle>
        <circle
          cx="94"
          cy="93.879"
          r="76.522"
          fill="#1F1D2B"
          stroke="#fff"
          opacity="0.05"
        ></circle>
        <circle
          cx="94"
          cy="93.879"
          r="65.043"
          fill="#1F1D2B"
          stroke="#fff"
          opacity="0.1"
        ></circle>
        <circle
          cx="94"
          cy="93.879"
          r="53.565"
          fill="#1F1D2B"
          stroke="#fff"
          opacity="0.05"
        ></circle>
        <path
          stroke="#65B0F6"
          strokeLinecap="round"
          d="M6 93.879c0 48.601 39.399 88 88 88s88-39.399 88-88-39.399-88-88-88"
        ></path>
        <path
          stroke="#FFB572"
          strokeLinecap="round"
          d="M94 170.401c42.262 0 76.522-34.26 76.522-76.522 0-42.262-34.26-76.522-76.522-76.522"
        ></path>
        <path
          stroke="#FF7CA3"
          strokeLinecap="round"
          d="M94.44 28.283a65.047 65.047 0 0156.105 32.14 65.044 65.044 0 01-111.528 66.949"
        ></path>
      </g>
    </svg>
  );
}

export default Icon;
