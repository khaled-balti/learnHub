import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/MainPage/Home';
import Error from './Pages/Error/Error';
import RootLayout from './Pages/RootLayout/RootLayout';
import About from './Pages/AboutPage/About';
import Courses from './Pages/CoursesPage/Courses';
import Team from './Pages/TeamPage/Team';
import Contact from './Pages/ContactPage/Contact';
import WebCourses from './Pages/CoursesPage/WebCourses/WebCourses';
import Login from './Pages/LoginPage/Login';
import GraphicCourses from './Pages/CoursesPage/GraphicCourses/GraphicCourses';
import VideoCourses from './Pages/CoursesPage/VideoCourses/VideoCourses';
import MarketingCourses from './Pages/CoursesPage/MarketingCourses/MarketingCourses';
import Auth from './Pages/Auth/Auth';
import Cart from './Pages/Cart/Cart';
import Classes from './Pages/Classes/Classes';
import Payment from './Pages/Payment/Payment';
import Details from './Pages/DetailsPage/Details';
const router = createBrowserRouter([
  { path: '/' , element: <RootLayout />, errorElement: <Error/>, children: [
    {index: true , element: <Home />},
    {path: 'about', element: <About />},
    {path: 'courses', element: <Courses />},
    {path: 'courses/web', element: <WebCourses />},
    {path: 'courses/graphic', element: <GraphicCourses />},
    {path: 'courses/video', element: <VideoCourses />},
    {path: 'courses/marketing', element: <MarketingCourses />},
    {path: 'team', element: <Team />},
    {path: 'contact', element: <Contact />},
    {path: 'cart', element: <Cart />},
    {path: 'classes', element: <Classes />},
    {path: 'login', element: <Login />},
  ]},
  {path: '/auth', element: <Auth />},
  {path: '/courses/details/:id', element: <Details />},
  {path: '/paiment/:id', element: <Payment />}
])
function App() {
  return (
    <RouterProvider router={router}/>
  );
}
export default App;
