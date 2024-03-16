import React,{Fragment} from 'react'
import classes from './PasswordInput.module.css'
const PasswordInput = (props) => {
  return (
    <Fragment>
        <input type={props.isVisible ? "text" : "password"} className={classes.text} name={props.name} placeholder={props.placeholder} required onChange={props.onChange} />
    </Fragment>
  )
}

export default PasswordInput