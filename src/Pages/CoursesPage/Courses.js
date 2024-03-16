import React, { useEffect, Fragment } from "react"
import Header from "../../UI/Header/Header";
import CourseAffiches from "./Components/CourseAffiches";
import Title from "../../UI/Title/Title";
import { useDispatch, useSelector } from "react-redux";
import { getCourses, getPopularCourses } from "../../store/actions/courseAction";
import HomePic1 from "../../img/carousel-1.jpg"
import { useOutletContext } from "react-router";
import PopularCourses from "./Components/PopularCourses";
const Courses = (props) => {
    const [user] = useOutletContext()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCourses())
        dispatch(getPopularCourses())
    }, [dispatch])
    const courses = useSelector((state) => state.courseReducer.courses)
    const popularCourses = useSelector((state) => state.courseReducer.popularCourses)
    return (
        <Fragment>
            <Header text="Courses" pic={HomePic1} />
            <CourseAffiches courses={courses} />
            <Title h1="Popular Courses" h5="Courses"/>
            <PopularCourses courses={popularCourses} user={user} />
        </Fragment>
    )
}
export default Courses