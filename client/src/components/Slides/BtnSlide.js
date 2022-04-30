import React from 'react';
import './Slide.css';

export default function BtnSlide({ direction, moveSlide }) {
  return (

    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
    
     <img src={direction === "next" ? <i class="fa-solid fa-arrow-right"></i> : <i class="fa-solid fa-arrow-left"></i>}  alt={direction}/>
    </button>
  );
  
}
