import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlays = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const { onClose } = props;
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, document.getElementById("overlays"))}
      {ReactDOM.createPortal(
        <ModalOverlays>{props.children}</ModalOverlays>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};

export default Modal;
