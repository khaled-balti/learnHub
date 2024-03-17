import { CoursesActions } from "../reducers/courseSlice";
import { fetchAllCourses, fetchPopularCourses, fetchCourse, fetchCart, removeFromCart, addToCart } from "../../api/index"
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

export const getCart = () => async (dispatch) => {
    try {
        const {data} = await fetchCart()
        dispatch(CoursesActions.fetchCartCourses({data}))
    } catch (error) {
        console.log(error);
    }
}

export const addCourseToCart = (id) => async (dispatch) => {
    try {
        const {data} = await addToCart(id)
        dispatch(CoursesActions.addCartCourses({data}))
    } catch (error) {
        console.log(error);
    }
}

export const deleteCourseFromCart = (id, navigate) => async (dispatch) => {
    try {
        const {data} = await removeFromCart(id)
        dispatch(CoursesActions.deleteCartCourse({data}))
        navigate(0)
    } catch (error) {
        console.log(error);
    }
}