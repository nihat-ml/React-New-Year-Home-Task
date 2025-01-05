import React from 'react'
import AdminNavbar from '../../components/Admin/AdminNavbar'
import { Outlet } from 'react-router-dom'
import AdminFooter from '../../components/Admin/AdminFooter'

function AdminRoot() {
  return (
    <>
      <AdminNavbar/>
      <Outlet/>
      <AdminFooter/>
    </>
  )
}

export default AdminRoot
