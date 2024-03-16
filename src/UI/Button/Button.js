import React, { forwardRef , useEffect } from "react";
import classes from "./Button.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
    <Link to={props.link}>
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
    </Link>
  );
});
export default Button;
