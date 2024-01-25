import React , {forwardRef, useEffect} from "react";
import classes from "./ButtonRead.module.css";
import { motion } from "framer-motion";
const ButtonRead = forwardRef((props,ref) => {
  const btnIsInView = props.buttonIsInView;
  const controls = props.animate;
  const visibleBtn = props.visibleButton;
  useEffect(() => {
    if (btnIsInView) {
      controls.start(visibleBtn);
    }
  }, [btnIsInView]);
  return (
    <motion.button
      className={classes.button}
      ref={ref}
      variants={props.variants}
      animate={props.animate}
      transition={props.transition}
      initial={props.initial}
    >
      {props.children}
    </motion.button>
  );
})
export default ButtonRead;
