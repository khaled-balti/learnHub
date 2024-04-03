import React from 'react'
import classes from './Filter.module.css'
const Filter = () => {
  return (
    <div className="container-fluid">
        <div className='row gx-5 gy-2'>
            <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-between align-items-center px-lg-5' style={{height: '70px', border: '1px solid #06bbcc'}}>
                <div>Price</div>
                <div className='d-flex justify-content-between align-items-center w-75'>
                    <div className='d-flex me-3'>
                        <label htmlFor='lowprice'>from</label>&nbsp;&nbsp;&nbsp;
                        <input className={classes.input} type='number' id='lowprice'/>
                    </div>
                    <div className='d-flex'>
                        <label htmlFor='heighprice'>to</label>&nbsp;&nbsp;&nbsp;
                        <input className={classes.input} type='number' id='heightprice' />
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-between align-items-center px-lg-5' style={{height: '70px', border: '1px solid #06bbcc'}}>
                <div>Rate</div>
                <div className='d-flex justify-content-between align-items-center w-75'>
                    <div className='d-flex me-3'>
                        <label htmlFor='lowprice'>from</label>&nbsp;&nbsp;&nbsp;
                        <input className={classes.input} type='number' id='lowprice' defaultValue={0} min={0} max={5} step={0.1} />
                    </div>
                    <div className='d-flex'>
                        <label htmlFor='heighprice'>to</label>&nbsp;&nbsp;&nbsp;
                        <input className={classes.input} type='number' id='heightprice' defaultValue={0} min={0} max={5} step={0.1} />
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-between align-items-center px-lg-5' style={{height: '70px', border: '1px solid #06bbcc'}}>
                <div>Duration</div>
                <div className='d-flex justify-content-between align-items-center w-75'>
                    <div className='d-flex me-3'>
                        <label htmlFor='lowprice'>from</label>&nbsp;&nbsp;&nbsp;
                        <input className={classes.input} type='number' id='lowprice' />
                    </div>
                    <div className='d-flex'>
                        <label htmlFor='heighprice'>to</label>&nbsp;&nbsp;&nbsp;
                        <input className={classes.input} type='number' id='heightprice' />
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Filter