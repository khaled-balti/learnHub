import React, { Fragment, useEffect } from 'react'
import Header from '../../UI/Header/Header'
import HomePic2 from '../../img/carousel-2.jpg'
import Title from '../../UI/Title/Title'
import { useDispatch, useSelector } from 'react-redux'
import { getClasses } from '../../store/actions/courseAction'
import PopularCourse from '../CoursesPage/Components/PopularCourse'
import { useOutletContext } from 'react-router'
const Cart = () => {
  const [user] = useOutletContext()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getClasses())
  } , [dispatch])
  const courses = useSelector((state) => state.courseReducer.classesCourses)
  const coursesNumber = useSelector((state) => state.courseReducer.classesCoursesNumber)
  const content = courses.map((course, index) => {
    return <PopularCourse 
    image={course.image}
    price={course.price}
    creator={course.creator}
    rate={course.rate}
    title={course.title}
    delay={0.4 * (index + 1)}
    id={course._id}
    user={user}
    column="col-md-6 col-xl-4"
    key={index}
    classes={true}
    />
  })
  return (
    <Fragment>
      <Header text="classes" pic={HomePic2} />
      <Title h5="my courses" h1="My Taken Courses" />
      <div className=''></div>
      <div className="container-fuid px-5 p-3">
        <div className="row mx-auto">
          {content}
        </div>
      </div>
    </Fragment>
  )
}

export default Cart