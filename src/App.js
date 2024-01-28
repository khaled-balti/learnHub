import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/MainPage/Home';
import Error from './Pages/Error/Error';
import RootLayout from './Pages/RootLayout/RootLayout';
import About from './Pages/AboutPage/About';
import Courses from './Pages/CoursesPage/Courses';
import Team from './Pages/TeamPage/Team';
import Contact from './Pages/ContactPage/Contact';
import Login from './Pages/LoginPage/Login';
import { instructorsLoader as InsructorsLoader } from './Pages/AboutPage/About';
const router = createBrowserRouter([
  { path: '/' , element: <RootLayout />, errorElement: <Error/>, children: [
    {index: true , element: <Home />},
    {path: 'about', element: <About />, loader: InsructorsLoader},
    {path: 'courses', element: <Courses />},
    {path: 'team', element: <Team />},
    {path: 'contact', element: <Contact />},
    {path: 'login', element: <Login />},
  ]}
])
function App() {
  return (
    <RouterProvider router={router}/>
  );
}
export default App;
