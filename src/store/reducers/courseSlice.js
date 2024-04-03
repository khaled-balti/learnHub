import { createSlice } from "@reduxjs/toolkit";
const CourseSlice = createSlice({
    name: 'Course',
    initialState: {
        courses: [],
        relatedCourses: [],
        popularCourses: [],
        cartCourses: [],
        cartCoursesNumber: 0,
        classesCourses: [],
        classesCoursesNumber: 0,
        course: null,
        students: []
    },
    reducers: {
        fetchCourses (state, action) {
            state.courses = action.payload.data
        },
        fetchPopularCourses (state, action) {
            state.popularCourses = action.payload.data
        },
        fetchCourseReducer(state, action) {
            state.course = action.payload.data
        },
        fetchCartCourses(state, action) {
            state.cartCoursesNumber = action.payload.data.nombreCourses
            state.cartCourses = action.payload.data.courses
        },
        addCartCourses(state, action) {
            state.cartCoursesNumber =+ 1
            state.cartCourses.push(action.payload.data)
        },
        deleteCartCourse(state, action) {
            state.cartCoursesNumber -= 1
            state.cartCourses = state.cartCourses.filter(course => course !== action.payload.data)
        },
        fetchClassesCourses(state, action) {
            state.classesCoursesNumber = action.payload.data.nombreCourses
            state.classesCourses = action.payload.data.courses
        },
        addClassesCourses(state, action) {
            state.classesCoursesNumber =+ 1
            state.classesCourses.push(action.payload.data)
        },
        relatedCoursesHandler(state, action) {
            state.relatedCourses = action.payload.data
        },
        addRelatedCourse(state, action) {
            state.relatedCourses.push(action.payload)
        },
        getCourseStudents(state, action) {
            state.students = action.payload
        }
    }
})
export const CoursesActions = CourseSlice.actions
export default CourseSlice