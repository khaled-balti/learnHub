import React from "react"
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