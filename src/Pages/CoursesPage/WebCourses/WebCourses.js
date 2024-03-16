import React, { Fragment } from 'react'
import Header from '../../../UI/Header/Header'
import Courses from './Courses'
import Title from '../../../UI/Title/Title'
import WebPic from "../../../img/cat-1.jpg"
import { useOutletContext } from 'react-router'
const WebCourses = () => {
  const [user] = useOutletContext()
  return (
    <Fragment>
        <Header text="Web Design" pic={WebPic} />
        <Title h5="Courses" h1="Web Design" />
        <Courses user={user} />
    </Fragment>
  )
}

export default WebCourses