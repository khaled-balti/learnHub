import React from "react";
import PopularCourse from "./PopularCourse";
const PopularCourses = ({courses , user}) => {
  const content = courses.map((course, index) => {
      return <PopularCourse
        image={course.image}
        price={course.price}
        creator={course.creator}
        rate={course.rate}
        title={course.title}
        delay={0.4 * (index + 1)}
        id={course._id}
        user={user}
        column="col-md-6 col-xl-4"
        key={index}
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
