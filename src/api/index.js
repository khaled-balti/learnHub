import axios from 'axios'
const API = axios.create({baseURL: 'http://localhost:5006'})
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})
export const fetchAllInstructors = () => API.get('/instructors')
export const fetchPopularInstructors = () => API.get('/instructors/popular')

export const fetchAllCourses = () => API.get('/courses')
export const fetchPopularCourses = () => API.get('/courses/popular')
export const fetchCourse = (id) => API.get(`/courses/details/${id}`)

export const addUser = (user) => API.post('/users/signup', user)
export const addGoogleUser = (user) => API.post('/users/google', user)
export const fetchUser = (user) => API.post('/users/login', user)

export const addToCart = (id) => API.post(`/users/cart/${id}`)
export const fetchCart = () => API.get(`/users/cart/courses`)
export const removeFromCart = (id) => API.post(`/users/cart/delete/${id}`)

export const addToClasses = (id) => API.post(`/users/classes/${id}`)
export const fetchClasses = () => API.get(`/users/classes/courses`)
export const fetchCourseStudents = () => API.get(`/users/students`)

export const fetchStudents = () => API.get(`/users/students`)
export const fetchRelatedCourses = () => API.get(`/users/courses`)
export const addRelatedCourse = (course) => API.post(`/users/course/add`, course)
export const updateCourse = (id, course) => API.post(`/users/${id}/update`, course)
export const addVideo = (id, video) => API.post(`/users/${id}/addVideo`, video)
export const fetchVideos = (id) => API.get(`/users/${id}/video`)
export const fetchNote = (courseId, videoId) => API.get(`/users/${courseId}/${videoId}/note`)
export const addComment = (courseId, videoId, comment) => API.post(`/users/${courseId}/${videoId}/comment`, comment, {
    headers: {
        'Content-Type': 'application/json'
    }
})
export const likeComment = (courseId, videoId, commentId, user) => API.post(`/users/${courseId}/${videoId}/${commentId}/like`, user,{
    headers: {
        'Content-Type': 'application/json'
    }
})
export const dislikeComment = (courseId, videoId, commentId, user) => API.post(`/users/${courseId}/${videoId}/${commentId}/dislike`, user,{
    headers: {
        'Content-Type': 'application/json'
    }
})
export const removeLikeComment = (courseId, videoId, commentId, user) => API.post(`/users/${courseId}/${videoId}/${commentId}/nolike`, user,{
    headers: {
        'Content-Type': 'application/json'
    }
})
export const removeDislikeComment = (courseId, videoId, commentId, user) => API.post(`/users/${courseId}/${videoId}/${commentId}/nodislike`, user,{
    headers: {
        'Content-Type': 'application/json'
    }
})
export const answerComment = (courseId, videoId, commentId, user) => API.post(`/users/${courseId}/${videoId}/${commentId}/answercomment`, user,{
    headers: {
        'Content-Type': 'application/json'
    }
})
export const editComment = (courseId, videoId, commentId, newContent) => API.post(`/users/${courseId}/${videoId}/${commentId}/editcomment`, newContent,{
    headers: {
        'Content-Type': 'application/json'
    }
})
export const deleteComment = (courseId, videoId, commentId) => API.delete(`/users/${courseId}/${videoId}/${commentId}/deletecomment`, {
    headers: {
        'Content-Type': 'application/json'
    }
})