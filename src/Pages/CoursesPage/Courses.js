import React, { Fragment } from "react"
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\font-awesome\\css\\font-awesome.min.css";
import Header from "../../UI/Header/Header";
import CourseAffiches from "./Components/CourseAffiches";
import Title from "../../UI/Title/Title";
import PopularCourses from "./Components/PopuarCourses";
const Courses = () => {
    return (
        <Fragment>
            <Header text="Courses"/>
            <CourseAffiches />
            <Title h1="Popular Courses" h5="Courses"/>
            <PopularCourses/>
        </Fragment>
    )
}
export default Courses