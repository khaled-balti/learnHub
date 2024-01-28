import React , {Fragment, Suspense} from "react";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\font-awesome\\css\\font-awesome.min.css";
import Header from "../../UI/Header/Header";
import Section from "./Components/Section";
import ServiceBoad from "../MainPage/Components/ServiceBoard";
import { Await, defer, json, useLoaderData } from "react-router-dom";
import Instructors from "./Components/Instructors";
import Spinner from "../../UI/Spinner/Spinner"
const About = () => {
  const datas = useLoaderData()
  const data = datas.instructors
  return (
    <Fragment>
      <Header />
      <ServiceBoad />
      <Section />
      <Suspense fallback={<Spinner/>}>
        <Await resolve={data}>
          {(loadedInstructors) => <Instructors inst={loadedInstructors}/>}
        </Await>
      </Suspense>
    </Fragment>
  );
};
export default About;
export async function loadInstructorsHandler() {
  const response = await fetch(
    "https://elearning-react-9cbb7-default-rtdb.firebaseio.com/instuctors.json"
  );
  if (!response.ok) {
    throw json({ message: "could not fetch fetch insructors" });
  } else {
    const data = await response.json();
    const popularInstructors = [];
    for (const [key, value] of Object.entries(data)) {
      popularInstructors.push(value);
    }
    const inst = popularInstructors.filter(
      (instruction) => instruction.popularity === "popular"
    );
    return inst;
  }
}
export function instructorsLoader() {
  return defer({
    instructors: loadInstructorsHandler(),
  })
}
