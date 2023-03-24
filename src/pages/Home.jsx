import React, { useState } from 'react';
import HeroComponent from '../components/HeroComponent';
import TaskBar from '../components/TaskBar';
import CardSubmission from "../components/CardSubmission";

const Home = () => {

  const [sub, setSub] = useState('allSub');

  return (
    <>
        <HeroComponent/>
        <TaskBar/>
        <CardSubmission/>
    </>
  )
}

export default Home