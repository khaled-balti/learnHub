import React, { useState } from "react";
import classes from "./Card.module.css";
const Card = ({
  price,
  formatter,
  monthsnbre,
  clicked,
  setClicked,
  setTotalPrice,
}) => {
  const feed = price / monthsnbre + 10;
  const clickHandler = (e) => {
    e.preventDefault();
    setClicked(monthsnbre);
    setTotalPrice(monthsnbre * feed);
  };
  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center ${classes.cont1}`}
      style={
        clicked && clicked === monthsnbre ? { border: "1px solid #06bbcc" } : {}
      }
      onClick={clickHandler}
    >
      <div
        style={{ width: "100%", height: "75%" }}
        className="d-flex flex-column justify-content-center align-items-center p-2"
      >
        <p className={`${classes.price} mb-1 mt-3`}>{formatter(feed)}</p>
        <p className={`text-black-50`}>per month</p>
      </div>
      <div
        style={
          clicked && clicked === monthsnbre
            ? { borderTop: "1px solid #06bbcc" }
            : {}
        }
        className={`d-flex justify-content-center align-items-center p-2 ${classes.cont2}`}
      >
        <p
          className="text-center pt-3 w-100"
          style={{ fontSize: "12px", fontWeight: "bold" }}
        >
          {monthsnbre}&nbsp;EMIs
        </p>
      </div>
    </div>
  );
};

export default Card;
