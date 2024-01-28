import React from "react"
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js";
import classes from "./Spinner.module.css"
const Spinner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center container mb-5">
            <div className={`spinner-border text-primary ${classes.spinner}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
export default Spinner