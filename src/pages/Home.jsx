import React from 'react';
import HeroComponent from '../components/HeroComponent';
import TaskBar from '../components/TaskBar';
import CardSubmission from "../components/CardSubmission";

const Home = () => {
  return (
    <>
        <HeroComponent/>
        <TaskBar/>
        <CardSubmission/>
    </>
  )
}

export default Home