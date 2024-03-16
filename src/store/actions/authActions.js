import { AuthActions } from "../reducers/authSlice"
import { addUser, fetchUser } from "../../api"
export const addUserAction = (user, navigate) => async (dispatch) => {
    try {
        const {data} = await addUser(user)
        dispatch(AuthActions.addUser({data}))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}
export const fetchUserAction = (user, navigate) => async (dispatch) => {
    try {
        const {data} = await fetchUser(user)
        dispatch(AuthActions.addUser({data}))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const authenticate = (result, token) => async (dispatch) => {
    try {
        dispatch(AuthActions.addUser({data: {result, token}}))
    } catch (error) {
        console.log(error)
    }
}

export const logoutAction = (navigate) => async (dispatch) => {
    try {
        dispatch(AuthActions.logout())
        navigate('/')
        navigate(-1)
    } catch (error) {
        console.log(error)
    }
}