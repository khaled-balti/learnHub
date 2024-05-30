import React from "react";
import PopularCourse from "./PopularCourse";
const PopularCourses = ({courses , user}) => {
  const content = courses.map((course, index) => {
    console.log(course)
      return <PopularCourse
        studentsNumber={course.studentsNumber}
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
    <div className="container-fuid px-1 px-lg-5 py-3">
      <div className="row mx-auto">
        {content}
      </div>
    </div>
  );
};
export default PopularCourses;
