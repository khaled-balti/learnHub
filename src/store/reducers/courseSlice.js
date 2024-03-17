import { createSlice } from "@reduxjs/toolkit";
const CourseSlice = createSlice({
    name: 'Course',
    initialState: {
        courses: [],
        popularCourses: [],
        cartCourses: [],
        cartCoursesNumber: 0,
        course: null,
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
        }
    }
})
export const CoursesActions = CourseSlice.actions
export default CourseSlice