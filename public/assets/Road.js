import React from "react";

function Icon({width,height}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 156 7"
    >
      <g>
        <g filter="url(#filter0_f_1_1362)">
          <ellipse cx="78" cy="3.5" fill="#1E1E1E" rx="76" ry="1.5"></ellipse>
        </g>
        <g filter="url(#filter1_f_1_1362)">
          <ellipse cx="81" cy="4.5" fill="#fff" rx="69" ry="1.5"></ellipse>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_1_1362"
          width="156"
          height="7"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_1_1362"
            stdDeviation="1"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter1_f_1_1362"
          width="140"
          height="5"
          x="11"
          y="2"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_1_1362"
            stdDeviation="0.5"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Icon;
