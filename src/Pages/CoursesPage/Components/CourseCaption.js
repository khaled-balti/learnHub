import React from "react"
import classes from "./CourseCaption.module.css"
const CourseCaption = (props) => {
    return (
        <div className={`position-absolute bottom-0 end-0 ${classes.caption} p-4 py-2 d-flex justify-content-center flex-column align-items-center`}>
            <h5 className="fw-semibold text-black">{props.title}</h5>
            <p className={`${classes.courses} mb-0`}>{props.courses}</p>
        </div>
    )
}
export default CourseCaption