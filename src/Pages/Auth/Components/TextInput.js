import React, { Fragment } from 'react'
import classes from './TextInput.module.css'
const TextInput = (props) => {
  return (
    <Fragment>
        <input type={props.type} className={classes.text} name={props.name} placeholder={props.placeholder} required onChange={props.onChange} />
    </Fragment>
  )
}

export default TextInput