import React from 'react';
import "../styles/SubmissionPage.css";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiPencilFill, RiDeleteBin6Fill } from "react-icons/ri";
import image1 from "../img/image1.png";

const SubmissionPage = () => {
  return (
    <>
       <div id="sub">
        <div id="sub-body">
            <div id="sub-title">
                <div id="sub-heading">
                    <img id="sub-head-img" src={image1} alt="" />
                    <p id="sub-head-p">InterviewMe</p>
                </div>
                <p id="sub-title-p">Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.</p>
                <div id="sub-info">
                    <AiFillStar id="sub-favourite"/>
                    <p>|</p>
                    <p id="sub-date" style={{display:'flex', alignItems:'center', textAlign:'center'}}><AiOutlineCalendar style={{marginRight:'10px'}}/>20 March</p>
                </div>
            </div>
            <div id="sub-btn">
                <div id="sub-group-btn">
                    <button id="sub-btn-edit" style={{display:'flex', alignItems:'center'}}><RiPencilFill style={{marginRight:'10px'}}/>Edit</button>
                    <button id="sub-btn-delete" style={{display:'flex', alignItems:'center'}} ><RiDeleteBin6Fill  style={{marginRight:'10px'}}/>Delete</button>
                </div>
            </div>
        </div>
       </div>
    </>
  )
}

export default SubmissionPage