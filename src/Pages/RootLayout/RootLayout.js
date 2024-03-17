import React, { Fragment, useState, useEffect } from "react"
import { Outlet } from "react-router"
import Navbar from "../../UI/Navbar/Navbar"
import Footer from "../../UI/Footer/Footer"
import { useDispatch } from "react-redux"
import { logoutAction } from "../../store/actions/authActions"
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router"
const RootLayout = (props) => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(logoutAction(navigate))
        setUser(null)
    }
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('profile')); 
        if (storedUser) {
            const token = storedUser.token;   
            const decodeToken = jwtDecode(token);   
            const expirationTimeMs = decodeToken.exp * 1000;   
            if (expirationTimeMs > new Date().getTime()) {
                setUser(storedUser);
            } else {
                logoutHandler();
            }
        }
    }, []);
    return (
        <Fragment>
            <Navbar user={user} logoutHandler={logoutHandler}/>
            <main>
                <Outlet context={[user]} />
            </main>
            <Footer />
        </Fragment>
    )
} 
export default RootLayout