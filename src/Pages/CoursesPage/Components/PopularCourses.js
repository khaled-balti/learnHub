import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\font-awesome\\css\\font-awesome.min.css";
import React from "react";
import PopularCourse from "./PopularCourse";
const PopularCourses = (props) => {
//   console.log(props.courses)
  const content = props.courses.map((course, index) => {
      return <PopularCourse
        image={course.image}
        price={course.price}
        professor={course.professor}
        rate={course.rate}
        title={course.title}
        delay={0.4 * (index + 1)}
      />
  });
  return (
    <div className="container-fuid px-5 p-3">
      <div className="row mx-auto">
        {content}
      </div>
    </div>
  );
};
export default PopularCourses;
