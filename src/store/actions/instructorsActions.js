import { instructorsActions } from "../reducers/instructorSlice";
import { fetchAllInstructors, fetchPopularInstructors } from "../../api/index";
export const getInstructors = () => async (dispatch) => {
    try {
        const {data} = await fetchAllInstructors()
        dispatch(instructorsActions.fetchInstructors({data}))
    } catch (error) {
        console.log(error);
    }
}

export const getPopularInstructors = () => async (dispatch) => {
    try {
        const {data} = await fetchPopularInstructors()
        dispatch(instructorsActions.fetchPopularInstructors({data}))
    } catch (error) {
        console.log(error);
    }
}