import React, { useEffect } from 'react'
import Login from './Component/Auth/Login'
import EmployeeDashboard from './Component/Dashboard/EmployeeDashboard'
import AdminDashboard from './Component/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'

const App = () => {
  useEffect(()=>{
    // setLocalStorage()
    getLocalStorage()
  },)
  return (
    <>
    <Login />
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}

export default App
