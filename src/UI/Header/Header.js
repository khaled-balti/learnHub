import React, { useRef, useEffect } from "react";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js";
import classes from "./Header.module.css";
import HomePicOne from "../../img/carousel-1.jpg";
import ButtonRead from "../Button/ButtonRead";
import { motion, useAnimation, useInView } from "framer-motion";
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
    <div className={classes.cont}>
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
          About US
        </motion.h1>
        <ButtonRead>Read More</ButtonRead>
      </div>
      <img src={HomePicOne} alt="error" className={classes.filter} />
    </div>
  );
};
export default Header
