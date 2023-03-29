import React, { useEffect, useState } from 'react';
import "../styles/SubmissionPage.css";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdLink } from "react-icons/md";
import { RiPencilFill, RiDeleteBin6Fill, RiGithubFill } from "react-icons/ri";
import image1 from "../img/image1.png";
import { Link, useParams } from 'react-router-dom';

// MUI
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const SubmissionPage = () => {

    const params = useParams();
    const { id } = params;

    const [cardData, setCardData] = useState();

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const deleteCard = () => {
        var data = localStorage.getItem('data');
        data = JSON.parse(data);
        data.splice(id, 1);
        data = JSON.stringify(data);
        localStorage.setItem('data', data);
        handleClose();
    }


    useEffect(() => {
        var data = localStorage.getItem('data');
        data = JSON.parse(data);
        console.log("chala");
        console.log(data);
        setCardData(data[id]);
    }, [])

    // console.log(cardData);
    return (
        <>
            {
                cardData ?
                    <>
                        <div id="sub">
                            <div id="sub-body">
                                <div id="sub-title">
                                    <div id="sub-heading">
                                        <img id="sub-head-img" src={cardData.image} alt="image" />
                                        <p id="sub-head-p">{cardData.title}</p>
                                    </div>
                                    <p id="sub-title-p">{cardData.summary}</p>
                                    <div id="sub-info">
                                        <AiFillStar id="sub-favourite" />
                                        <p>|</p>
                                        <p id="sub-date" style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}><AiOutlineCalendar style={{ marginRight: '10px' }} />{cardData.hackstart}</p>
                                    </div>
                                </div>
                                <div id="sub-btn">
                                    <div id="sub-group-btn">
                                        <button id="sub-btn-edit" style={{ display: 'flex', alignItems: 'center' }}><RiPencilFill style={{ marginRight: '10px' }} /> <Link to={`/submissionEdit/${id}`}>Edit</Link></button>
                                        <button id="sub-btn-delete" onClick={handleClickOpen} style={{ display: 'flex', alignItems: 'center' }} ><RiDeleteBin6Fill style={{ marginRight: '10px' }} />Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div id="detail">
                            <div id="detail-desc">
                                <p id="detail-desc-title">Description</p>
                                <p>{cardData.desc}</p>
                            </div>
                            <div id="detail-info">
                                <div id="detail-venue">
                                    <p id="detail-v-title">Hackathon</p>
                                    <p id="detail-v-name">Prestige Interview Challenge</p>
                                    <p id="detail-v-date" style={{ display: 'flex', alignItems: 'center' }}><AiOutlineCalendar />{cardData.hackstart} - {cardData.hackend}</p>
                                </div>
                                <div id="detail-links">
                                    <a href={cardData.github} rel="noreferrer" target="_blank">

                                        <button id="detail-btn-github" style={{ display: 'flex', alignItems: 'center' }}><RiGithubFill style={{ color: '#666666', fontSize: 'large', paddingRight: '3px' }} />GitHub Repository</button>
                                    </a>
                                    <a href={cardData.link} rel="noreferrer" target="_blank">

                                        <button id="detail-btn-link" style={{ display: 'flex', alignItems: 'center' }}><MdLink style={{ color: '#666666', fontSize: 'large', paddingRight: '3px' }} />Other Link</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* DIALOG to Delete */}
                        <Dialog
                            open={open}
                            onClose={handleClose}
                        >
                            <DialogTitle id="alert-dialog-title">
                                {`Delete "${cardData.title}"`}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    This action is irreversible. Are you sure you want to delete this model?
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={deleteCard} color="error" variant='contained' autoFocus>
                                    Delete
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </> : "Loading..."
            }





        </>
    )
}

export default SubmissionPage