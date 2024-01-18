import React from "react";

function Icon({width,height}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 107 171"
    >
      <g>
        <g filter="url(#filter0_d_1_1679)">
          <rect
            width="33"
            height="70.125"
            x="50"
            y="30.5"
            fill="#fff"
            rx="6"
          ></rect>
        </g>
        <path
          stroke="#5932EA"
          strokeLinecap="round"
          strokeWidth="1.883"
          d="M73.376 84.125h-13.75"
        ></path>
        <path
          stroke="#5932EA"
          strokeLinecap="round"
          strokeWidth="1.719"
          d="M66.5 58v-6.875m0 0V44.25m0 6.875h6.876m-6.875 0h-6.875"
        ></path>
        <path
          stroke="#EFEFEF"
          strokeWidth="1.375"
          d="M56.874 69.23L76.124 69.23"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_1_1679"
          width="133"
          height="170.125"
          x="0"
          y="0.5"
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
            result="effect1_dropShadow_1_1679"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_1679"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Icon;
