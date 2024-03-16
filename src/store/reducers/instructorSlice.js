import { createSlice } from "@reduxjs/toolkit";
const InstructorSlice = createSlice({
    name: 'Instructor',
    initialState: {
        instructors: [],
        popularInstructors: [],
    },
    reducers: {
        fetchInstructors (state, action) {
            state.instructors = action.payload.data
        },
        fetchPopularInstructors (state, action) {
            state.popularInstructors = action.payload.data
        }
    }
})
export const instructorsActions = InstructorSlice.actions
export default InstructorSlice