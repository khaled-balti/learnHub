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
        console.log('Stored User:', storedUser);
    
        if (storedUser) {
            const token = storedUser.token;
            console.log('Token:', token);
    
            const decodeToken = jwtDecode(token);
            console.log('Decoded Token:', decodeToken);
    
            const expirationTimeMs = decodeToken.exp * 1000;
            console.log('Token expiration:', expirationTimeMs);
            console.log('Current time:', new Date().getTime());
    
            if (expirationTimeMs > new Date().getTime()) {
                console.log('Token not expired. Setting user.');
                setUser(storedUser);
            } else {
                console.log('Token expired. Logging out.');
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