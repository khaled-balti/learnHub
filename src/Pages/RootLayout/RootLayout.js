import React, { Fragment } from "react"
import { Outlet } from "react-router"
import Header from "../../UI/Header/Header"
import Navbar from "../../UI/Navbar/Navbar"
import Footer from "../../UI/Footer/Footer"
const RootLayout = (props) => {
    return (
        <Fragment>
            <Navbar />
            <main>
                <Outlet/>
            </main>
            <Footer />
        </Fragment>
    )
} 
export default RootLayout