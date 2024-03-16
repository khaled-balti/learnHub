import React, { useState, useEffect } from 'react'
import TextInput from './TextInput'
import PasswordInput from './PasswordInput'
import classes from './Form.module.css'
import { GoogleLogin } from "react-google-login";
import { addUserAction, fetchUserAction, authenticate } from '../../../store/actions/authActions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import {gapi} from 'gapi-script'
const Form = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: "1030127631275-7k249fbnkc9dmgsgjc64f9miepvh1nds.apps.googleusercontent.com",
        scope: 'email',
      });
    }
    gapi.load('client:auth2', start);
  }, []);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)
  const changeModeHandler = (e) => {
    e.preventDefault()
    setIsLoggedIn((previousState) => !previousState)
    setIsVisible(false)
    setIsVisible2(false)
  }
  const changeVisibleHandler = (e) => {
    e.preventDefault()
    setIsVisible((previousState) => !previousState)
  }
  const changeVisibleHandler2 = (e) => {
    e.preventDefault()
    setIsVisible2((previousState) => !previousState)
  }
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    study: '',
    university: '',
    password: '',
    confirmPassword: ''
  }
  const [formData , setFormData] = useState(initialValues)
  const changeValuesHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const submitHandler = async(e) => {
    e.preventDefault()
    if (!isLoggedIn) {
      dispatch(addUserAction(formData, navigate))
    }
    else {
      dispatch(fetchUserAction(formData, navigate))
    }
    setFormData(initialValues)
  }
  const googleSuccessHandler = (res) => {
    console.log(res)
    const result = res?.profileObj       //don't throw error if the object doesn't exist
    const token = res?.tokenId
    dispatch(authenticate(result, token))
    navigate('/')
  }
  const googleFailureHandler = (err) => {
    console.log(err)
  }
  return (
    <form className={`${classes.form} d-flex flex-column justify-content-between align-items-center p-4`} style={isLoggedIn ? {height: '450px'} : {height: '600px'}} onSubmit={submitHandler} >
        <h3 className='mb-4'>{isLoggedIn ? 'Login' : 'SignUp'}</h3>
        {!isLoggedIn && <div className='row'>
          <div className='col-12 col-md-6'>
            <TextInput placeholder="First Name" type="text" onChange={changeValuesHandler} name="firstName" />
          </div>
          <div className='col-12 col-md-6'>
            <TextInput placeholder="Last Name" type="text" name="lastName" onChange={changeValuesHandler}/>
          </div>
        </div>}
        <TextInput placeholder="Email" name="email" type="email" onChange={changeValuesHandler} />
        {!isLoggedIn && <div className='row'>
          <div className='col-12 col-md-6'>
            <TextInput placeholder="Study Level" type="text" name="study" onChange={changeValuesHandler} />
          </div>
          <div className='col-12 col-md-6'>
            <TextInput placeholder="University" type="text" name="university" onChange={changeValuesHandler}/>
          </div>
        </div>}
        <div className='d-flex justify-content-between align-items-center w-100 pe-2'>
          <PasswordInput placeholder={isLoggedIn ? "Password" : "Create Password"} name="password" isVisible={isVisible} onChange={changeValuesHandler} />
          {isVisible && <i className='fa fa-eye' onClick={changeVisibleHandler}></i>}
          {!isVisible && <i className='fa fa-eye-slash' onClick={changeVisibleHandler}></i>}
        </div>
        {!isLoggedIn && 
        <div className='d-flex justify-content-between align-items-center w-100 pe-2'>
          <PasswordInput placeholder="Confirm Password" name="confirmPassword" isVisible={isVisible2} onChange={changeValuesHandler} />
          {isVisible2 && <i className='fa fa-eye' onClick={changeVisibleHandler2}></i>}
          {!isVisible2 && <i className='fa fa-eye-slash' onClick={changeVisibleHandler2}></i>}
        </div>}
        {isLoggedIn && <p style={{color: 'rgb(42, 142, 249)', cursor: 'pointer'}}>Forgot Password?</p>}
        <button type='submit' className={`btn ${classes.button}`}>{isLoggedIn ? 'Login' : 'SignUp'}</button>
        <p>{isLoggedIn ? 'Don\'t have an account?' : 'Already have an account?'} <span style={{color: 'rgb(42, 142, 249)', cursor: 'pointer'}} onClick={changeModeHandler}>{isLoggedIn ? 'Signup' : 'Login'}</span></p>
        <p className={classes.switchLogin}>____________________________Or____________________________</p>
        <GoogleLogin
            clientId="1030127631275-7k249fbnkc9dmgsgjc64f9miepvh1nds.apps.googleusercontent.com"
            render={(renderProps) => (
              <div className={`${classes.withGoogle}`} 
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <i className={`fa fa-google ${classes.colored}`}></i>
                &nbsp;&nbsp;&nbsp;&nbsp; <span className={classes.paragraph}>Login with Google</span>
              </div>
            )}
            onSuccess={googleSuccessHandler}
            onFailure={googleFailureHandler}
            cookiePolicy="single_host_origin"
          />
    </form>
  )
}

export default Form