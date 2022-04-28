import React, {useState} from 'react'
import './Slide.css'
import BtnSlide from './BtnSlide';
import Data from './Data'

export default function Slide() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== Data.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === Data.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(Data.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slide">
            {Data.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img src={PUBLIC_URL + `/images/img${index + 1}.jpg`} />
                    </div>
                )
            })}
            <BtnSlide moveSlide={nextSlide} direction={"next"} />
            <BtnSlide moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}