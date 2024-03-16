import React, { Fragment } from 'react'
import Header from '../../../UI/Header/Header'
import Title from '../../../UI/Title/Title'
import GraphicPic from "../../../img/cat-2.jpg"
import { useOutletContext } from 'react-router'
import Courses from './Courses'
const GraphicCourses = () => {
  const [user] = useOutletContext()
  return (
    <Fragment>
        <Header text="Graphic Design" pic={GraphicPic} />
        <Title h5="Courses" h1="Graphic Design" />
        <Courses user={user} />
    </Fragment>
  )
}

export default GraphicCourses