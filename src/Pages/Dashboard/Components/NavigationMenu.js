import React from 'react'
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
  } from "../../../shadcnComponents/ui/menubar"
import { NavLink } from 'react-router-dom'
const NavigationMenu = () => {
  return (
    <div style={{marginTop: '100px'}} className='d-flex overflow-y-hidden'>
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>
                    <NavLink to={'/dashboard/courses'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700  no-underline">Courses</NavLink>
                </MenubarTrigger>
                <MenubarTrigger>
                    <NavLink to={'/dashboard/students'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group no-underline">Students</NavLink>
                </MenubarTrigger>
                {/* <MenubarTrigger>
                    <NavLink to={'/dashboard/inbox'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group no-underline">Inbox</NavLink>
                </MenubarTrigger>
                <MenubarTrigger>
                    <NavLink to={'/dashboard/analytics'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group no-underline">Analytics</NavLink>
                </MenubarTrigger>
                <MenubarTrigger>
                    <NavLink to={'/dashboard/comments'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group no-underline">Comments</NavLink>
                </MenubarTrigger> */}
            </MenubarMenu>
        </Menubar>
    </div>
  )
}

export default NavigationMenu