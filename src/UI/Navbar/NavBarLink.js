import React from "react";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\font-awesome\\css\\font-awesome.min.css";
import classes from './NavbarLink.module.css'
const NavBarLink = (props) => {
    return(
        <li className="nav-item">
            <a className={`nav-link text-black ${classes['list-item']}`} href="#!">{props.children}</a>
        </li>
    )
}
export default NavBarLink