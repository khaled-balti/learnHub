import React , {Fragment, useEffect, useRef} from "react";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\font-awesome\\css\\font-awesome.min.css";
import classes from './CourseAffiches.module.css'
import Course1 from '../../../img/cat-1.jpg'
import Course2 from '../../../img/cat-2.jpg'
import Course3 from '../../../img/cat-3.jpg'
import Course4 from '../../../img/cat-41.jpg'
import Title from "../../../UI/Title/Title";
import { motion , useAnimation , useInView } from "framer-motion" 
import CourseCaption from "./CourseCaption";
const CourseAffiches = (props) => {
    const image1Ref = useRef()
    const image2Ref = useRef()
    const image3Ref = useRef()
    const image4Ref = useRef()
    const image1IsInView = useInView(image1Ref , {once: 1})
    const image2IsInView = useInView(image2Ref , {once: 1})
    const image3IsInView = useInView(image3Ref , {once: 1})
    const image4IsInView = useInView(image4Ref , {once: 1})
    const image1Control = useAnimation()
    const image2Control = useAnimation()
    const image3Control = useAnimation()
    const image4Control = useAnimation()
    useEffect(() => {
        if (image1IsInView) {
            image1Control.start("visible1")
        }
    }, [image1IsInView])
    useEffect(() => {
        if (image2IsInView) {
            image2Control.start("visible2")
        }
    }, [image2IsInView])
    useEffect(() => {
        if (image3IsInView) {
            image3Control.start("visible3")
        }
    }, [image3IsInView])
    useEffect(() => {
        if (image4IsInView) {
            image4Control.start("visible4")
        }
    }, [image4IsInView])
    const courses = props.courses
    let web=0
    let design=0
    let mobile=0
    let montage=0
    for (const course of courses) {
        if (course.theme === "UI-UX design") {
            design++
        }
        else if (course.theme === "web development") {
            web++
        }
        else if (course.theme === "mobile development") {
            mobile++
        }
        else {
            montage++
        }
    }
    return (
        <Fragment>
            <Title h5="Cathegories" h1="Courses Cathegories" delay5={0.8} delay1={1.2} />
            <div className="container my-5">
                <div className="container d-none d-md-flex justfy-content-md-between align-items-md-center">
                    <div className={`container d-flex flex-column justfy-content-between align-items-center ${classes.container2} m-0 p-0 me-3`}>
                        <motion.div className={`container ${classes.container3} m-0 mb-3 p-0 overflow-hidden position-relative`} variants={{hidden1: {scale: 0}, visible1: {scale: 1}}} initial="hidden1" animate={image1Control} ref={image1Ref} transition={{duration: 0.4}}>
                            <motion.img src={Course1} whileHover={{scale: 1.1 , transition: {duration: 0.3}}} alt="error" className="img-fluid" ></motion.img>
                            <CourseCaption title="Web Design" courses={web + '  courses'}/>
                        </motion.div>
                        <div className={`container d-flex justfy-content-between align-items-center m-0 p-0 mb-3 ${classes.container4}`}>
                            <motion.div className={`container ${classes.container5} overflow-hidden position-relative m-0 p-0 me-3`} variants={{hidden2: {scale: 0}, visible2: {scale: 1}}} initial="hidden2" animate={image2Control} ref={image2Ref} transition={{duration: 0.4 , delay: 0.2}}>
                                <motion.img whileHover={{scale: 1.1 , transition: {duration: 0.3}}} src={Course2} alt="error" className="img-fluid"></motion.img>
                                <CourseCaption title="Graphic Design" courses={design + '  courses'}/>
                            </motion.div>
                            <motion.div className={`container ${classes.container6} overflow-hidden position-relative m-0 p-0`} variants={{hidden3: {scale: 0}, visible3: {scale: 1}}} initial="hidden3" animate={image3Control} ref={image3Ref} transition={{duration: 0.4 , delay: 0.4}}>
                                <motion.img whileHover={{scale: 1.1 , transition: {duration: 0.3}}} src={Course3} alt="error" className="img-fluid"></motion.img>
                                <CourseCaption title="Video Editing" courses={montage + '  courses'}/>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div className={`container ${classes.container1} overflow-hidden position-relative m-0 p-0`} variants={{hidden4: {scale: 0}, visible4: {scale: 1}}} initial="hidden4" animate={image4Control} ref={image4Ref} transition={{duration: 0.4 , delay: 1}}>
                        <motion.img src={Course4} whileHover={{scale: 1.1 , transition: {duration: 0.3}}} alt="error" className={`img-fluid`} ></motion.img>
                        <CourseCaption title="Onine Marketing" courses={mobile + '  courses'}/>
                    </motion.div>
                </div>
                <div className="row mx-auto d-block d-md-none">
                        <div className={`container col-12 overflow-hidden position-relative mb-3`}>
                            <img src={Course1} alt="error" className="img-fluid" ></img>
                            <CourseCaption title="Web Design" courses={web + '  courses'}/>
                        </div>
                        <div className={`container col-12 overflow-hidden position-relative mb-3`}>
                            <img src={Course2} alt="error" className="img-fluid"></img>
                            <CourseCaption title="Graphic Design" courses={design + '  courses'}/>
                        </div>
                        <div className={`container col-12 overflow-hidden position-relative mb-3`}>
                            <img src={Course3} alt="error" className="img-fluid"></img>
                            <CourseCaption title="Video Editing" courses={montage + '  courses'}/>
                        </div>
                        <div className={`container col-12 overflow-hidden position-relative mb-3`}>
                            <img src={Course4} alt="error" className={`img-fluid`} ></img>
                            <CourseCaption title="Onine Marketing" courses={mobile + '  courses'}/>
                        </div>
                    </div>
            </div>
        </Fragment>
    )
}
export default CourseAffiches