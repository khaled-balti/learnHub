import { AuthActions } from "../reducers/authSlice"
import { addUser, fetchUser, addGoogleUser } from "../../api"
export const addUserAction = (user, navigate) => async (dispatch) => {
    try {
        const {data} = await addUser(user)
        console.log(data)
        dispatch(AuthActions.addUser({data}))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const fetchUserAction = (user, navigate) => async (dispatch) => {
    try {
        const {data} = await fetchUser(user)
        console.log(data)
        dispatch(AuthActions.addUser({data}))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const authenticate = (user) => async (dispatch) => {
    try {
        const result = user?.profileObj
        const token = user?.tokenId
        await addGoogleUser(result)
        dispatch(AuthActions.addUser({data: {result, token}}))
    } catch (error) {
        console.log(error)
    }
}

export const logoutAction = (navigate) => async (dispatch) => {
    try {
        dispatch(AuthActions.logout())
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}