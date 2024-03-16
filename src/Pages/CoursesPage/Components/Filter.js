import React from 'react'
import classes from './Filter.module.css'
const Filter = () => {
  return (
    <div className="accordion mb-5 w-25" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                Price
            </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
                <div className="accordion-body d-flex justify-content-around align-items-center">
                    <div>  
                        <label for="lowerprice" className='me-3'>from</label>
                        <input type='number' min={0} style={{width: '50px'}} step={0.01} defaultValue={0} id="lowerprice" />
                    </div>
                    <div>
                        <label for="heighprice" className='me-3'>to</label>
                        <input type='number' min={0} style={{width: '50px'}} step={0.01} defaultValue={0} id="heighprice" />
                    </div>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                Rate
            </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                <div className="accordion-body d-flex justify-content-around align-items-center">
                    <div>  
                        <label for="lowerrate" className='me-3'>from</label>
                        <input type='number' style={{width: '50px'}} min={0} max={5} step={0.5} defaultValue={0} id="lowerrate" />
                    </div>
                    <div>
                        <label for="heighrate" className='me-3'>to</label>
                        <input type='number' style={{width: '50px'}} min={0} max={5} step={0.5} defaultValue={0} id="heighrate" />
                    </div>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                Hours number
            </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                <div className="accordion-body d-flex justify-content-around align-items-center">
                    <div>  
                        <label for="lowerhour" className='me-3'>from</label>
                        <input type='number' style={{width: '50px'}} min={0} step={0.01} defaultValue={0} id="lowerhour" />
                    </div>
                    <div>
                        <label for="heighhour" className='me-3'>to</label>
                        <input type='number' style={{width: '50px'}} min={0} step={0.01} defaultValue={0} id="heighhour" />
                    </div>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <button className={`${classes.button} w-100 fs-5 btn`} type="button">
                Filter
            </button>
        </div>
    </div>
  )
}

export default Filter