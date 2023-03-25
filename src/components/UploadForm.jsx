import React, { useState } from 'react';
import "../styles/UploadForm.css";

import Upload from "../img/Upload.png";

const UploadForm = () => {


    
    
    const [title, setTitle] = useState("")
    const [summary, setSummary] = useState("")
    const [desc, setDesc] = useState("")
    const [image, setImage] = useState("")
    const [hackName, setHackName] = useState("")
    const [hackstart, setHackStart] = useState("")
    const [hackend, setHackEnd] = useState("")
    const [github, setGithub] = useState("")
    const [link, setLink] = useState("")

  
    
    const handleSubmit = () => {
        if(title && summary && desc && image && hackName && hackstart && hackend && github && link){
            alert("This feature yet to be implemented");
        }else{
            alert("Fields Can't be empty");
        }

    }
    const inputFileHandle = (e) => {
        const reader = new FileReader();

        reader.onload = async () => {
            setImage(reader.result);
        }
        reader.readAsDataURL(e.target.files[0]);
    }


    return (
        <>
            <div id="uplaod">
                <div id="upload-body">
                    <h2 id="up-h2">New Hackathon Submission</h2>
                    <div id="up-form">
                        <div id="up-title">
                            <p id="up-p1">Title</p>
                            <input id="up-input" onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Title of your submission' />
                        </div>
                        <div id="up-summary">
                            <p id="up-p2">Summary</p>
                            <input id="up-input" onChange={(e) => setSummary(e.target.value)} type="text" placeholder='A short summary of your submission (this will be visible with your submission)' />
                        </div>
                        <div id="up-desc">
                            <p id="up-p3">Description</p>
                            <textarea id="up-input3" onChange={(e) => setDesc(e.target.value)} name="" cols="30" rows="10" placeholder='Write a long description of your project. You can describe your idea and approach here.'></textarea>
                            <p style={{ textAlign: 'right' }}>0 / 3,000 characters</p>
                        </div>
                        <div id="up-img">
                            <p id="up-p4">Cover Image</p>
                            <p id="up-img-p4">Minimum resolution: 360px  X 360px</p>
                            <div id="up-img-input" style={{display:'flex'}}>
                                <input id="up-input4" onChange={(e) => inputFileHandle(e)} type="file" hidden />
                                {image && <img src={image} alt="img" />}
                                <label for="up-input4" id="up-label"><img style={{ width: '100%' }} src={Upload} alt="" /></label>
                            </div>
                        </div>
                        <div id="up-hackName">
                            <p id="up-p5">Hackathon Name</p>
                            <input id="up-input" onChange={(e) => setHackName(e.target.value)} type="text" placeholder='Enter the name of the hackathon' />
                        </div>

                        <div id="up-date">
                            <div id="up-startdate">
                                <p id="up-start">Hackathon Start Date</p>
                                <input id="up-input6" onChange={(e) => setHackStart(e.target.value)} type="date" name="start_date" placeholder='Start Date' />
                            </div>
                            <div id="up-enddate">
                                <p id="up-end">Hackathon End Date</p>
                                <input id="up-input6" onChange={(e) => setHackEnd(e.target.value)} type="date" name="" />
                            </div>
                        </div>

                        <div id="up-github">
                            <p id="up-p6">Github Repository</p>
                            <input id="up-input" onChange={(e) => setGithub(e.target.value)} type="text" placeholder="Enter your submission's public GitHub repository link" />
                        </div>
                        <div id="up-link">
                            <p id="up-p7">Other Links</p>
                            <input id="up-input" onChange={(e) => setLink(e.target.value)} type="text" placeholder='You can upload a video demo or URL of you demo app here.' />
                        </div>
                        <button id="up-btn" onClick={handleSubmit}>Upload Submission</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UploadForm