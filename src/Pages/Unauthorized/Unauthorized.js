import React from 'react'
import classes from  './Unauthorized.module.css'
import { Link } from 'react-router-dom'
const Unauthorized = () => {
  return (
    <div className={`container-fluid d-flex justify-content-center align-items-center ${classes.body}`}>
        <div className={`d-flex flex-column justify-content-center align-items-center`}>
            <h1 className={`fw-bold text-white py-0 my-0 ${classes.status}`}>401</h1>
            <h2 className={`fw-bold text-white py-0 mb-3 ${classes.notfound}`}>Unauthorized Link</h2>
            <p className="text-white fs-5 mb-4 text-center w-75">It seems that that the link you want to access is unauthorized for security purpose</p>
            <Link to="/" className={`text-decoration-none bg-light text-black d-flex justify-content-center align-items-center ${classes.link}`}>Back To Home</Link>
        </div>
    </div>
  )
}

export default Unauthorized