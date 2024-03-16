import React, { Fragment } from 'react'
import Header from '../../../UI/Header/Header'
import Courses from './Courses'
import VideoPic from '../../../img/cat-3.jpg'
import Title from '../../../UI/Title/Title'
import { useOutletContext } from 'react-router'
const VideoCourses = () => {
  const [user] = useOutletContext()
  return (
    <Fragment>
        <Header text="Video Editing" pic={VideoPic} />
        <Title h5="Courses" h1="Video Editing" />
        <Courses user={user} />
    </Fragment>
  )
}

export default VideoCourses