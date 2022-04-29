import React from "react";
import "./Slide.css";
import FontAwesomeIcon from "font-awesome"; 

export default function BtnSlide({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <>
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
    <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
      {/* // <img src={direction === "next" ? rightArrow : leftArrow} /> */}
    </button>
    <button
    onClick={moveSlide}
   
    className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
  >
 
  <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
    {/* // <img src={direction === "next" ? rightArrow : leftArrow} /> */}
  </button>
  </>
  );
  
}
