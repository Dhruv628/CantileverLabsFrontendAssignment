import React from "react";

function StoreIcon({height,width}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 40 40"
    >
      <g>
        <path
          fill="url(#paint0_linear_1_2065)"
          d="M31.667 3.333H8.333c-2.756 0-5 2.244-5 5v4.719c0 1.755.637 3.35 1.667 4.576v15.705A1.667 1.667 0 006.667 35H20a1.667 1.667 0 001.667-1.667V25h6.666v8.333A1.667 1.667 0 0030 35h3.333A1.667 1.667 0 0035 33.333V17.627a7.09 7.09 0 001.667-4.577V8.333c0-2.756-2.244-5-5-5zm1.666 5v4.719c0 1.9-1.415 3.52-3.151 3.611l-.182.004a3.337 3.337 0 01-3.333-3.334V6.667h5c.92 0 1.666.748 1.666 1.666zm-16.666 5V6.667h6.666v6.666A3.337 3.337 0 0120 16.667a3.337 3.337 0 01-3.333-3.334zm-10-5c0-.918.746-1.666 1.666-1.666h5v6.666A3.337 3.337 0 0110 16.667l-.182-.005c-1.736-.09-3.151-1.71-3.151-3.61V8.333zm10 18.334H10v-5h6.667v5z"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1_2065"
          x1="20"
          x2="20"
          y1="3.333"
          y2="35"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EA9769"></stop>
          <stop offset="1" stopColor="#EA6969"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default StoreIcon;
