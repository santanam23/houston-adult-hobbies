import React from 'react';
import home from '../assets/images/icons/home.jpeg';
import './home.css';
const Home = () => {
    return (
        <main>
        <div className="row">
            <div className="column side">
                <h2>Who We Are</h2>
                <p>We are a houston based social group that focuses on bringing the Volleyballcommunity together. Feel free to Signup and join our chat on different events going on in Houston. If you are looking to join a league or play around in the area with some awesome folks, this is the social chat for you. You can also add your friends and see what they are saying. </p>
            </div>
            
            <div className="column middle">
                <h2>Welcome Volleyball Enthusiast!</h2>
                <img src={home} className='home-main-image' alt='home-main'/>
            </div>
            
            <div className="column side">
                <h2>Follow Us</h2>
                <p></p>
            </div>
        </div>    
        </main>
    )
}

export default Home;