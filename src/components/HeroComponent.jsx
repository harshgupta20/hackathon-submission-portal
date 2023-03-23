import React from 'react'
import "../styles/HeroComponent.css";
import bulb from "../img/bulb-hand.png";

const HeroComponent = () => {
  return (
    <>
        <div id="hero">
            <div id="hero-body">
                <div id="hero-title">
                    <div id="hero-heading">
                        <h2 id="hero-h2">Hackathon Submissions</h2>
                        <p id="hero-p">Lorem ipsum dolor sit amet consectetur. Urna cursus amet pellentesque in parturient purus feugiat faucibus. Congue laoreet duis porta turpis eget suspendisse ac pharetra amet. Vel nisl tempus nec vitae. </p>
                    </div>
                    <button id="hero-btn">Upload Submission</button>
                </div>
                <img id="hero-img" src={bulb} alt="bulb-img" />
            </div>
        </div>
    </>
  )
}

export default HeroComponent