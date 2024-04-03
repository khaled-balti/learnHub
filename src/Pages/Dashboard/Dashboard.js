import React, { Fragment, useState, useEffect } from 'react'
import Sidebar from '../../UI/Sidebar/Sidebar'
import Navbar from '../../UI/Navbar/Navbar'
import { useNavigate } from 'react-router'
import { logoutAction } from '../../store/actions/authActions'
import { jwtDecode } from 'jwt-decode'
import { useDispatch} from 'react-redux'
import {Outlet} from  'react-router-dom'
import NavigationMenu from './Components/NavigationMenu'
const Dashboard = () => {
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
      <Navbar user={user} logoutHandler={logoutHandler} dashboard={"navbar"} />
      <div className='w-100 overflow-hidden d-block d-md-none px-1'>
        <NavigationMenu/>
      </div>
      <div className='w-100 overflow-hidden d-block d-md-none px-1'>
        <Outlet />
      </div>
      <main className='row' style={{width: '100vw'}}>
        <div className='col-3 d-none d-md-block'>
          <Sidebar/>
        </div>
        <div className='col-9 pe-5 overflow-hidden d-none d-md-block' style={{ paddingTop: '100px'}}>
          <Outlet />
        </div>
      </main>
    </Fragment>
  )
}

export default Dashboard