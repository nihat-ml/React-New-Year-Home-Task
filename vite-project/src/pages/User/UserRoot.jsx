import React from 'react'
import UserNavbar from '../../components/User/UserNavbar'
import { Outlet } from 'react-router-dom'
import UserFooter from '../../components/User/UserFooter'
import UserSlider from '../../components/User/UserSlider'

function UserRoot() {
  return (
    <>
      <UserNavbar/>
      
      <Outlet/>
      <UserFooter/>
    </>
  )
}

export default UserRoot
