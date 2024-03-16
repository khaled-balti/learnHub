import { CoursesActions } from "../reducers/courseSlice";
import { fetchAllCourses, fetchPopularCourses, fetchCourse } from "../../api/index"
export const getCourses = () => async (dispatch) => {
    try {
        const {data} = await fetchAllCourses()
        dispatch(CoursesActions.fetchCourses({data}))
    } catch (error) {
        console.log(error)
    }
}

export const getPopularCourses = () => async (dispatch) => {
    try {
        const {data} = await fetchPopularCourses()
        dispatch(CoursesActions.fetchPopularCourses({data}))
    } catch (error) {
        console.log(error);
    }
}

export const getCourse = (id) => async (dispatch) => {
    try {
        const {data} = await fetchCourse(id)
        dispatch(CoursesActions.fetchCourseReducer({data}))
    } catch (error) {
        console.log(error);
    }
}