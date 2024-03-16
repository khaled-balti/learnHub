import { configureStore } from "@reduxjs/toolkit";
import InstructorSlice from "./reducers/instructorSlice";
import CourseSlice from "./reducers/courseSlice";
import AuthSlice from "./reducers/authSlice";
const store = configureStore({
  reducer: {
    instructorReducer: InstructorSlice.reducer,
    courseReducer: CourseSlice.reducer,
    authReducer: AuthSlice.reducer
  }
});
export default store;
