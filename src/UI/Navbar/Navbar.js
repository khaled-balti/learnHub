import React from "react"
import classes from './Navbar.module.css'
import NavBarLink from "./NavBarLink";
import { Link } from "react-router-dom";
import Anonyme from '../../img/anonyme.jpg'
const Navbar = ({user, logoutHandler}) => {
    return (
        <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-0 border-bottom border-white" style={{height: '75px'}} >
            <div className="container d-flex justify-content-center align-items-center">
                {!user && <div className={`d-none d-lg-inline ${classes['left-part']}`}><i className="fa fa-book"></i>  <span>E-Learning</span></div>}
                {user && user?.result?.googleId && <div className={`${classes.profile}`}><img src={user?.result?.imageUrl} style={{width: '100%', height: '100%'}} alt="error" /></div>}
                {user && user?.result?._id && <div className={`${classes.profile}`}><img src={Anonyme} style={{width: '100%', height: '100%'}} alt="error" /></div>}
                {user && user?.result?.name && <h3>{user?.result?.name}</h3>}
                <div className={`${classes['dropdown-menu-custom']}`}>
                    <button className={`btn dropdown-toggle d-lg-none d-inline ${classes.button} w-100 fs-5`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Menu
                    </button>
                    <ul className={`dropdown-menu ps-5 ${classes.dropcustom}`}>
                        <NavBarLink link="/">Home</NavBarLink>
                        <NavBarLink link="/about">About</NavBarLink>
                        <NavBarLink link="/courses">Courses</NavBarLink>
                        <NavBarLink link="/team">Team</NavBarLink>
                        {user && user?.result?.name && <NavBarLink link="/cart">Cart</NavBarLink>}                   
                        {user && user?.result?.name && <NavBarLink link="/classes">Classes</NavBarLink>}                   
                        <NavBarLink link="/contact">Contact</NavBarLink>                    
                        {!user && <NavBarLink link="/auth">SignUp</NavBarLink> }                   
                    </ul>
                </div>
                <div className="collapse navbar-collapse d-none d-lg-inline" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <NavBarLink link="/">Home</NavBarLink>
                        <NavBarLink link="/about">About</NavBarLink>
                        <NavBarLink link="/courses">Courses</NavBarLink>
                        <NavBarLink link="/team">Team</NavBarLink>
                        {user && user?.result?.name && <NavBarLink link="/cart">Cart  <i className="fa fa-shopping-cart"></i></NavBarLink>}                   
                        {user && user?.result?.name && <NavBarLink link="/classes">Classes</NavBarLink>}  
                        <NavBarLink link="/contact" specific={classes['join-mobile']}>Contact</NavBarLink>
                    </ul>
                    {!user && <Link to="/auth" className={classes.join}>Join Now</Link>}
                    {user && user?.result?.name && <button to="/logout" className={classes.join} onClick={logoutHandler}>Logout</button>}
                </div>
            </div>
        </nav>
    )
}
export default Navbar