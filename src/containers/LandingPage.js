import React, { useEffect, useState } from 'react'

import Login from  './Login'
import SignUp from './SignUp';
import '../styles/landing.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import img from "../imgs/cofi.png"

export default function LandingPage (p) {

    useEffect(() => {
        AOS.init({duration: 2000})
    },[]
    )
    const [signedUp, setSignUp] = useState(true)

    const handleClick = (e) => {
        setSignUp(!signedUp)
    }
    

    return(
        <div>
            <section className="aboutSection">
                <div className="custom-shape-divider-top-1601332984">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" className="shape-fill"></path>
                    </svg>
                </div>

                <div className="aboutColumn">
                    <h1 data-aos="fade-up">Co Fi</h1>
                    <h2 data-aos="fade-right">Coffee's  Wifi ♡</h2>
                    <p data-aos="fade-up"
                        data-aos-duration="5000">
                    ABOUT THE WEBSITE WHAT IT DO
                    </p>     
                </div>

                <div className="aboutColumn">
                    
                    <img src={img} alt="coffee" />


                    {signedUp ? <Login click={handleClick} /> : <SignUp click={handleClick}/>}
                    <div>
                   
            </div>
                </div>
              
                <div className="custom-shape-divider-bottom-1601332540">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                     <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" className="shape-fill"></path>
                    </svg>
                </div>
                
            </section>
           
            

        </div>
    )
}