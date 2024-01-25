import React, { Fragment } from "react"
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\font-awesome\\css\\font-awesome.min.css";
import Header from "../../UI/Header/Header";
import Section from "./Components/Section";
import ServiceBoad from "../MainPage/Components/ServiceBoard";
const About = () => {
    return (
        <div>
            <Header />
            <ServiceBoad />
            <Section />
        </div>
    )
}
export default About