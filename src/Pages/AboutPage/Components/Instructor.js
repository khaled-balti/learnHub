import React, { useRef, useEffect } from "react";
import classes from "./Instructor.module.css";
import Links from "./Links";
import { motion, useAnimation, useInView } from "framer-motion";
const Instructor = (props) => {
  const portfolioRef = useRef();
  const portfolioIsInView = useInView(portfolioRef, { once: true });
  const controls = useAnimation();
  useEffect(() => {
    if (portfolioIsInView) {
      controls.start("visible");
    }
  }, [portfolioIsInView]);

  return (
    <motion.div
      className={`d-flex flex-column mb-5 m-0 overflow-hidden`}
      ref={portfolioRef}
      variants={{
        hidden: { opacity: 0, y: 150 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{duration: 0.4, delay: props.delay}}
    >
      <motion.img
        src={props.image}
        alt={props.firstName}
        className={`image-fluid`}
        whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
      />
      <div
        className={`d-flex flex-column justify-content-center align-items-center p-4 ${classes.cont} position-relative`}
      >
        <Links />
        <p className={`mt-3 fs-5 ${classes.name} mb-1`}>
          {props.firstName} {props.lastName}
        </p>
        <p>{props.diplome}</p>
      </div>
    </motion.div>
  );
};
export default Instructor;
