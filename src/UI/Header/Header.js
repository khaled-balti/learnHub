import React, { useRef, useEffect } from "react";
import classes from "./Header.module.css";
import ButtonRead from "../Button/ButtonRead";
import { motion, useAnimation, useInView } from "framer-motion";
import Pic from "../../img/carousel-1.jpg"
const Header = (props) => {
  const titleRef = useRef();
  const titleIsInView = useInView(titleRef, { once: true });
  const titleControls = useAnimation();
  useEffect(() => {
    if (titleIsInView) {
      titleControls.start("visible");
    }
  }, [titleIsInView])
  return (
    <div className={`${classes.cont} container-fluid w-100 p-0 mb-5`}>
      <div className={classes.caption}>
        <motion.h1
          ref={titleRef}
          className={classes.title}
          variants={{
            hidden: { y: -100, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
          initial="hidden"
          animate={titleControls}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {props.text}
        </motion.h1>
        <ButtonRead>Read More</ButtonRead>
      </div>
      <div className={`container-fluid mx-0 w-100 p-0 ${classes.backim}`}>
        <img src={props.pic} alt="error" className={`${classes.filter} ${classes.cont} img-fluid`} />
      </div>
    </div>
  );
};
export default Header
