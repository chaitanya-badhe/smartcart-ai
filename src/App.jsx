import React, { useContext, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashBoard from './components/Dashboard/EmployeeDashBoard'
import AdminDashBoard from './components/Dashboard/AdminDashBoard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {

    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
    }

    else if (email === 'user@me.com' && password === '123') {
      setUser('employee')
    }

    else {
      alert('Invalid credentials')
    }
  }

  const data = useContext(AuthContext)

  return (
    <>
      {/* Show Login page when nobody is logged in */}
      {!user && <Login handleLogin={handleLogin} />}

      {/* Show Admin Dashboard only for admin */}
      {user === 'admin' && <AdminDashBoard />}

      {/* Show Employee Dashboard only for employee */}
      {user === 'employee' && <EmployeeDashBoard />}
    </>
  )
}

export default App