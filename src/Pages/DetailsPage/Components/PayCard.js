import React from 'react'
import classes from './PayCard.module.css'
const PayCard = ({id,children, setMethod, method}) => {
    const switchMedhod = (e) => {
        setMethod(id)
    }
  return (
    <div className={`col-12 d-flex justify-content-center align-items-center ${classes.pcard} ${method === id ? classes.clicked : ""} `} onClick={switchMedhod}>
        {children}
    </div>
  )
}

export default PayCard