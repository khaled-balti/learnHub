import React from "react"
import classes from "./TemplateLocation.module.css"
const TemplateEmail = (props) => {
    return (
        <div className={`d-flex justify-content-between align-items-center ${classes.container3}`}>
            <div className={`${classes.background}`}>
                <i className={`fa fa-envelope-open ${classes.icon}`}></i>
            </div>
            <div>
                <h5 className={classes.title}>{props.title}</h5>
                <p className="text-black-50">{props.contact}</p>
            </div>
        </div>
    )
}
export default TemplateEmail