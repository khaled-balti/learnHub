import React, { useEffect, Fragment } from "react"
import Header from "../../UI/Header/Header";
import CourseAffiches from "./Components/CourseAffiches";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../store/actions/courseAction";
import HomePic1 from "../../img/carousel-1.jpg"
const Courses = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCourses())
    }, [dispatch])
    const courses = useSelector((state) => state.courseReducer.courses)
    return (
        <Fragment>
            <Header text="Courses" pic={HomePic1} />
            <CourseAffiches courses={courses} />
        </Fragment>
    )
}
export default Courses