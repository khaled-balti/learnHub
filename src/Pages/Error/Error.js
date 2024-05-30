import React from "react"
import { Link } from "react-router-dom"
import classes from './Error.module.css'
const Error = () => {
    return (
        <div className={`container-fluid d-flex justify-content-center align-items-center ${classes.body}`}>
            <div className={`d-flex flex-column justify-content-center align-items-center`}>
                <h1 className={`fw-bold text-white py-0 my-0 ${classes.status}`}>404</h1>
                <h2 className={`fw-bold text-white py-0 mb-3 ${classes.notfound}`}>Page Not Found</h2>
                <p className="text-white fs-5 mb-4">It seems that page you are looking for does not exist</p>
                <Link to="/" className={`text-decoration-none bg-light text-black d-flex justify-content-center align-items-center ${classes.link}`}>Back To Home</Link>
            </div>
        </div>
    )
}
export default Error