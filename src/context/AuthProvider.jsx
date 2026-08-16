import React, { createContext, useEffect, useState } from 'react'
import {
    getLocalStorage,
    setLocalStorage
} from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState({
        employees: [],
        admin: []
    })


    useEffect(() => {

        // Check whether data exists
        const employeesData = localStorage.getItem('employees')
        const adminData = localStorage.getItem('admin')


        // If data doesn't exist, create it
        if (!employeesData || !adminData) {
            setLocalStorage()
        }


        // Get data
        const { employees, admin } = getLocalStorage()


        // Store data in context
        setUserData({
            employees,
            admin
        })

    }, [])


    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider