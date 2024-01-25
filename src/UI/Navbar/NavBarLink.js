import React from "react";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\font-awesome\\css\\font-awesome.min.css";
import classes from "./NavbarLink.module.css";
import { NavLink } from "react-router-dom";
const NavBarLink = (props) => {
  return (
    <li className="nav-item">
      <NavLink
        className={({isActive}) => isActive ? classes.active : classes['list-item']}
        to={props.link}
        end
      >
        {props.children}
      </NavLink>
    </li>
  );
};
export default NavBarLink;
