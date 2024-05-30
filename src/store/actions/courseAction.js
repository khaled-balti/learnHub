import { CoursesActions } from "../reducers/courseSlice";
import {
  fetchAllCourses,
  fetchPopularCourses,
  fetchCourse,
  fetchCart,
  removeFromCart,
  addToCart,
  fetchRelatedCourses,
  addRelatedCourse,
  addToClasses,
  fetchClasses,
  fetchCourseStudents,
  updateCourse,
  addVideo,
  fetchVideos,
} from "../../api/index";
export const getCourses = () => async (dispatch) => {
  try {
    const { data } = await fetchAllCourses();
    dispatch(CoursesActions.fetchCourses({ data }));
  } catch (error) {
    console.log(error);
  }
};

export const getPopularCourses = () => async (dispatch) => {
  try {
    const { data } = await fetchPopularCourses();
    dispatch(CoursesActions.fetchPopularCourses({ data }));
  } catch (error) {
    console.log(error);
  }
};

export const getCourse = (id) => async (dispatch) => {
  try {
    const { data } = await fetchCourse(id);
    dispatch(CoursesActions.fetchCourseReducer({ data }));
  } catch (error) {
    console.log(error);
  }
};

export const getCart = () => async (dispatch) => {
  try {
    const { data } = await fetchCart();
    dispatch(CoursesActions.fetchCartCourses({ data }));
  } catch (error) {
    console.log(error);
  }
};

export const addCourseToCart = (id) => async (dispatch) => {
  try {
    const { data } = await addToCart(id);
    dispatch(CoursesActions.addCartCourses({ data }));
  } catch (error) {
    console.log(error);
  }
};

export const deleteCourseFromCart = (id, navigate) => async (dispatch) => {
  try {
    const { data } = await removeFromCart(id);
    dispatch(CoursesActions.deleteCartCourse({ data }));
    navigate(0);
  } catch (error) {
    console.log(error);
  }
};

export const getClasses = () => async (dispatch) => {
  try {
    const { data } = await fetchClasses();
    dispatch(CoursesActions.fetchClassesCourses({ data }));
  } catch (error) {
    console.log(error);
  }
};

export const addCourseToClasses = (id) => async (dispatch) => {
  try {
    const { data } = await addToClasses(id);
    dispatch(CoursesActions.addClassesCourses({ data }));
  } catch (error) {
    console.log(error);
  }
};

export const getRelatedCourses = () => async (dispatch) => {
  try {
    const { data } = await fetchRelatedCourses();
    dispatch(CoursesActions.relatedCoursesHandler({ data }));
  } catch (error) {
    console.log(error);
  }
};

export const addRelatedCourseAction = (course) => async (dispatch) => {
  try {
    const { data } = await addRelatedCourse(course);
    dispatch(CoursesActions.addRelatedCourse(data));
  } catch (error) {
    console.log(error);
  }
};
export const getCourseStudentsAction = () => async (dispatch) => {
  try {
    const { data } = await fetchCourseStudents();
    dispatch(CoursesActions.getCourseStudents(data));
  } catch (error) {
    console.log(error);
  }
};

export const updateCourseAction = (id, course) => async (dispatch) => {
  try {
    const { data } = await updateCourse(id, course);
    dispatch(CoursesActions.updateCourse(data));
  } catch (error) {
    console.log(error);
  }
};

export const addVideoAction = (id, course) => async (dispatch) => {
  try {
    const { data } = await addVideo(id, course);
    dispatch(CoursesActions.addVideo(data));
  } catch (error) {
    console.log(error);
  }
};

export const fetchCourseVideos = (id) => async (dispatch) => {
  try {
    const { data } = await fetchVideos(id);
    dispatch(CoursesActions.fetchVideos(data));
  } catch (error) {
    console.log(error);
  }
};
