import React from "react";
import classes from "./CarouselItem.module.css";
import Button from "../../../../UI/Button/Button";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js";
const CarouselItem = (props) => {
  return (
    <div className={`carousel-caption ${classes.cont}`}>
      <h4 className={classes.title}>best online courses</h4>
      <h1 className={`${classes["big-title"]} fs-sm-2`}>{props.title}</h1>
      <p className={`${classes.description}`}>{props.description}</p>
      <div className="d-flex">
        <Button type="button" func="blue">
          Read More
        </Button>
        <Button type="button" func="white">
          Join Now
        </Button>
      </div>
    </div>
  );
};
export default CarouselItem;
