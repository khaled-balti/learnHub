import React, { Fragment, useEffect, useRef, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../../store/actions/courseAction";
import ReactPlayer from "react-player";
import { faPlay, faClock, faPlus, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from './Videos.module.css'
import Note from "./Components/Note";
import moment from "moment";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../shadcnComponents/ui/avatar";
import { addComment } from "../../api/index";
import Anonyme from "../../img/anonyme.jpg"
import Comment from "./Components/Comment";
const PlayIcon = ({ setVideoPlaying }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "transparent", // Remove background color
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        backgroundColor: "#06bbcc",
        color: "white",
        display: "flex", // Added for centering icon
        justifyContent: "center", // Added for centering icon
        alignItems: "center", // Added for centering icon
      }}
      onClick={() => setVideoPlaying(true)}
    >
      <FontAwesomeIcon icon={faPlay} size="2x" />
    </div>
  );
};

const Videos = () => {
  const [user] = useOutletContext()
  const commentRef = useRef()
  const dispatch = useDispatch();
  const { id } = useParams();
  const [videoPlaying, setVideoPlaying] = useState(null);
  const [videoActual, setVideoActual] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [noteDisplayed, setNoteDisplayed] = useState(false)
  const [comments, setComments] = useState(null)
  const [commentsNumber, setCommentsNumber] = useState(0)

  useEffect(() => {
    dispatch(getCourse(id));
  }, [dispatch, id]);
  const course = useSelector((state) => state.courseReducer.course);
  useEffect(() => {
    if (course && course.videos.length > 0) {
      setComments([...course.videos[0].comments])
      setCommentsNumber(course.videos[0].commentsNumber)
      setVideoPlaying(course.videos[0].file);
      setVideoActual(course.videos[0]);
    }
  }, [course]);
  if (!course) {
    return <p>Loading...</p>;
  }
  const videos = course.videos;
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
  const limitCharNumber = 250
  const submitCommentHandler = async(e) => {
    e.preventDefault();
    const text = commentRef.current.value
    const formData = new FormData()
    formData.append('sourceId', user?.result?._id)
    formData.append('role', user?.result?.role)
    formData.append('text', text)
    const {data} = await addComment(course._id, videoActual._id, formData)
    setComments(prvState => [...prvState, {...data, sourcest: user?.result?.role === "student" ? user?.result : null, sourceins: user?.result?.role === "instructor" ? user?.result : null}])
    setCommentsNumber(prevState => prevState + 1)
    commentRef.current.value = ""
  }
  return (
    <Fragment>
      {videos.length > 0 && (
        <div className="container-fluid p-3" style={{ marginTop: "90px" }}>
          <div className="row">
            <div className="col-12 col-md-8 position-relative">
              <ReactPlayer
                url={`http://localhost:5006/${videoPlaying}`}
                width="100%"
                light={videoActual.image}
                height="70vh"
                playing={videoPlaying}
                controls
                className="mb-3"
              />
              {!videoPlaying && <PlayIcon setVideoPlaying={setVideoPlaying} />}
              <div className="d-flex justify-content-between">
                <h2 className="fw-bold mb-4">{videoActual.title}</h2>
                <div className="text-black-50 mt-2"><FontAwesomeIcon icon={faClock}></FontAwesomeIcon>&nbsp;&nbsp;{moment(videoActual.createdAt).fromNow()}</div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <Avatar className="me-2">
                    <AvatarImage src={course.creator.image} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="d-flex flex-column me-4">
                    <h5 className="mb-0">{course.creator.name}</h5>
                    <p className="text-black-50">{course.creator.diplome}</p>
                  </div>
                </div>
                {/* <button className="px-4 fw-bold fs-6" style={{backgroundColor: "#eee", color: "#215ca6", height: '50px', borderRadius: "20px"}} onClick={() => setNoteDisplayed(true)} >Note&nbsp;&nbsp;<FontAwesomeIcon icon={faPlus} /></button> */}
              </div>
              {videoActual.description && videoActual.description.length > 0 && <div className="container-fluid py-3 px-4" style={{borderRadius: '20px', backgroundColor: "#eee"}} onClick={() => setExpanded(prev => !prev)}>
                <p className="fw-bold">{formatDate(videoActual.createdAt)}</p>
                {videoActual.description.length <= limitCharNumber ? videoActual.description : expanded ? videoActual.description : `${videoActual.description.slice(0, limitCharNumber)}...`}
              </div>}
              <div className="container-fluid py-3 px-4 mt-3" style={{borderRadius: '20px', backgroundColor: "#eee"}}>
                <h6 className="fw-bold">{commentsNumber} Comments</h6>
                <div className="container-fluid d-flex justify-content-between">
                  <Avatar className="me-2">
                    <AvatarImage src={user?.result?.image ? user?.result?.image : Anonyme} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="d-flex w-100">
                    <input name="text" type="text" placeholder="write your comment..." ref={commentRef} style={{width: '95%', backgroundColor: 'transparent', borderBottom: '1px solid black'}}/>
                    <button className="d-flex justify-content-center align-items-center" style={{width: '40px', height: '40px'}} onClick={submitCommentHandler} ><FontAwesomeIcon icon={faPaperPlane}/></button>
                  </div>
                </div>

              {comments && comments.map((comment) => {
                // console.log(comment)
                return <Comment comment={comment} user={user} comments={comments} setComments={setComments} courseId={course._id} videoId={videoActual._id} setCommentsNumber={setCommentsNumber} />
              })}
              </div>
            </div>
            {!noteDisplayed && <div className="col-12 col-md-4 d-flex flex-column">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="container-fluid p-0 mb-5"
                  style={{ height: "120px", position: "relative" , cursor: "pointer" }}
                  onClick={() => {setVideoPlaying(video.file); setVideoActual(video); setComments(video.comments); setCommentsNumber(video.commentsNumber)}}
                >
                  <div className="row p-0" style={{ height: "100%" }}>
                    <div className="col-5 p-0" style={{height: "150px"}}>
                      <img
                        src={video.image}
                        alt="error"
                        className="img-fluid"
                        style={{ height: "100%", width: "100%" }}
                      />
                    </div>
                    <div className="col-7 d-flex flex-column justify-content-center">
                      <div className={classes.titlevideo}>{video.title}</div>
                      <div className="text-black-50 fs-5 mb-1">{course.creator.name}</div>
                      <div className="text-black-50" style={{fontSize: '12px'}}><FontAwesomeIcon icon={faClock}></FontAwesomeIcon>&nbsp;&nbsp;{moment(video.createdAt).fromNow()}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>}
            {noteDisplayed && <div className="col-12 col-md-4">
              <Note setNoteDisplayed={setNoteDisplayed} videoId={videoActual._id} courseId={course._id} />
            </div>}
          </div>
        </div>
      )}
      {!videos.length && (
        <div className="container">
          <div>No Videos In This Course</div>
        </div>
      )}
    </Fragment>
  );
};

export default Videos;
