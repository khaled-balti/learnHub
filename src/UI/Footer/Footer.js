import React, { Fragment } from "react"
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\font-awesome\\css\\font-awesome.min.css"
import Location from "../Location-Dot/Location-dot";
import FooterPicOne from "../../img/course-1.jpg"
import FooterPicTwo from "../../img/course-2.jpg"
import FooterPicThree from "../../img/course-3.jpg"
import classes from "./Footer.module.css"
import { motion } from "framer-motion";
const Footer = () => {
    return (
        <Fragment>
            <div className={classes.background}>
                <div className="row">
                    <div className="col-md-3 col-sm-5 d-flex flex-column justify-content-center">
                        <h5 className="ms-4 fs-4">Quick Link</h5>
                        <ul className={classes.list}>
                            <li className={classes['list-item']}>&gt; About Us</li>
                            <li className={classes['list-item']}>&gt; Contact Us</li>
                            <li className={classes['list-item']}>&gt; Privacy Policy</li>
                            <li className={classes['list-item']}>&gt; Terms & Conditions</li>
                            <li className={classes['list-item']}>&gt; FAQs & Help</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-5">
                        <h2 className="ms-4 fs-4 mb-3">Contact</h2>
                        <ul className={classes.list}>
                            <li className="mb-3"><Location/> 123 Street, New York, USA</li>
                            <li><i className="fa fa-phone mb-3 me-3"></i> +012 345 67890</li>
                            <li><i className="fa fa-envelope mb-3 me-3" ></i> info@exemple.com</li>
                            <li className="d-flex">
                                <motion.a className={classes.social} whileHover={{backgroundColor: 'white',color: '#06bbcc', rotate: '1turn'}} transition={{duration: 0.5}} href="#"><i className="fa fa-twitter fs-5"></i></motion.a>
                                <motion.a className={classes.social} whileHover={{backgroundColor: 'white',color: '#06bbcc', rotate: '1turn'}} transition={{duration: 0.5}} href="#"><i className="fa fa-facebook fs-5"></i></motion.a>
                                <motion.a className={classes.social} whileHover={{backgroundColor: 'white',color: '#06bbcc', rotate: '1turn'}} transition={{duration: 0.5}} href="#"><i className="fa fa-instagram fs-5"></i></motion.a>
                                <motion.a className={classes.social} whileHover={{backgroundColor: 'white',color: '#06bbcc', rotate: '1turn'}} transition={{duration: 0.5}} href="#"><i className="fa fa-linkedin fs-5"></i></motion.a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-7">
                        <h2 className="fs-4 mb-4">Gallery</h2>
                        <div className={classes.gallery}>
                            <div className="row g-2 mb-2">
                                <div className="col-4">
                                    <img src={FooterPicOne} alt="error" className={`image-fluid bg-light p-1 ${classes.image}`} />
                                </div>
                                <div className="col-4">
                                    <img src={FooterPicTwo} alt="error" className={`image-fluid bg-light p-1 ${classes.image}`}/>
                                </div>
                                <div className="col-4">
                                    <img src={FooterPicThree} alt="error" className={`image-fluid bg-light p-1 ${classes.image}`}/>
                                </div>
                            </div>
                            <div className="row g-2">
                                <div className="col-4">
                                    <img src={FooterPicTwo} alt="error" className={`image-fluid bg-light p-1 ${classes.image}`}/>
                                </div>
                                <div className="col-4">
                                    <img src={FooterPicThree} alt="error" className={`image-fluid bg-light p-1 ${classes.image}`}/>
                                </div>
                                <div className="col-4">
                                    <img src={FooterPicOne} alt="error" className={`image-fluid bg-light p-1 ${classes.image}`}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-3 col-sm-7 d-flex flex-column ${classes.letter}`}>
                        <h2 className="fs-4 mb-4">NewsLetter</h2>
                        <p className="mb-4">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <form className={`bg-light ${classes.form}`}>
                            <input type="text" placeholder="Your email"></input>
                            <button>SignUp</button>
                        </form>
                    </div>
                </div>
            </div>
            <footer className={`${classes.footer}`}>
                <p><i className="fa fa-copyright"></i>Your Site Name, All Right Reserved. Designed By HTML Codex</p>
                <ul className={`${classes.list} d-flex`}>
                    <li className="me-3">Home</li>
                    <li className="me-3">Cookies</li>
                    <li className="me-3">Help</li>
                    <li className="me-3">FAQs</li>
                </ul>
            </footer>
        </Fragment>
    )
}
export default Footer