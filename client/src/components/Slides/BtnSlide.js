import React from 'react';
import leftArrow from './left-arrow.svg';
import rightArrow from './right-arrow.svg';
import './Slide.css';

export default function BtnSlide({ direction, moveSlide }) {
  return (
    
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
    
     <img src={direction === "next" ? rightArrow : leftArrow } alt={direction}/>
    </button>
  );
  
}
