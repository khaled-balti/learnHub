import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\font-awesome\\css\\font-awesome.min.css";
import React from "react"
import PopularCourse from "./PopularCourse";
const PopularCourses = (props) => {
    return (
        <div className="container-fuid px-5 p-3">
            <div className="row mx-auto">
                <div className="col-12 col-sm-6 col-lg-4">
                    <PopularCourse delay={0.4} />
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <PopularCourse delay={0.8}/>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <PopularCourse delay={1.2} />
                </div> 
            </div>
        </div>
    )
}
export default PopularCourses