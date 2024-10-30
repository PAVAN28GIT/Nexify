import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import LandingPage from './pages/landing/LandingPage'
import SignInPage from './pages/signin/SignInPage'
import SignUpPage from './pages/signup/SignUpPage'
import NoPage from './pages/NoPage/NoPage'


import HomePage from './pages/home/HomePage'
import Home from './pages/home/Home'
import CommunityPage from './pages/Community/CommunityPage'
import Community from './pages/Community/Community'
import ProfilePage from './pages/ProfilePage/ProfilePage'


function App() {

  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
      
        <Route path="/user/:userId" element={<HomePage />}>
          <Route index element={<Home />} />
          <Route path="communities" element={<CommunityPage />} />
          <Route path="community/:communityId" element={<Community />} />
          <Route path="profile/:profileId" element={<ProfilePage />} />
        </Route>
        <Route path='*' element={<NoPage />} />
      </Routes>
    </div>
  )
}

export default App
