import React from 'react';
import "../styles/TaskBar.css";
import { IoChevronDown } from "react-icons/io5";
import { MdSearch } from "react-icons/md";
import { Link } from 'react-router-dom';

const TaskBar = ({status}) => {
  return (
    <>
      <div id="task">
        <div id="task-body">
          <div id="task-submit">
            <Link to="/"><button id="task-btn1" style={{color:!status ? '#000' : 'grey', borderBottom: !status && '3px solid #44924C' }}>All Submissions</button></Link>
            <Link to="/favouriteSubmission"><button style={{color:status ? '#000' : 'grey', borderBottom: status && '3px solid #44924C' }} id="task-btn2">Favourite Submissions</button></Link>
          </div>
          <div id="task-filter">
            <label id="task-label" htmlFor="">
              <MdSearch />
              <input id="task-search" type="text" placeholder='search...' />
            </label>
            <div id="task-dropdown">
              <select id="task-select" name="">
                <option id="task-option" value="">Newest</option>
                <option id="task-option" value="">Oldest</option>
              </select>
              <IoChevronDown />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TaskBar