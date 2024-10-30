import React from 'react'
import { Outlet } from 'react-router-dom'

import LeftSideBar from './LeftSidebar'
import RightSideBar from './RightSidebar'


function HomePage() {
  return (
    <div>
      <LeftSideBar />
      <Outlet />
      <RightSideBar />
    </div>
  )
}

export default HomePage