import React, { forwardRef , useEffect } from "react";
import classes from "./Button.module.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js";
import { motion} from "framer-motion";
const Button = forwardRef((props, ref) => {
    const btnIsInView = props.btnIsInView
    const controls = props.controls
    const visibleBtn = props.visibleBtn
    useEffect(() => {
        if (btnIsInView) {
          controls.start(visibleBtn);
        }
      }, [btnIsInView]);
  return (
    <motion.button
      ref={ref}
      type={props.type}
      className={`${classes.button} ${
        props.func === "blue" ? classes.blue : classes.white
      }`}
      variants={props.variants}
      animate={props.animate}
      transition={props.transition}
      initial={props.initial}
    >
      {props.children}
    </motion.button>
  );
});
export default Button;
