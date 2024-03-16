import React from "react";
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
