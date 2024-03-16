import { createSlice } from "@reduxjs/toolkit";
const CourseSlice = createSlice({
    name: 'Course',
    initialState: {
        courses: [],
        popularCourses: [],
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
        }
    }
})
export const CoursesActions = CourseSlice.actions
export default CourseSlice