import { createSlice } from "@reduxjs/toolkit";
const AuthSlice = createSlice({
    name: 'Auth',
    initialState: { authData: null },
    reducers: {
        addUser (state, action) {
            localStorage.setItem('profile', JSON.stringify({ ...action.payload?.data }))
            return {...state, authData: action.payload?.data}
        },
        logout (state) {
            localStorage.removeItem('profile')
            return {...state, authData: null}
        }
    }
})
export const AuthActions = AuthSlice.actions
export default AuthSlice