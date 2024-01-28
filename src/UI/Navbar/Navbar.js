import React from "react"
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\font-awesome\\css\\font-awesome.min.css"
import classes from './Navbar.module.css'
import NavBarLink from "./NavBarLink";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-0 border-bottom border-white" style={{height: '75px'}} >
            <div className="container">
                <div className={`${classes['left-part']} d-none d-lg-inline`}><i className="fa fa-book"></i>  <span>eLEARNING</span></div>
                <div class="dropdown">
                    <button className={`btn dropdown-toggle d-lg-none d-inline ${classes.button}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Menu
                    </button>
                    <ul class="dropdown-menu ps-5">
                        <NavBarLink link="/">Home</NavBarLink>
                        <NavBarLink link="/about">About</NavBarLink>
                        <NavBarLink link="/courses">Courses</NavBarLink>
                        <NavBarLink link="/team">Team</NavBarLink>
                        <NavBarLink link="/contact">Contact</NavBarLink>
                    </ul>
                </div>
                <div className="collapse navbar-collapse d-none d-lg-inline" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <NavBarLink link="/">Home</NavBarLink>
                        <NavBarLink link="/about">About</NavBarLink>
                        <NavBarLink link="/courses">Courses</NavBarLink>
                        <NavBarLink link="/team">Team</NavBarLink>
                        <NavBarLink link="/contact">Contact</NavBarLink>
                    </ul>
                    <button type="button" className={classes.join}>Join Now   <i className="fa fa-arrow-circle-left"></i></button>
                </div>
            </div>
        </nav>
    )
}
export default Navbar