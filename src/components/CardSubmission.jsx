import React, { useEffect, useState } from 'react';
import "../styles/CardSubmission.css";

import image1 from "../img/Image.png";
import { Link } from 'react-router-dom';





 
const CardSubmission = ({ fav }) => {

  const [getData, setGetData] = useState([]);




  useEffect(() => {
    var data = localStorage.getItem('data');
    data = JSON.parse(data);
    setGetData(data);
  }, []);

  console.log(getData);
  return (
    <>
      <div id="card-list">

        {
          fav == "true" ? getData.filter((data) => {
            return data.fav == "true"
          }).map((data, idx) => {
            return (
              <Link style={{ textDecoration: 'none', color: '#000' }} to={`/submissionPage/${idx}`}>
                <div id="card">
                  <div id="card-body">
                    <div id="card-title">
                      <img id="card-image" src={data.image} alt="project_image" />
                      <h5 id="card-h5">{data.title}</h5>
                    </div>
                    <div id="card-desc">{data.summary}</div>
                    <br />
                    <div id="card-time">{data.hackstart}</div>
                  </div>
                </div>
              </Link>
            )
          })
            : getData.map((data, idx) => {
              return (
                <Link style={{ textDecoration: 'none', color: '#000' }} to={`/submissionPage/${idx}`}>
                <div id="card">
                  <div id="card-body">
                    <div id="card-title">
                      <img id="card-image" src={data.image} alt="project_image" />
                      <h5 id="card-h5">{data.title}</h5>
                    </div>
                    <div id="card-desc">{data.summary}</div>
                    <br />
                    <div id="card-time">{data.hackstart}</div>
                  </div>
                </div>
              </Link>
              )
            })
        }
      </div>
    </>
  )
}

export default CardSubmission