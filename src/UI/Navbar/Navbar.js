import React from "react"
import classes from './Navbar.module.css'
import NavBarLink from "./NavBarLink";
import { Link } from "react-router-dom";
import Anonyme from '../../img/anonyme.jpg'
import AnonymeInst from '../../img/instructor prof.jpeg'
import { Avatar, AvatarFallback, AvatarImage } from "../../shadcnComponents/ui/avatar"
const Navbar = ({user, logoutHandler}) => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top shadow-0 border-bottom border-white py-0" style={{minHeight: '60px', backgroundColor: '#eee'}} >
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                    {!user && <div className={`d-none d-lg-inline ${classes['left-part']}`}><i className="fa fa-book"></i>  <span>E-Learning</span></div>}
                    {user && user?.result?.googleId && <Avatar>
                        <AvatarImage src={user?.result?.imageUrl} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    }
                    {user && user?.result?._id && <Avatar>
                        <AvatarImage src={user?.result?.image !== '' ? user?.result?.image : Anonyme } />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>}
                    {user && user?.result?.name && <h3 className="ms-3">{user?.result?.name}</h3>}
                </div>
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
                        {user && user?.result?.name && user?.result?.role === "instructor" && <NavBarLink link="/dashboard/courses">Dashboard</NavBarLink>}                   
                        <NavBarLink link="/contact">Contact</NavBarLink>                    
                        {!user && <NavBarLink link="/auth">SignUp</NavBarLink> }                   
                        {user && <button className={classes.logout} to="/logout" onClick={logoutHandler}>Logout</button>}                   
                    </ul>
                </div>
                <div className="navbar-collapse d-none d-lg-inline" id="navbarSupportedContent" >
                    <ul className="navbar-nav ms-auto">
                        <NavBarLink link="/">Home</NavBarLink>
                        <NavBarLink link="/about">About</NavBarLink>
                        <NavBarLink link="/courses">Courses</NavBarLink>
                        <NavBarLink link="/team">Team</NavBarLink>
                        {user && user?.result?.name && <NavBarLink link="/cart">Cart</NavBarLink>}                   
                        {user && user?.result?.name && <NavBarLink link="/classes">Classes</NavBarLink>}  
                        {user && user?.result?.name && user?.result?.role === "instructor" && <NavBarLink link="/dashboard/courses">Dashboard</NavBarLink>}    
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