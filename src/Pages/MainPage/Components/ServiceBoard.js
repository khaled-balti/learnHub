import React, { useRef } from "react";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\font-awesome\\css\\font-awesome.min.css";
import ServiceItem from "./ServiceItem";
import { useAnimation, useInView } from "framer-motion";
import classes from "./ServiceItem.module.css"

const ServiceBoad = () => {
  const refService = useRef();
  const serviceIsInView = useInView(refService, { once: true });
  const controls = useAnimation();

  return (
      <div className={`container-fluid w-100 ms-auto me-auto`}>
        <div className={`container w-100 ${classes.service} py-1 py-sm-5`}>
          <div className="row gy-4">
            <ServiceItem
              type="fa-graduation-cap"
              title="Skilled Instructors"
              description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
              ref={refService}
              hiddenService={{ opacity: 0, y: 150 }}
              visibleService={{ opacity: 1, y: 0 }}
              variants={{
                hiddenService: { opacity: 0, y: 150 },
                visibleService: { opacity: 1, y: 0 },
              }}
              initial="hiddenService"
              animate={controls}
              serviceIsInView={serviceIsInView}
              transition={{
                y: { duration: 0.8, ease: "easeInOut" },
                opacity: { duration: 0.8, ease: "easeInOut" },
              }}
            />
            <ServiceItem
              type="fa-globe"
              title="Online Classes"
              description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
              ref={refService}
              hiddenService={{ opacity: 0, y: 150 }}
              visibleService={{ opacity: 1, y: 0 }}
              variants={{
                hiddenService: { opacity: 0, y: 150 },
                visibleService: { opacity: 1, y: 0 },
              }}
              initial="hiddenService"
              animate={controls}
              serviceIsInView={serviceIsInView}
              transition={{
                y: { duration: 0.8, ease: "easeInOut", delay: 0.4 },
                opacity: { duration: 0.8, ease: "easeInOut", delay: 0.4 },
              }}
            />
            <ServiceItem
              type="fa-home"
              title="Home Classes"
              description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
              ref={refService}
              hiddenService={{ opacity: 0, y: 150 }}
              visibleService={{ opacity: 1, y: 0 }}
              variants={{
                hiddenService: { opacity: 0, y: 150 },
                visibleService: { opacity: 1, y: 0 },
              }}
              initial="hiddenService"
              animate={controls}
              serviceIsInView={serviceIsInView}
              transition={{
                y: { duration: 0.8, ease: "easeInOut", delay: 0.8 },
                opacity: { duration: 0.8, ease: "easeInOut", delay: 0.8 },
              }}
            />
            <ServiceItem
              type="fa-book"
              title="Book Library"
              description="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
              ref={refService}
              hiddenService={{ opacity: 0, y: 150 }}
              visibleService={{ opacity: 1, y: 0 }}
              variants={{
                hiddenService: { opacity: 0, y: 150 },
                visibleService: { opacity: 1, y: 0 },
              }}
              initial="hiddenService"
              animate={controls}
              serviceIsInView={serviceIsInView}
              transition={{
                y: { duration: 0.8, ease: "easeInOut", delay: 1.2 },
                opacity: { duration: 0.8, ease: "easeInOut", delay: 1.2 },
              }}
            />
          </div>
        </div>
      </div>
    // </div>
  );
};

export default ServiceBoad;
