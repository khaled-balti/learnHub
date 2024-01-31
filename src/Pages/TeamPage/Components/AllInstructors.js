import React, { Fragment } from "react";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\font-awesome\\css\\font-awesome.min.css";
import Instructor from "../../AboutPage/Components/Instructor";
import Title from "../../../UI/Title/Title";
const AllInstructors = (props) => {
  const content = props.team.map((inst,index) => (
    <div className="col-12 col-md-6 col-lg-3">
      <Instructor
        image={inst.image}
        firstName={inst.firstName}
        lastName={inst.lastName}
        diplome={inst.diplome}
        delay={index * 0.2 + 0.4}
      />
    </div>
  ));
  return (
    <div className="container-fluid mt-5">
      <Title h5="Instructors" h1="Expert Instructors" />
      <div className="row">{content}</div>
    </div>
  );
};
export default AllInstructors
