import React from "react";

function Icon({ height, width }) {
  const embeddedSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
    <circle cx="44.8598" cy="44.8612" r="35.3633" transform="rotate(71.3989 44.8598 44.8612)" fill="#C6B8FB" fill-opacity="0.4"/>
    <circle cx="44.8582" cy="44.8616" r="26.5225" transform="rotate(71.3989 44.8582 44.8616)" fill="#8168DD" fill-opacity="0.4"/>
    <g filter="url(#filter0_d_1_1284)">
      <path d="M56.5987 42.4126C57.6379 41.5125 57.0633 39.8051 55.6913 39.7165L29.1062 37.9994L28.4199 39.382L36.1205 47.8039L35.0791 59.168L36.4617 59.8543L56.5987 42.4126Z" fill="#FDFDFD"/>
    </g>
    <defs>
      <filter id="filter0_d_1_1284" x="22.2708" y="37.9994" width="41.0103" height="34.1534" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="6.1492"/>
        <feGaussianBlur stdDeviation="3.0746"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1284"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1284" result="shape"/>
      </filter>
    </defs>
  </svg>
  `;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 631 665"
    >
   
      <path
        z={1}
        stroke="#726d90"
        strokeWidth="14"
        d="M1 2l76 30v38.5L68.5 102l-27 83.5L155 225c3 1 11 2.7 19 1.5 8-1.2 21.667-6.833 27.5-9.5h3l4.5 1.5 2 2 3.5 6 22 60 2.5 5 3 4 6 9.5 3 7 1.5 7.5 1.5 8.5 1.5 11 1 6 2.5 7.5 2.5 5 1.5 4.5v10.5l1.5 4.5 8.5 23 7.5 8.5 12.5 10 5 9.5 1.5 6 109-34 4.5 9.5 7.5 13 9 10.5 10.5 11 8 4.5 8 1 9.5 1.5 4.5 1.5 7.5 5 4 6 3.5 7 4 16 13 13.5 19 18 5.5 9 8.5 24 2.5 12 1.5 10v8.5l1 4 22.5 69 10-2h7l5.5 2 13 8h3.5l28-10"
      ></path>
      <path
        z={10}
        stroke="#5932EA"
        strokeWidth="4"
        d="M1 2l76 30v38.5L68.5 102l-27 83.5L155 225c3 1 11 2.7 19 1.5 8-1.2 21.667-6.833 27.5-9.5h3l4.5 1.5 2 2 3.5 6 22 60 2.5 5 3 4 6 9.5 3 7 1.5 7.5 1.5 8.5 1.5 11 1 6 2.5 7.5 2.5 5 1.5 4.5v10.5l1.5 4.5 8.5 23 7.5 8.5 12.5 10 5 9.5 1.5 6 109-34 4.5 9.5 7.5 13 9 10.5 10.5 11 8 4.5 8 1 9.5 1.5 4.5 1.5 7.5 5 4 6 3.5 7 4 16 13 13.5 19 18 5.5 9 8.5 24 2.5 12 1.5 10v8.5l1 4 22.5 69 10-2h7l5.5 2 13 8h3.5l28-10"
      ></path>
         <foreignObject
        style={{ zIndex: 20 }}
        x="350"
        y="360"
        width="90"
        height="90"
        dangerouslySetInnerHTML={{ __html: embeddedSvg }}
      />
    </svg>
  );
}

export default Icon;
