import React from "react";
import classes from "./CarouselItem.module.css";
import Button from "../../../../UI/Button/Button";
import { Link } from "react-router-dom";
const CarouselItem = (props) => {
  return (
    <div className={`carousel-caption ${classes.cont}`}>
      <h4 className={classes.title}>best online courses</h4>
      <h1 className={`${classes["big-title"]}`}>{props.title}</h1>
      <p className={`${classes.description}`}>{props.description}</p>
      <div className="d-flex">
        <Button type="button" func="blue" link="/readmore">
          Read More
        </Button>
        <Button type="button" func="white" link="/auth">
          Join Now
        </Button>
      </div>
    </div>
  );
};
export default CarouselItem;
