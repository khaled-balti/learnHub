import React, { Fragment } from "react"
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\font-awesome\\css\\font-awesome.min.css";
import Header from "../../UI/Header/Header";
import CourseAffiches from "./Components/CourseAffiches";
import Title from "../../UI/Title/Title";
import PopularCourses from "./Components/PopularCourses";
import { json, useLoaderData } from "react-router-dom";
const Courses = () => {
    const data = useLoaderData()
    const coursesArray = data.coursesArray
    const popularCourses = data.popularCourses
    return (
        <Fragment>
            <Header text="Courses"/>
            <CourseAffiches courses={coursesArray} />
            <Title h1="Popular Courses" h5="Courses"/>
            <PopularCourses courses={popularCourses}/>
        </Fragment>
    )
}
export default Courses
export async function popularCoursesLoader () {
    const response = await fetch("https://elearning-react-9cbb7-default-rtdb.firebaseio.com/courses.json")
    if (!response.ok) {
        throw json({ message: "could not fetch popular courses" });
    }
    else {
        const allCourses = await response.json()
        const coursesArray = [];
        for (const [key, value] of Object.entries(allCourses)) {
            coursesArray.push(value);
        }
        const popularCourses = coursesArray.filter((course) => {
            return course.popularity === "popular"
        })
        return {coursesArray, popularCourses}
    }
}