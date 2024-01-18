import React from "react";

function Icon({height,width}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 108 103"
    >
      <g filter="url(#filter0_d_1_1288)">
        <circle
          cx="68.138"
          cy="48.14"
          r="17.253"
          fill="#fff"
          transform="rotate(71.399 68.138 48.14)"
        ></circle>
      </g>
      <path
        fill="#5932EA"
        d="M75.798 42.553c.345-.825-.484-1.654-1.308-1.308l-15.987 6.688v1.004l6.922 2.68 2.68 6.923h1.004l6.689-15.987z"
      ></path>
      <defs>
        <filter
          id="filter0_d_1_1288"
          width="134.515"
          height="134.515"
          x="0.881"
          y="0.882"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="20"></feOffset>
          <feGaussianBlur stdDeviation="25"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.86125 0 0 0 0 0.87883 0 0 0 0 0.975 0 0 0 0.5 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_1288"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_1288"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Icon;
