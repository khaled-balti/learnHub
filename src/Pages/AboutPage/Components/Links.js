import React from "react"
import classes from './Links.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons"
const Links = () => {
    return (
        <div className={`container p-2 ${classes.cont}`}>
            <div className={`d-flex justify-content-between align-items-center`}>
                <a href="#" className={classes.link}><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#" className={classes.link}><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href="#" className={classes.link}><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
        </div>
    )
}
export default Links