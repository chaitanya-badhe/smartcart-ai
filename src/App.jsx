import React, { useContext, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashBoard from './components/Dashboard/EmployeeDashBoard'
import AdminDashBoard from './components/Dashboard/AdminDashBoard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

    const [user, setUser] = useState(null)

    const authData = useContext(AuthContext)

    const handleLogin = (email, password) => {



        if (
            authData?.admin?.find(
                (e) => email === e.email && password === e.password
            )
        ) {
            setUser('admin')
        }

        // Employee Login
        else if (
            authData?.employees?.find(
                (e) => email === e.email && password === e.password
            )
        ) {
            setUser('employee')
        }

        else {
            alert('Invalid credentials')
        }
    }

    return (
        <>

            {/* Login */}
            {!user && (
                <Login handleLogin={handleLogin} />
            )}

            {/* Admin Dashboard */}
            {user === 'admin' && (
                <AdminDashBoard />
            )}

            {/* Employee Dashboard */}
            {user === 'employee' && (
                <EmployeeDashBoard />
            )}

        </>
    )
}

export default App