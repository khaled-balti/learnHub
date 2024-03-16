import React, { Fragment } from "react"
import Header from "../../UI/Header/Header"
import Panel from "./Components/Panel"
import HomePic1 from "../../img/carousel-1.jpg"
const Contact = () => {
    return (
        <Fragment>
            <Header text="Contact Us" pic={HomePic1} />
            <Panel />
        </Fragment>
    )
}
export default Contact