import React from "react"
import classes from './Links.module.css'
const Links = () => {
    return (
        <div className={`container p-2 ${classes.cont}`}>
            <div className={`d-flex justify-content-between align-items-center`}>
                <a href="#" className={classes.link}><i className="fa fa-facebook"></i></a>
                <a href="#" className={classes.link}><i className="fa fa-twitter"></i></a>
                <a href="#" className={classes.link}><i className="fa fa-instagram"></i></a>
            </div>
        </div>
    )
}
export default Links