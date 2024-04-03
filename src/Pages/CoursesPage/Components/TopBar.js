import React, {Fragment, useState} from 'react'
import classes from './TopBar.module.css'
import Filter from './Filter'
const TopBar = () => {
  return (
    <div>
      <div className={`container d-flex justify-content-center align-items-center ${classes.cont} mb-3`}>
        <input type="search" className={classes.input} placeholder='search by course by name...' />&nbsp;&nbsp;&nbsp;<i className="fa fa-search"></i>
      </div>
      <div className={`container `}>
          <Filter />
      </div>
    </div>
  )
}

export default TopBar