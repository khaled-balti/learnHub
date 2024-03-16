import React from "react"
import Location from "../../../UI/Location-Dot/Location-dot"
import classes from './TemplateLocation.module.css'
const TemplateLocation = (props) => {
    return (
        <div className={`d-flex justify-content-between align-items-center ${classes.container}`}>
            <div className={`${classes.background}`}>
                <Location width='20px' height='20px'/>
            </div>
            <div>
                <h5 className={classes.title}>{props.title}</h5>
                <p className="text-black-50">{props.contact}</p>
            </div>
        </div>
    )
}
export default TemplateLocation