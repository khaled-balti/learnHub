import React, {useState, useEffect, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import moment from 'moment'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "../../../shadcnComponents/ui/avatar";
import { likeComment, dislikeComment, removeLikeComment, removeDislikeComment, editComment, deleteComment } from '../../../api/index';
import Anonyme from "../../../img/anonyme.jpg"
import { faArrowLeft, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { answerComment } from '../../../api/index';
const Comment = ({comment, user, courseId, videoId, comments, setComments, setCommentsNumber}) => {
    const [likesCount, setLikesCount] = useState(comment.nblikesst + comment.nblikesins)
    const [dislikesCount, setDislikesCount] = useState(comment.nbdislikesst + comment.nbdislikesins)
    const [answerVisible, setAnswerVisible] = useState(false)
    const [editVisible, setEditVisible] = useState(false)
    const commentRef = useRef()
    let like = ''
    let dislike = ''
    if (comment.likesst && user?.result?.role === "student") {  
        like = comment.likesst.find((like) => user?.result?._id === like.toString())
        dislike = comment.dislikesst.find((dislike) => user?.result?._id === dislike.toString())
    }
    else if (comment.likesins && user?.result?.role === "instructor") {
        like = comment.likesins.find((like) => user?.result?._id === like.toString())
        dislike = comment.dislikesins.find((dislike) => user?.result?._id === dislike.toString())
    }
    const [liked, setLiked] = useState(like ? true : false)
    const [disliked, setDisliked] = useState(dislike ? true : false)
    const removeDislikeCommentHandler = async() => {
        setDisliked(false)
        setDislikesCount((prevState) => prevState - 1)
        const commentId = comment?._id
        const formData = new FormData()
        formData.append('userId', user?.result?._id)
        formData.append('role', user?.result?.role)
        const {data} = await removeDislikeComment(courseId, videoId, commentId, formData)
    }
    const removeLikeCommentHandler = async() => {
        setLiked(false)
        setLikesCount((prevState) => prevState - 1)
        const commentId = comment?._id
        const formData = new FormData()
        formData.append('userId', user?.result?._id)
        formData.append('role', user?.result?.role)
        const {data} = await removeLikeComment(courseId, videoId, commentId, formData)
    }
    const likeCommentHandler = async() => {
      if (!liked) {
        setLiked(true)
        setLikesCount((prevState) => prevState + 1)
        const commentId = comment?._id
        const formData = new FormData()
        formData.append('userId', user?.result?._id)
        formData.append('role', user?.result?.role)
        const {data} = await likeComment(courseId, videoId, commentId, formData)
        if (disliked) {
          removeDislikeCommentHandler()
        }
      }
      else {
        removeLikeCommentHandler()
      }
    }
    const dislikeCommentHandler = async() => {
      if (!disliked) {
        setDisliked(true)
        setDislikesCount((prevState) => prevState + 1)
        const commentId = comment?._id
        const formData = new FormData()
        formData.append('userId', user?.result?._id)
        formData.append('role', user?.result?.role)
        const {data} = await dislikeComment(courseId, videoId, commentId, formData)
        if (liked) {
          removeLikeCommentHandler()
        }
      }
      else {
        removeDislikeCommentHandler()
      }
    }
    const submitEditHandler = async() => {
      const formData = new FormData()
      formData.append('newComment', commentRef.current.value)
      console.log(comment._id)
      const {data} = await editComment(courseId, videoId, comment._id, formData) 
      const existingCommentIndex = comments.findIndex(c => c._id === comment._id);
      if (existingCommentIndex !== -1) {
        const updatedComments = [...comments];
        const existingComment = updatedComments[existingCommentIndex];
        const updatedComment = {...existingComment, content: commentRef.current.value}
        updatedComments[existingCommentIndex] = updatedComment
        setComments(updatedComments);
        setEditVisible(false)
      } else {
          console.log("Comment not found in the array.");
      }
    }
    const submitAnswerHandler = async() => {
      const destination = comment.sourcest?._id ? comment.sourcest?._id : comment.sourceins?._id 
      const source = user && user?.result?._id
      const text = commentRef.current.value
      const formData = new FormData()
      formData.append('sourceId', source)
      formData.append('destinationId', destination)
      formData.append('role', user?.result?.role)
      formData.append('destrole', comment.sourcest?.role ? comment.sourcest?.role : comment.sourceins?.role )
      formData.append('text', text)
      const {data} = await answerComment(courseId, videoId, comment._id, formData)
      const existingCommentIndex = comments.findIndex(c => c._id === comment._id);
      if (existingCommentIndex !== -1) {
          const updatedComments = [...comments];
          updatedComments.splice(existingCommentIndex + 1, 0, {
              ...data,
              sourcest: user?.result?.role === "student" ? user?.result : null,
              sourceins: user?.result?.role === "instructor" ? user?.result : null,
              destinationst: comment.sourcest?.role === "student" ? comment.sourcest : null,
              destinationins: comment.sourceins?.role === "instructor" ? comment.sourceins : null,
          });
          setComments(updatedComments);
      } else {
          console.log("Comment not found in the array.");
      }
      setCommentsNumber(prevState => prevState + 1)
      setAnswerVisible(false)
    }
    const submitHandler = () => {
      if (answerVisible) {
        submitAnswerHandler()
      }
      else if (editVisible) {
        submitEditHandler()
      }
    }
    const submitDeleteComment = async() => {
      try {
        const {data} = await deleteComment(courseId, videoId, comment._id)
      } catch (error) {
        console.log("error")
      }
      const existingCommentIndex = comments.findIndex(c => c._id === comment._id)
      if (existingCommentIndex !== -1) {
        const existingComment = comments[existingCommentIndex]
        let nb = 0;
        const updatedComments = [...comments]
        updatedComments.splice(existingCommentIndex, 1);
        setCommentsNumber(prev => prev - 1)
        if (existingComment.destinationst === null && existingComment.destinationins === null) {
          while (existingCommentIndex + nb < updatedComments.length && (updatedComments[nb].destinationst !== null || updatedComments[nb].destinationins !== null)) {
            nb++;
          } 
          if (nb > 0) {
            updatedComments.splice(existingCommentIndex, nb)
            setCommentsNumber(prev => prev - nb)
          }  
        }
        setComments(updatedComments)
      } else {
        console.log("Comment not found in the array.");
      }
    }

    
  return (
  <div className={`${(comment.destinationst || comment.destinationins) && 'ms-5'}`}>
    <div className="container">
      <div className="d-flex justify-content-between mt-3">
        <div className="d-flex">
          <Avatar className="me-2">
            <AvatarImage src={comment.sourcest ? comment.sourcest?.image : comment.sourceins ? comment.sourceins?.image : Anonyme} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="fw-bold text-primary mt-2 p-0">@{comment.sourcest ? comment.sourcest?.name : comment.sourceins?.name}</p>
        </div>
        <p className="text-black-50 mt-2">{moment(comment.pubDate).fromNow()}</p>
        <div />
    </div>
    <p className="container ms-5 mb-1"><span className='text-primary fw-bold me-2'>{ comment.destinationst ? `@${comment.destinationst?.name}` : comment.destinationins ? `@${comment.destinationins?.name}` : ''}</span>{comment.content}</p>
    <div className="container ms-5">
      {(comment.sourcest && user?.result?._id !== comment.sourcest._id || comment.sourceins && user?.result?._id !== comment.sourceins._id) && <FontAwesomeIcon icon={faThumbsUp} className={`me-3 ${liked ? 'text-primary' : 'text-black-50'} cursor-pointer`} onClick={likeCommentHandler} />}
      <span className="me-3 text-primary cursor-pointer">({likesCount})</span>
      {(comment.sourcest && user?.result?._id !== comment.sourcest._id || comment.sourceins && user?.result?._id !== comment.sourceins._id) && <FontAwesomeIcon icon={faThumbsDown} className={`me-3 ${disliked ? 'text-primary' : 'text-black-50'} cursor-pointer`} onClick={dislikeCommentHandler} />}
      <span className="me-3 text-primary cursor-pointer">({dislikesCount})</span>
      <span className="me-3 text-primary cursor-pointer" onClick={() => {
        setAnswerVisible(true); 
        setEditVisible(false); 
        if (commentRef.current) {
          commentRef.current.value = "";
      }}}>answer</span>
      {(comment.sourcest && user?.result?._id === comment.sourcest._id || comment.sourceins && user?.result?._id === comment.sourceins._id) && <span className="me-3 text-primary cursor-pointer" onClick={() => {
        setEditVisible(true); 
        setAnswerVisible(false);  
        if (commentRef.current) {
          commentRef.current.value = comment.content;
      }}} >edit</span>}
      {(comment.sourcest && user?.result?._id === comment.sourcest._id || comment.sourceins && user?.result?._id === comment.sourceins._id) && <span className="me-3 text-primary cursor-pointer" onClick={submitDeleteComment} >delete</span>}
    </div>
    {(answerVisible || editVisible) && <div className="container-fluid d-flex justify-content-between">
      <Avatar className="me-2">
        <AvatarImage src={user?.result?.image ? user?.result?.image : Anonyme} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="d-flex w-100">
        <input name="text" type="text" placeholder={`@${comment.sourcest ? comment.sourcest?.name : comment.sourceins?.name}`} ref={commentRef} style={{width: '95%', backgroundColor: 'transparent', borderBottom: '1px solid black'}} defaultValue={editVisible ? comment.content : ""} />
        <button className="d-flex justify-content-center align-items-center me-2 text-white" style={{width: '40px', height: '40px', backgroundColor: "#06bbcc"}} onClick={submitHandler} ><FontAwesomeIcon icon={faArrowUp}/></button>
        <button className="d-flex justify-content-center align-items-center text-white" style={{width: '40px', height: '40px', backgroundColor: "#06bbcc"}} onClick={() => {setAnswerVisible(false); setEditVisible(false)}} ><FontAwesomeIcon icon={faArrowLeft}/></button>
      </div>
    </div>}
  </div> 
</div>
  )
}

export default Comment