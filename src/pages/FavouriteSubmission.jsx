import React from 'react'
import CardSubmission from '../components/CardSubmission'
import HeroComponent from '../components/HeroComponent'
import TaskBar from '../components/TaskBar'

const FavouriteSubmission = () => {
  return (
    <>
        <HeroComponent/>
        <TaskBar status="true"/>
        <CardSubmission fav="true"/>
    </>
  )
}

export default FavouriteSubmission