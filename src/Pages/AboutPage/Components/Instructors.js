import React , {useEffect , useRef} from "react"
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\font-awesome\\css\\font-awesome.min.css";
import Instructor from "./Instructor";
import classes from './Instructors.module.css'
import { motion , useAnimation , useInView } from "framer-motion";
const Instructors = (props) => {
    const content = props.inst.map((instructor , index) => (
        <div className="col-lg-3 col-md-6 col-sm-12">
            <Instructor
                firstName={instructor.firstName}
                lastName={instructor.lastName}
                diplome={instructor.diplome}
                image={instructor.image}
                delay={index * 0.4 + 0.8}
            />
        </div>
    ))
    const titleRef = useRef()
    const titleIsInView = useInView(titleRef , {once: true})
    const titleControls = useAnimation()
    useEffect(() => {
        if (titleIsInView) {
            titleControls.start("visibleTitle")
        }
    } , [titleIsInView])
    const slogonRef = useRef()
    const slogonIsInView = useInView(slogonRef , {once: true})
    const slogonControls = useAnimation()
    useEffect(() => {
        if (slogonIsInView) {
            slogonControls.start("visibleSlogon")
        }
    } , [slogonIsInView])
    return (
        <div className="container">
            <motion.h5
                className={classes.title}
                ref={slogonRef}
                variants={{
                    hiddenSlogon: { opacity: 0, y: 150 },
                    visibleSlogon: { opacity: 1, y: 0 },
                }}
                initial="hiddenSlogon"
                animate={slogonControls}
                transition={{
                    y: { duration: 0.4, ease: "easeInOut"},
                    opacity: { duration: 0.4, ease: "easeInOut"},
                }}
            >
                Instructors
            </motion.h5>
            <motion.h1
                className={classes.subtitle}
                ref={titleRef}
                variants={{
                    hiddenTitle: { opacity: 0, y: 150 },
                    visibleTitle: { opacity: 1, y: 0 },
                }}
                initial="hiddenTitle"
                animate={titleControls}
                transition={{
                    y: { duration: 0.4, ease: "easeInOut", delay: 0.4 },
                    opacity: { duration: 0.4, ease: "easeInOut", delay: 0.4 },
                }}
            >
                Expert Instructors
            </motion.h1>
            <div className="row">
                {content}
            </div>
        </div>
    )  
}
export default Instructors