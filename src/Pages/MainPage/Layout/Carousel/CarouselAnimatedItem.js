import React, { useRef, useEffect } from "react";
import classes from "./CarouselItem.module.css";
import Button from "../../../../UI/Button/Button";
import { motion, useInView, useAnimation } from "framer-motion";
const CarouselAnimatedItem = (props) => {
  const refSubtitle = useRef();
  const subtitleIsInView = useInView(refSubtitle, { once: true });
  const controls = useAnimation();
  useEffect(() => {
    if (subtitleIsInView) {
      controls.start("visibleSubtitle");
    }
  }, [subtitleIsInView]);
  const refTitle = useRef();
  const titleIsInView = useInView(refTitle, { once: true });
  useEffect(() => {
    if (titleIsInView) {
      controls.start("visibleTitle");
    }
  }, [titleIsInView]);
  const refBlueBtn = useRef();
  const blueBtnIsInView = useInView(refBlueBtn, { once: true });
  const refWhiteBtn = useRef();
  const whiteBtnIsInView = useInView(refWhiteBtn, { once: true });
  return (
    <div className={`carousel-caption ${classes.cont}`}>
      <motion.h4
        ref={refSubtitle}
        variants={{
          hiddenSubtitle: { y: -25 },
          visibleSubtitle: { y: 0 },
        }}
        initial="hiddenSubtitle"
        animate={controls}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={classes.title}
      >
        best online courses
      </motion.h4>
      <motion.h1
        ref={refTitle}
        variants={{
          hiddenTitle: { y: -150 },
          visibleTitle: { y: 0 },
        }}
        initial="hiddenTitle"
        animate={controls}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`${classes["big-title"]} fs-md-2`}
      >
        {props.title}
      </motion.h1>
      <p className={`${classes.description}`}>{props.description}</p>
      <div className="d-flex">
        <Button
          type="button"
          func="blue"
          link="/readmore"
          ref={refBlueBtn}
          hiddenBtn={{ x: -80 }}
          visibleBtn={{ x: 0 }}
          variants={{ hiddenBtn: { x: -80 }, visibleBtn: { x: 0 } }}
          initial="hiddenBtn"
          animate={controls}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          btnIsInView={blueBtnIsInView}
          controls={controls}
        >
          Read More
        </Button>
        <Button
          type="button"
          func="white"
          link="/auth"
          hiddenBtn={{ x: 80 }}
          visibleBtn={{ x: 0 }}
          variants={{ hiddenBtn: { x: 80 }, visibleBtn: { x: 0 } }}
          initial="hiddenBtn"
          animate={controls}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          btnIsInView={whiteBtnIsInView}
          controls={controls}
        >
          Join Now
        </Button>
      </div>
    </div>
  );
};
export default CarouselAnimatedItem;
