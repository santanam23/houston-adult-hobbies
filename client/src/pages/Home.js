import React from 'react';
import image1 from '../assets/image1.jpeg';
import './home.css';

const Home = () => {
    return (
        <main>
            <div>
                <img src={image1} className='home-main-image' alt='home-main'/>
            </div>
        </main>
    )
}

export default Home;