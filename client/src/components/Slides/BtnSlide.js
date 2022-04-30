import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Slide.css';

export default function BtnSlide({ direction, moveSlide }) {
  return (

    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
    
     <img src={direction === "next" ? <FontAwesomeIcon icon={["fa-solid fa-arrow-right"]} /> : <FontAwesomeIcon icon={["fa-solid fa-arrow-left"]}/>}  alt={direction}/>
    </button>
  );
  
}
