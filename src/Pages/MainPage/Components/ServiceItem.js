import React, { forwardRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import classes from "./ServiceItem.module.css";

const ServiceItem = forwardRef(({ type, title, description, serviceIsInView, animate, visibleService, variants, initial, transition }, ref) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (serviceIsInView) {
      animate.start(visibleService);
    }
  }, [serviceIsInView, animate, visibleService]);

  return (
    <motion.div
      ref={ref}
      className={`col-lg-3 col-sm-6 col-12 text-center`}
      style={{backgroundColor: 'white', height: '100%'}}
      variants={variants}
      initial={initial}
      animate={animate}
      transition={transition}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div className="p-3 d-flex flex-column justify-content-center align-items-center" style={{backgroundColor: '#F0FBFC'}} whileHover={{ backgroundColor: "#06bbcc", color: "white" }}>
        <motion.i
          className={`fa fa-3x ${type} mb-4 ${!isHovered ? classes.blue : "text-white"}`}
        />
        <h5 className="mb-3">{title}</h5>
        <p className="w-75">{description}</p>
      </motion.div>
    </motion.div>
  );
});

export default ServiceItem;
