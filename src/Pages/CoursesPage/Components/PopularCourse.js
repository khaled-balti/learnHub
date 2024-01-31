import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\font-awesome\\css\\font-awesome.min.css";
import React, { useEffect, useRef } from "react";
import Professor from "../../../UI/Professor/Professor";
import Clock from "../../../UI/Clock/Clock";
import Student from "../../../UI/Student/Student";
import classes from "./popularCourse.module.css";
import { motion , useInView , useAnimation } from "framer-motion";
const PopularCourse = (props) => {
  function formatCurrency (amount, currencyCode = 'USD') {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
    });
    return formatter.format(amount);
  }
  const courseRef = useRef()
  const courseIsInView = useInView(courseRef, {once: true})
  const controls = useAnimation()
  useEffect(() => {
    if (courseIsInView) {
      controls.start("visible")
    }
  },[courseIsInView])
  console.log(props.title)
  console.log(props.price)
  return (
    <div className="col-12 col-md-6 col-xl-4">
      <motion.div className={`container d-flex flex-column justify-content-between align-items-center p-3 mb-4 ${classes.card}`} variants={{hidden: {opacity: 0, y: 150} , visible: {opacity: 1, y: 0}}} initial="hidden" ref={courseRef} animate={controls} transition={{duration: 0.4, ease: 'easeInOut' , delay: props.delay}}>
        <div className={`container p-0 overflow-hidden ${classes.image}`}>
          <motion.img src={require(`../../../img/${props.image}`)} alt="error" className={`m-0 img-fluid ${classes.img}`} whileHover={{scale: 1.1, transition: {duration: 0.3}}}/>
          {/* <div></div> */}
        </div>
        <div className={`container ${classes.caption}`}>
          <h2 className="text-center mt-3">{formatCurrency(props.price)}</h2>
          <div className={`text-center mt-1 mb-3 ${classes.stars}`}>
            {Array.from({ length: props.rate }).map((_, i) => (
              <i key={i} className={`fa fa-star me-1 ${classes.blues}`}></i>
            ))}
            {Array.from({ length: 5 - props.rate }).map((_, i) => (
              <i key={i} className={`fa fa-star me-1 text-black-50`}></i>
            ))}
          </div>
          <div className={`container-fluid px-0 text-center fs-5 fw-semibold d-flex justify-content-center align-items-start ${classes.title}`}>{props.title}</div>
          <div className={`container-fluid p-0`}>
            <div className="row">
              <div className={`${classes.font} ${classes.footer} container col-4 m-0 mb-2 d-flex justify-content-center align-items-center`}><Professor/><span>{props.professor}</span></div>
              <div className={`${classes.font} ${classes.footer} container col-4 mb-2 d-flex justify-content-center align-items-center`}><Student/><span>30 Students</span></div>
              <div className={`${classes.font} container col-4 d-flex justify-content-center mb-2 align-items-center`}><Clock/><span>1.49 Hrs</span></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default PopularCourse;
