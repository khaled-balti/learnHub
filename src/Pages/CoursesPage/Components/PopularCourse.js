import React, { useEffect, useRef } from "react";
import Professor from "../../../UI/Professor/Professor";
import Clock from "../../../UI/Clock/Clock";
import Student from "../../../UI/Student/Student";
import classes from "./popularCourse.module.css";
import { motion , useInView , useAnimation } from "framer-motion";
import {useDispatch, useSelector} from 'react-redux'
import { getInstructors } from "../../../store/actions/instructorsActions";
import { Link, useNavigate } from "react-router-dom";
import { deleteCourseFromCart, addCourseToCart, getClasses, getCourseStudentsAction } from "../../../store/actions/courseAction";
const PopularCourse = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = props.user
  useEffect(() => {
    dispatch(getInstructors())
    dispatch(getClasses())
  }, [dispatch])
  const myClasses = useSelector(state => state.courseReducer.classesCourses)
  const exists = myClasses.find(course => course._id == props.id)
  const courseRef = useRef()
  const courseIsInView = useInView(courseRef, {once: true})
  const controls = useAnimation()
  useEffect(() => {
    if (courseIsInView) {
      controls.start("visible")
    }
  },[courseIsInView])
  function formatCurrency (amount, currencyCode = 'USD') {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
    });
    return formatter.format(amount);
  }
  const addToCartHandler = async(e) => {
    e.preventDefault()
    dispatch(addCourseToCart(props.id))
  }
  const deleteFromCartHandler = async(e) => {
    e.preventDefault()
    dispatch(deleteCourseFromCart(props.id, navigate))
  }
  return (
    <div className={`col-12 col-md-6 col-xl-4 overflow-hidden`}>
      <motion.div className={`container d-flex overflow-hidden flex-column justify-content-between align-items-center py-3 mb-4 ${classes.card}`} variants={{hidden: {opacity: 0, y: 150} , visible: {opacity: 1, y: 0}}} initial="hidden" ref={courseRef} animate={controls} transition={{duration: 0.4, ease: 'easeInOut' , delay: props.delay}}>
        {props.image && <div className={`${classes.image} w-100 container p-0 overflow-hidden`}>
          <Link to={user ? `/courses/${props.id}/infos` : '/auth'}>
            <motion.img src={props.image} alt="error" className={`m-0 img-fluid ${classes.img}`} whileHover={{scale: 1.1, transition: {duration: 0.3}}}/>
          </Link>
        </div>}
        <div className={`container ${classes.caption} ps-4`}>
          <p className="ps-4 mt-3 fs-5 mb-0 fw-bold" style={{color: '#06bbcc'}}>{formatCurrency(props.price)}</p>
          <h2 className={`ps-4 m fw-semibold fs-2 ${classes.title}`}>{props.title}</h2>
          {/* <div className={`text-center mt-1 mb-3 ${classes.stars}`}>
            {Array.from({ length: props.rate }).map((_, i) => (
              <i key={i} className={`fa fa-star me-1 ${classes.blues}`}></i>
            ))}
            {Array.from({ length: 5 - props.rate }).map((_, i) => (
              <i key={i} className={`fa fa-star me-1 text-black-50`}></i>
            ))}
          </div> */}
          <p className=" ps-4 fs-5">Presented By: <span className={`fw-semibold ${classes.prof}`}>{props.creator.firstName} {props.creator.lastName}</span></p>
            {user && <div className={`container-fluid d-flex justify-content-center align-items-center mb-3`} style={{width: '70%'}}>
              {user?.result?._id != props.creator?._id && !props.classes && !exists && <Link to={user ? `/courses/details/${props.id}` : '/auth'} className={`d-flex justify-content-center align-items-center text-white text-decoration-none me-3 ${classes.button}`}>Earn Now</Link>}
              {user?.result?._id != props.creator?._id && !props.cart && !props.classes && !exists && <button onClick={addToCartHandler} className={`d-flex justify-content-center align-items-center text-white ${classes.button}`}>Add To Cart</button>}
              {user?.result?._id != props.creator?._id && !props.classes && !props.cart && exists && <Link to={user ? `/courses/${props.id}/videos` : '/auth'} className={`d-flex justify-content-center align-items-center text-white text-decoration-none me-3 ${classes.button}`}>Consult Course</Link>}
              {props.cart && <button onClick={deleteFromCartHandler} className={`d-flex justify-content-center align-items-center text-white ${classes.button}`}>Remove</button>}
              {(props.classes || user?.result?._id === props.creator?._id) && <Link to={user ? `/courses/${props.id}/videos` : '/auth'} className={`d-flex justify-content-center align-items-center text-white text-decoration-none me-3 ${classes.button}`}>Consult Course</Link>}
            </div>}
          {/* <div className={`container-fluid pt-2 ${classes.bordered}`}>
            <div className="row">
              <div className={`${classes.font} ${classes.footer} container col-3 m-0 mb-2 d-flex justify-content-center align-items-center`}><Professor/><span>{props.creator && props.creator.firstName}</span></div>
              <div className={`${classes.font} ${classes.footer} container col-5 mb-2 d-flex justify-content-center align-items-center`}><Student/><span>{props.studentsNumber} Students</span></div>
              <div className={`${classes.font} container col-4 d-flex justify-content-center align-items-center`}><Clock/><span>1.49 Hrs</span></div>
            </div>
          </div> */}
        </div>
      </motion.div>
    </div>
  );
};
export default PopularCourse;
