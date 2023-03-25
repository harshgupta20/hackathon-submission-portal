import React from 'react';
import "../styles/SubmissionPage.css";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdLink } from "react-icons/md";
import { RiPencilFill, RiDeleteBin6Fill, RiGithubFill } from "react-icons/ri";
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


       <div id="detail">
        <div id="detail-desc">
            <p id="detail-desc-title">Description</p>
            <p>Lorem ipsum dolor sit amet consectetur. Lacus sit aliquam vivamus sodales a integer justo elit. Mattis urna non parturient est non faucibus pretium morbi. Mattis condimentum arcu sapien nunc semper in laoreet amet cursus. At purus consectetur orci morbi at. Gravida consectetur nunc in quis vitae egestas. Fermentum pellentesque ullamcorper nisl massa penatibus condimentum non imperdiet. Porttitor a hendrerit pellentesque enim mus congue. Vitae interdum fusce duis ac posuere in aliquam risus aenean. Mi aliquet viverra ipsum lacus condimentum tincidunt. In bibendum imperdiet nullam eget tincidunt. Ut lorem id enim interdum lobortis aliquam risus elementum aliquet. Placerat fusce proin diam sollicitudin netus tincidunt sit ultricies. Varius convallis ultrices fermentum in commodo ut posuere. Lacus luctus lacus consequat dolor.

Lacus vulputate molestie mattis penatibus risus quam elit gravida auctor. Eget morbi maecenas nam in. Felis urna non id adipiscing sed cursus nec arcu. Egestas placerat blandit sed quis sed vitae. Porta at ac turpis gravida leo. Ipsum in laoreet facilisi arcu. Proin vulputate mi viverra dignissim sollicitudin interdum ultrices. Habitant eget dapibus pharetra blandit quis sagittis pulvinar fames vel.

Sit gravida cursus ligula fames lacus. Bibendum lectus nunc dapibus dui lectus velit porta. Sit id elementum urna at ut lorem aliquet. Pharetra sit malesuada tellus eget urna ultrices lectus et cursus. Bibendum leo id consectetur vel lectus mi urna in diam. Egestas metus enim elementum turpis felis. Leo ultrices adipiscing viverra ac. Maecenas a odio ac velit in tortor faucibus quam quis. Ut sapien auctor lacus pretium nec eu sed sit. Nulla quis sed massa maecenas.</p>
        </div>
        <div id="detail-info">
            <div id="detail-venue">
                <p id="detail-v-title">Hackathon</p>
                <p id="detail-v-name">Prestige Interview Challenge</p>
                <p id="detail-v-date" style={{display:'flex', alignItems:'center'}}><AiOutlineCalendar/>24 Feb 2023 - 24 March 2023</p>
            </div>
            <div id="detail-links">
                <button id="detail-btn-github" style={{display:'flex', alignItems:'center'}}><RiGithubFill style={{color:'#666666', fontSize:'large', paddingRight:'3px'}}/>GitHub Repository</button>
                <button id="detail-btn-link" style={{display:'flex', alignItems:'center'}}><MdLink style={{color:'#666666', fontSize:'large', paddingRight:'3px'}}/>Other Link</button>
            </div>
        </div>
       </div>
    </>
  )
}

export default SubmissionPage