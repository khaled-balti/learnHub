import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PopularCourse from "../Components/PopularCourse";
import TopBar from "../Components/TopBar";
import { getCourses } from "../../../store/actions/courseAction";
const Courses = ({user}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCourses())
  } , [dispatch])
  const courses = useSelector((state) => state.courseReducer.courses);
  const graphicCourses = courses.filter(
    (course) => course.theme === "UI-UX design"
  );
  let content = graphicCourses.map((course, index) => (
      <PopularCourse
        image={course.image}
        price={course.price}
        creator={course.creator}
        rate={course.rate}
        title={course.title}
        delay={0.4 * (index + 1)}
        user={user}
        id={course._id}
      />
  ));
  return (
    <div className="container-fluid px-5">
      <TopBar/>
      <div className="row">{content}</div>
    </div>
  );
};

export default Courses;
