import React, { Fragment } from 'react'
import Form from './Components/Form'
import classes from './Auth.module.css'
import Navbar from '../../UI/Navbar/Navbar'
const Auth = () => {
  return (
    <Fragment>
      <Navbar />
      <div className={`${classes.auth} d-flex justify-content-center align-items-center`}>
        <Form />
      </div>
    </Fragment>
  )
}

export default Auth