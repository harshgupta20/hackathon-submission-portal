import React from 'react';
import "../styles/TaskBar.css";
import { IoChevronDown } from "react-icons/io5";
import { MdSearch } from "react-icons/md";

const TaskBar = () => {
  return (
    <>
      <div id="task">
        <div id="task-body">
          <div id="task-submit">
            <button id="task-btn1">All Submissions</button>
            <button id="task-btn2">Favourite Submissions</button>
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