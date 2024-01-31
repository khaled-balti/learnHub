import React, { Fragment } from "react"
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\font-awesome\\css\\font-awesome.min.css";
import { json, useLoaderData } from "react-router"
import AllInstructors from "./Components/AllInstructors";
import Header from "../../UI/Header/Header";
const Team = (props) => {
    const data = useLoaderData()
    return (
        <Fragment>
            <Header text="Instructors"/>
            <AllInstructors team={data} />
        </Fragment>
    )
}
export default Team
export async function loadedAllInstructors() {
    const response = await fetch("https://elearning-react-9cbb7-default-rtdb.firebaseio.com/instuctors.json")
    if (!response.ok) {
        throw json({ message: "could not fetch fetch insructors" });
    }
    else {
        const data = await response.json();
        const instructors = [];
        for (const [key, value] of Object.entries(data)) {
            instructors.push(value);
        }
        return instructors;
    }
}