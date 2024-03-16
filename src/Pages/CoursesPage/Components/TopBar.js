import React, {Fragment, useState} from 'react'
import classes from './TopBar.module.css'
import Filter from './Filter'
const TopBar = () => {
  const [showFilter, setShowFilter] = useState(false)
  const showFilterHandler = (e) => {
    e.preventDefault()
    setShowFilter((previousState) => !previousState)
  }
  return (
    <Fragment>
    <div className={`container d-flex justify-content-between align-items-center mb-5`}>
        <div className={`d-flex justify-content-between flex-column align-items-center ${classes.cont2}`}>
            <button type='button' className={`btn ${classes.button}`} onClick={showFilterHandler}>Filter&nbsp;&nbsp;&nbsp;<i className='fa fa-bars'></i></button>
        </div>
        <div className={`d-flex justify-content-between align-items-center ${classes.cont}`}>
            <input type="search" className={classes.input} placeholder='search by course by name...' />&nbsp;&nbsp;&nbsp;<i className="fa fa-search"></i>
        </div>
    </div>
    {showFilter && <div className='container'>
        <Filter />
    </div>}
    </Fragment>
  )
}

export default TopBar