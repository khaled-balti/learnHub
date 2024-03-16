import React, { useEffect, useState, useRef } from 'react';
import classes from './Details.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCourse } from '../../store/actions/courseAction';
import Card from './Components/Card';
import PayCard from './Components/PayCard';
const Details = () => {
  // const componentRef = useRef();
  const [method, setMethod] = useState()
  const [clicked, setClicked] = useState(null)
  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  function formatCurrency (amount, currencyCode = 'USD') {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
    });
    return formatter.format(amount);
  }
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;
  
  useEffect(() => {
    dispatch(getCourse(id));
    // if (componentRef.ref) {
    //   const componentWidth = componentRef.current.offsetWidth;
    //   const characterWidth = 5; // Width of the character in pixels
    //   const repetitions = Math.ceil(componentWidth / characterWidth);
    //   const backgroundString = Array(repetitions).fill('-').join('');
    //   componentRef.current.style.background = `repeating-linear-gradient(to right, #000000 0, #000000 ${characterWidth}px, transparent 0, transparent ${characterWidth * 2}px)`;
    // }
  }, [dispatch, id]);
  const course = useSelector((state) => state.courseReducer.course);
  const [totalPrice, setTotalPrice] = useState(0)
  // Check if course is null or undefined
  if (!course) {
    return <div>Loading...</div>;
  }
  const createdDate = new Date(course.createdAt); // assuming course.createdAt is a valid Date object
  const formattedDate = formatDate(createdDate);
  const formattedPrice = formatCurrency(course.price);
  const plusPrice = totalPrice - course.price
  const clearClickedHandler = (e) => {
    setClicked(null)
    setTotalPrice(0)
  }
  
  return (
    <div className={`container-fluid ${classes.body} min-vh-100 d-flex justify-content-center align-items-center px-1 px-md-5 py-2`}>
      <div className={`container ${classes.cont} d-flex flex-column justify-content-between align-items-center`}>
        <div className={`container ${classes.menu}`}>
            <i className='fa fa-book'></i>&nbsp;&nbsp;&nbsp;<span>eLearning</span>
        </div>
        <div className={`container ${classes.cont2} d-flex flex-column justify-content-between align-items-center px-1 px-md-5 py-2 w-100`}>
            <h3 className={`${classes.purchaseTitle} mb-4 mt-3`}>Complete your purchase</h3>
            <div className={`${classes.cont3}`}>
              <div className={`row `}>
                <div className={`${classes.cont4} col-12 col-lg-8 me-5 d-flex flex-wrap flex-column justify-content-between align-items-center`}>
                  <div style={{height: '30%'}} className='w-100 d-flex flex-column flex-lg-row justify-content-between align-items-center mb-3'>
                    <div className='d-flex justify-content-between align-items-center p-3 me-2' style={{height: '100%'}}>
                      {course.image && <img src={require(`../../img/${course.image}`)} style={{width: '200px', height: '100%'}} alt={course.title} />}
                    </div>
                    <div className='d-flex flex-column justify-content-between align-items-start' style={{width: '100%'}} >
                      <p className={`${classes.title}`}>{course.title}</p>
                      <ul>
                        <li><p className={`${classes.infos}`}>{`Instructor: ${course.creator.firstName} ${course.creator.lastName}`}</p></li>
                        <li><p className={`${classes.infos}`}>{`Published At: ${formattedDate}`}</p></li>
                      </ul>
                    </div>
                  </div>
                  <div style={{height: '30%'}} className='w-100 d-flex flex-column mb-5'>
                    <div className='row'>
                      <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-between'>
                        <span className={`${classes.icon} me-3 d-flex justify-content-center align-items-center p-1`}><i className='fa fa-check'></i></span>
                        <p className={`${classes.ticks}`}>LifeTime Access To Course Material</p>
                      </div>
                      <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-between'>
                        <span className={`${classes.icon} me-3 d-flex justify-content-center align-items-center p-1`}><i className='fa fa-check'></i></span>
                        <p className={`${classes.ticks}`}>Mentorship And Internship Assistance</p>
                      </div>
                      <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-between'>
                        <span className={`${classes.icon} me-3 d-flex justify-content-center align-items-center p-1`}><i className='fa fa-check'></i></span>
                        <p className={`${classes.ticks}`}>Certification From Elearning Plateform</p>
                      </div>
                    </div>
                    <div className='row mt-3'>
                      <div className='col-12 col-lg-8'>
                        <div className='w-100 d-flex justify-content-between align-items-center mb-4 mb-lg-0'>
                          <input type='text' name='code' placeholder='Have a discount code?' style={{width: '90%', height: '50px'}} className='ps-3' />
                          <button type='submit' className={`${classes.button}`} style={{width: '10%', height: '50px'}}><i className='fa fa-arrow-up'></i></button>
                        </div>
                      </div>
                      <div className='col-12 col-lg-3'>
                        {course.discount === 0 ? <div className={`${classes.price} d-flex justify-content-center align-items-center fs-5 fw-bold`}>{formattedPrice}</div> : 
                        <div className={`d-flex justify-content-center align-items-center ${classes.price} px-3`}>
                          <div className={`d-flex justify-content-center align-items-center fs-5 fw-bold text-black-50 me-3`} style={{textDecorationLine: 'line-through'}} >{formattedPrice}</div>
                          <div className={`${classes.price} d-flex justify-content-center align-items-center fs-5 fw-bold`}>{formatCurrency(course.price - course.price * course.discount / 100)}</div>
                        </div>}
                      </div>
                    </div>
                  </div>
                  <div className={classes.line}></div>
                  <div style={{height: '35%'}} className='w-100 d-flex flex-column align-items-center align-items-lg-start mt-5 mb-5'>
                    <div className='d-flex justify-content-between w-75 ms-4 mb-4'>
                      <div className='d-flex'>
                        <h4 className='me-2'>Pay With Monthly Fees</h4> <span className={`${classes.infoIcon} d-flex justify-content-center align-items-center`}><i className="fa fa-info-circle"></i></span>
                      </div>
                      <div className={`${classes.deselect} p-2`} onClick={clearClickedHandler}>X</div>
                    </div>
                    <div className='container-fluid'>
                      <div className='row m-auto'>
                        <div className='col-12 col-sm-6 col-md-4 col-xl-2 me-xl-3 mb-2 mb-xl-0 d-flex justify-content-center align-items-center'>
                          <Card formatter={formatCurrency} price={course.price} totalPrice={totalPrice} setTotalPrice={setTotalPrice} clicked={clicked} setClicked={setClicked} monthsnbre={2} />
                        </div>
                        <div2 className='col-12 col-sm-6 col-md-4 col-xl-2 me-xl-3 mb-2 mb-xl-0 d-flex justify-content-center align-items-center'>
                          <Card formatter={formatCurrency} price={course.price} totalPrice={totalPrice} setTotalPrice={setTotalPrice} clicked={clicked} setClicked={setClicked} monthsnbre={3} />
                        </div2>
                        <div className='col-12 col-sm-6 col-md-4 col-xl-2 me-xl-3 mb-2 mb-xl-0 d-flex justify-content-center align-items-center'>
                          <Card formatter={formatCurrency} price={course.price} setTotalPrice={setTotalPrice} totalPrice={totalPrice} clicked={clicked} setClicked={setClicked} monthsnbre={4} />
                        </div>
                        <div className='col-12 col-sm-6 col-md-4 col-xl-2 me-xl-3 mb-2 mb-xl-0 d-flex justify-content-center align-items-center'>
                          <Card formatter={formatCurrency} price={course.price} setTotalPrice={setTotalPrice} totalPrice={totalPrice} clicked={clicked} setClicked={setClicked} monthsnbre={5} />
                        </div>
                        <div className='col-12 col-sm-6 col-md-4 col-xl-2 me-xl-3 d-flex mb-2 mb-xl-0 justify-content-center align-items-center'>
                          <Card formatter={formatCurrency} price={course.price} setTotalPrice={setTotalPrice} totalPrice={totalPrice} clicked={clicked} setClicked={setClicked} monthsnbre={6} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{height: '40px'}} className='w-100 d-flex justfy-content-center align-items-center mb-3'>
                    <p className={`${classes.note} mx-auto text-center mb-0`}>{clicked && <i className='fa fa-info-circle'></i>} {clicked && `You agree to pay ${formatCurrency(plusPrice)} more than the actual price.`}</p>
                  </div>
                </div>
                <div className={`${classes.cont4} col-12 col-lg-3`}>
                  <div className='container-fluid w-100'>
                    <h5 className='mt-4 mb-3'>Billing Summary</h5>
                    <div className='d-flex flex-column w-100'>
                      <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div>Price</div>
                        {clicked && <div>{formatCurrency(totalPrice/clicked)} * {clicked}</div>}
                        {!clicked && <div>{formatCurrency(course.price)}</div>}
                      </div>
                      <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div>Discount</div>
                        <div>-%{course.discount}</div>
                      </div>
                      <div className={classes.line}></div>
                      <div className='d-flex justify-content-between align-items-center mb-3 mt-3'>
                        <div>Total Amount</div>
                        {clicked && <div>{formatCurrency(totalPrice - totalPrice * course.discount / 100)}</div>}
                        {!clicked && <div>{formatCurrency(course.price - course.price * course.discount / 100)}</div>}
                      </div>
                    </div>
                  </div>
                  <div className='container-fluid w-100'>
                    <h5 className='mt-4 mb-3'>Select a Paiment Mode</h5>
                    <div className='row g-2 mx-auto mb-4'>
                      <PayCard id={1} method={method} setMethod={setMethod} >Debit Card</PayCard>
                      <PayCard id={2} method={method} setMethod={setMethod} >Credit Card</PayCard>
                      <PayCard id={3} method={method} setMethod={setMethod} >Net Banking</PayCard>
                      <PayCard id={4} method={method} setMethod={setMethod} >Wallet</PayCard>
                      <PayCard id={5} method={method} setMethod={setMethod} >Master Card</PayCard>
                    </div>
                    {clicked && <button className={`${classes.paybutton} mb-4 w-100 d-flex justify-content-center align-items-center`} type='button'>Pay {formatCurrency(totalPrice/clicked)}</button>}
                    {!clicked && <button className={`${classes.paybutton} mb-4 w-100 d-flex justify-content-center align-items-center`} type='button'>Pay {formatCurrency(course.price)}</button>}
                    <p className='text-center text-black-50'><i className='fa fa-lock'></i>&nbsp;&nbsp;&nbsp;Secure Checkout</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
