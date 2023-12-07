/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Calendar = ({ className }) => {
  return (
    <svg
      className={`calendar ${className}`}
      fill="none"
      height="44"
      viewBox="0 0 44 44"
      width="44"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M34.8333 7.33325H9.16667C7.14162 7.33325 5.5 8.97487 5.5 10.9999V36.6666C5.5 38.6916 7.14162 40.3333 9.16667 40.3333H34.8333C36.8584 40.3333 38.5 38.6916 38.5 36.6666V10.9999C38.5 8.97487 36.8584 7.33325 34.8333 7.33325Z"
        stroke="#111111"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        className="path"
        d="M29.3334 3.66675V11.0001"
        stroke="#111111"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        className="path"
        d="M14.6666 3.66675V11.0001"
        stroke="#111111"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        className="path"
        d="M5.5 18.3333H38.5"
        stroke="#111111"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
