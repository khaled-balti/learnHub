import React from "react";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js";
import Carousel1 from "../../../../img/carousel-1.jpg";
import Carousel2 from "../../../../img/carousel-2.jpg";
import CarouselItem from "./CarouselItem";
import CarouselAnimatedItem from "./CarouselAnimatedItem";
import classes from "./Carousel.module.css";
const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className={`carousel slide ${classes.cont} w-100 p-0`}
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active bg-dark" data-bs-interval="5000">
          <img src={Carousel1} style={{opacity: 0.2 , width: '100%'}} className={`d-md-flex justify-content-md-between align-items-md-center image-fluid ${classes.item}`} alt="..." />
          <CarouselAnimatedItem
            title="The Best Online Learning Platform"
            description="Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr."
          />
        </div>
        <div className="carousel-item bg-dark" data-bs-interval="5000">
          <img src={Carousel2} style={{opacity: 0.2 , width: '100%'}} className={`d-md-flex justify-content-md-between align-items-md-center image-fluid ${classes.item}`} alt="..." />
          <CarouselItem
            title="Get Educated Online From Your Home"
            description="Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className={`carousel-control-prev-icon ${classes["button-pers"]}`}
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className={`carousel-control-next-icon ${classes["button-pers"]}`}
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Carousel;
