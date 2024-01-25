import React, { Fragment } from "react"
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\bootstrap\\dist\\js\\bootstrap.min.js";
import "C:\\Users\\User\\applications_Udemy\\elearning-site\\node_modules\\font-awesome\\css\\font-awesome.min.css";
import Navbar from "../../UI/Navbar/Navbar";
import Footer from "../../UI/Footer/Footer";
import { Outlet } from "react-router";
const RootLayout = () => {
    return (
        <Fragment>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </Fragment>
    )
}
export default RootLayout