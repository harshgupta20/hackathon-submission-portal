import React from 'react';
import "../styles/CardSubmission.css";

import image1 from "../img/Image.png";

const CardSubmission = () => {
  return (
    <>
        <div id="card">
            <div id="card-body">
                <div id="card-title">
                    <img id="card-image" src={image1} alt="project_image" />
                    <h5 id="card-h5">InterviewMe</h5>
                </div>
                <div id="card-desc">Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.</div>
                <br />
                <div id="card-time">uploaded 6 days ago</div>
            </div>
        </div>
    </>
  )
}

export default CardSubmission