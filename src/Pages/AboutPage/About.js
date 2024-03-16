import React , {Fragment, useEffect} from "react";
import Header from "../../UI/Header/Header";
import Section from "./Components/Section";
import ServiceBoad from "../MainPage/Components/ServiceBoard";
import Instructors from "./Components/Instructors";
import { getPopularInstructors } from '../../store/actions/instructorsActions';
import { useDispatch, useSelector } from "react-redux";
import HomePic1 from "../../img/carousel-1.jpg"
const About = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPopularInstructors())
  }, [dispatch])
  const popularInstructors = useSelector((state) => state.instructorReducer.popularInstructors)
  return (
    <Fragment>
      <Header text="About Us" pic={HomePic1}/>
      <ServiceBoad />
      <Section />
      <Instructors inst={popularInstructors}/>
    </Fragment>
  );
};
export default About;
