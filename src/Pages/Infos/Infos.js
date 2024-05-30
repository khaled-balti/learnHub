import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCourse } from '../../store/actions/courseAction'
import { useParams } from 'react-router'
import classes from './Infos.module.css'
import ReactPlayer from 'react-player'
const Infos = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const [marginTop, setMarginTop] = useState(window.innerWidth <= 776 ? '150px' : '100px');
  const handleResize = () => {
    setMarginTop(window.innerWidth <= 776 ? '150px' : '100px');
  };
  useEffect(() => {
    dispatch(getCourse(id))
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch])
  const course = useSelector((state) => state.courseReducer.course)
  const [videoDuration, setVideoDuration] = useState(0);

  const handleVideoDuration = (duration) => {
    setVideoDuration(prev =>prev + duration);
  };
  if (!course) {
    return <div>Loading...</div>
  }
  function formatCurrency (amount, currencyCode = 'USD') {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
    });
    return formatter.format(amount);
  }
  function formatDate(dateString, locale = 'en-US', options = {}) {
    const date = new Date(dateString);
    const defaultOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const dateFormatOptions = { ...defaultOptions, ...options };
    return new Intl.DateTimeFormat(locale, dateFormatOptions).format(date);
  }
  function formatDuration(time) {
    const hours = parseInt(time / 3600)
    time = parseInt(time % 3600)
    const minutes = parseInt(time / 60)
    const seconds = parseInt(time % 60)
    return `${hours}h${minutes}min${seconds}s`
  }

  return (
    <Fragment>
        <div className='container-fluid px-0' style={{position: 'relative', marginTop: '70px'}}>
          <img src={course?.image} className={`${classes.image} img-fluid w-100`} style={{maxHeight: '70vh'}} />
          {course && course.videos.map(video => <div hidden ><ReactPlayer onDuration={handleVideoDuration} url={`http://localhost:5006/${video.file}`}   /></div>)}
          <div className={`container py-2 bg-light`} style={{borderRadius: '15px', minHeight: '100px', boxShadow: '0 0 4px 0 #bbb', position: 'absolute',left: '50%', transform: 'translate(-50%,-50%)'}}>
            <div className='container' style={{height: '90%'}}>
              <div className='row' style={{height: '100%'}}>
                <div className={`col-md-2 col-4 d-flex flex-column justify-content-center align-items-center mb-4 mb-md-0`} style={{borderRight: '1px solid gray'}}>
                  <p>Created By</p>
                  <h5>{course.creator.firstName}</h5>
                </div>
                <div className={`col-md-2 col-4 d-flex flex-column justify-content-center align-items-center mb-4 mb-md-0`} style={{borderRight: '1px solid gray'}}>
                  <p>Students</p>
                  <h5>{course.studentsNumber}</h5>
                </div>
                <div className={`col-md-2 col-4 d-flex flex-column justify-content-center align-items-center mb-4 mb-md-0`} style={{borderRight: '1px solid gray'}}>
                  <p>Price</p>
                  <h5>{formatCurrency(course.price)}</h5>
                </div>
                <div className={`col-md-2 col-4 d-flex flex-column justify-content-center align-items-center mb-4 mb-md-0`} style={{borderRight: '1px solid gray'}}>
                  <p>Rate</p>
                  <h5>{course.rate}</h5>
                </div>
                <div className={`col-md-2 col-4 d-flex flex-column justify-content-center align-items-center mb-4 mb-md-0`} style={{borderRight: '1px solid gray'}}>
                  <p>Duration</p>
                  <h5>{formatDuration(videoDuration)}</h5>
                </div>
                <div className={`col-md-2 col-4 d-flex flex-column justify-content-center align-items-center mb-4 mb-md-0`}>
                  <p>Created At</p>
                  <h5>{formatDate(course.createdAt)}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className='mx-4 container' style={{ marginTop: marginTop }}>
            <h1 className='mb-5'>{course.title}</h1>
            <p className='fs-5'>{course.description}</p>
          </div>
        </div>
    </Fragment>
  )
}

export default Infos