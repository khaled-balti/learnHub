import React, { Fragment } from 'react'
import Header from '../../../UI/Header/Header'
import Courses from './Courses'
import MarketingPic from '../../../img/cat-4.jpg'
import Title from '../../../UI/Title/Title'
import { useOutletContext } from 'react-router'
const MarketingCourses = () => {
  const [user] = useOutletContext()
  return (
    <Fragment>
        <Title h5="Courses" h1="Marketing" />
        <Header text="Marketing Design" pic={MarketingPic} />
        <Courses user={user} />
    </Fragment>
  )
}

export default MarketingCourses