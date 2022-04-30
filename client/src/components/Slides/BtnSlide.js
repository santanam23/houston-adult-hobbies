import React from 'react';
import './Slide.css'

export default function BtnSlide({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <>
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
    <i class="fa-solid fa-arrow-left"></i>
      {/* // <img src={direction === "next" ? rightArrow : leftArrow} /> */}
    </button>
    <button
    onClick={moveSlide}
   
    className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
  >
 
 <i class="fa-solid fa-arrow-right"></i>
    {/* // <img src={direction === "next" ? rightArrow : leftArrow} /> */}
  </button>
  </>
  );
  
}
