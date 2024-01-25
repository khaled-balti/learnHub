import React, { forwardRef, useEffect, useState} from "react";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js";
import { motion } from "framer-motion";
import classes from "./ServiceItem.module.css";
const ServiceItem = forwardRef((props, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const serviceIsInView = props.serviceIsInView;
  const controls = props.animate;
  const visibleService = props.visibleService;
  useEffect(() => {
    if (serviceIsInView) {
      controls.start(visibleService);
    }
  }, [serviceIsInView]);
  return (
    <motion.div
      ref={ref}
      onHoverStart={() => {
            setIsHovered(true)
      }}
      onHoverEnd={() => {
            setIsHovered(false)
        }
      }
      whileHover={{backgroundColor: "#06bbcc" , color: 'white'}}
      className={`${classes.item} col-lg-3 col-sm-6 me-4`}
      variants={props.variants}
      initial={props.initial}
      animate={props.animate}
      transition={props.transition}
    >
      <div className={`text-center pt-3`}>
        <div className="p-4">
          <motion.i
            className={`fa fa-3x ${props.type} mb-4 ${!isHovered ? classes.blue : 'text-white'}`}
          ></motion.i>
          <h5 className="mb-3">{props.title}</h5>
          <p>{props.description}</p>
        </div>
      </div>
    </motion.div>
  );
});
export default ServiceItem;
