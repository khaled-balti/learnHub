import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\font-awesome\\css\\font-awesome.min.css";
import React, { useEffect, useRef } from "react";
import Professor from "../../../UI/Professor/Professor";
import Clock from "../../../UI/Clock/Clock";
import Student from "../../../UI/Student/Student";
import PopCourse1 from "../../../img/course-1.jpg"
import PopCourse2 from "../../../img/course-2.jpg"
import PopCourse3 from "../../../img/course-3.jpg"
import classes from "./popularCourse.module.css"
import { motion , useInView , useAnimation } from "framer-motion";
const PopularCourse = (props) => {
  const courseRef = useRef()
  const courseIsInView = useInView(courseRef, {once: true})
  const controls = useAnimation()
  useEffect(() => {
    if (courseIsInView) {
      controls.start("visible")
    }
  },[courseIsInView])
  return (
    <motion.div className="container d-flex flex-column justify-content-between align-items-center p-3 mb-4" variants={{hidden: {opacity: 0, y: 150} , visible: {opacity: 1, y: 0}}} initial="hidden" ref={courseRef} animate={controls} transition={{duration: 0.4, ease: 'easeInOut' , delay: props.delay}}>
      <div className="h-50 overflow-hidden">
        <motion.img src={PopCourse1} alt="error" className="img-fluid" whileHover={{scale: 1.1, transition: {duration: 0.3}}}/>
        {/* <div></div> */}
      </div>
      <div className={`container ${classes.caption} h-50`}>
        <h2 className="text-center mt-3">149.00$</h2>
        <div className={`text-center mt-1 mb-3 ${classes.stars}`}>
          <i className="fa fa-star me-1"></i>
          <i className="fa fa-star me-1"></i>
          <i className="fa fa-star me-1"></i>
          <i className="fa fa-star me-1"></i>
          <i className="fa fa-star"></i>
        </div>
        <div className="text-center fs-5 fw-semibold">Web Design & Development Course for Beginners</div>
        <hr className="bg-light m-0 mt-2"/>
        <div className={`my-1 d-flex justify-content-between align-items-center`}>
            <div className={`${classes.footer}`}><Professor/><span>John Doe</span></div>
            <div className={`${classes.footer}`}><Student/><span>30 Students</span></div>
            <div><Clock/><span>1.49 Hrs</span></div>
        </div>
      </div>
    </motion.div>
  );
};
export default PopularCourse;
