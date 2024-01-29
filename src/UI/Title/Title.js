import React , {Fragment, useEffect , useRef} from "react"
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\font-awesome\\css\\font-awesome.min.css";
import classes from './Title.module.css'
import { motion , useAnimation , useInView } from "framer-motion";
const Title = (props) => {
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
        <Fragment>
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
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: props.delay5
                }}
            >
                {props.h5}
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
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: props.delay1
                }}
            >
                {props.h1}
            </motion.h1>
        </Fragment>
    )
}
export default Title