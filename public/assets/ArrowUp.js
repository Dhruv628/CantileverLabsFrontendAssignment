import React from "react";

function Icon({width,height}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 10 12"
    >
      <g>
        <g>
          <path
            fill="#50D1AA"
            d="M5 11.25a.482.482 0 01-.48-.412l-.004-.065v-8.39l-3.063 3.03a.49.49 0 01-.685.002.472.472 0 01-.049-.621l.047-.054L4.656.89l.01-.009c.011-.01.022-.02.033-.028L4.656.89a.486.486 0 01.326-.14h.034l.036.003L5 .75a.495.495 0 01.347.144L9.234 4.74a.472.472 0 01-.002.675.49.49 0 01-.63.045l-.055-.046-3.062-3.03v8.389A.48.48 0 015 11.25z"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default Icon;
