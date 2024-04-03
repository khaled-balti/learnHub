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