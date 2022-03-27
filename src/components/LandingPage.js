import React from 'react'
import landing from '../images/landing.jpg'

import "./LandingPage.css"
function LandingPage() {
    return (
        <div >
            <img className='image_holder' src={landing} alt="landing page" />
            <button className='button1'></button>
            <button className='button2'></button>
        </div>
    )
}

export default LandingPage