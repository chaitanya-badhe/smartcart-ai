import React, {
    useContext,
    useEffect,
    useState
} from 'react'

import Login from './components/Auth/Login'
import EmployeeDashBoard from './components/Dashboard/EmployeeDashBoard'
import AdminDashBoard from './components/Dashboard/AdminDashBoard'

import { AuthContext } from './context/AuthProvider'


const App = () => {

    const [user, setUser] = useState(null)

    const [loggedInUserData, setLoggedInUserData] =
        useState(null)

    const authData = useContext(AuthContext)


    // ==========================================
    // CHECK PREVIOUS LOGIN
    // ==========================================

    useEffect(() => {

        const loggedInUser =
            localStorage.getItem('loggedInUser')


        if (!loggedInUser) {
            return
        }


        try {

            const parsedUser =
                JSON.parse(loggedInUser)


            // ADMIN
            if (parsedUser.role === 'admin') {

                setUser('admin')

                return
            }


            // EMPLOYEE
            if (parsedUser.role === 'employee') {

                const employee =
                    authData?.employees?.find(
                        (employee) =>
                            employee.id === parsedUser.id
                    )


                if (employee) {

                    setUser('employee')

                    setLoggedInUserData(employee)

                } else {

                    localStorage.removeItem(
                        'loggedInUser'
                    )

                }
            }

        } catch (error) {

            console.error(
                'Login data error:',
                error
            )

            localStorage.removeItem(
                'loggedInUser'
            )
        }

    }, [authData])


    // ==========================================
    // LOGIN
    // ==========================================

    const handleLogin = (email, password) => {

        // ADMIN LOGIN
        const admin =
            authData?.admin?.find(
                (admin) =>
                    admin.email === email &&
                    admin.password === password
            )


        if (admin) {

            setUser('admin')

            localStorage.setItem(
                'loggedInUser',
                JSON.stringify({
                    role: 'admin',
                    id: admin.id
                })
            )

            return
        }


        // EMPLOYEE LOGIN
        const employee =
            authData?.employees?.find(
                (employee) =>
                    employee.email === email &&
                    employee.password === password
            )


        if (employee) {

            setUser('employee')

            setLoggedInUserData(employee)

            localStorage.setItem(
                'loggedInUser',
                JSON.stringify({
                    role: 'employee',
                    id: employee.id
                })
            )

            return
        }


        // INVALID LOGIN
        alert('Invalid credentials')
    }


    // ==========================================
    // LOGOUT
    // ==========================================

    const handleLogout = () => {

        localStorage.removeItem(
            'loggedInUser'
        )

        setUser(null)

        setLoggedInUserData(null)
    }


    // ==========================================
    // UI
    // ==========================================

    return (
        <>

            {/* LOGIN PAGE */}

            {!user && (
                <Login
                    handleLogin={handleLogin}
                />
            )}


            {/* ADMIN DASHBOARD */}

            {user === 'admin' && (
                <AdminDashBoard
                    handleLogout={handleLogout}
                />
            )}


            {/* EMPLOYEE DASHBOARD */}

            {user === 'employee' &&
                loggedInUserData && (

                    <EmployeeDashBoard
                        data={loggedInUserData}
                        handleLogout={handleLogout}
                    />

                )}

        </>
    )
}

export default App





import React, {
    useContext,
    useEffect,
    useState
} from 'react'

import Login from './components/Auth/Login'
import EmployeeDashBoard from './components/Dashboard/EmployeeDashBoard'
import AdminDashBoard from './components/Dashboard/AdminDashBoard'

import { AuthContext } from './context/AuthProvider'


const App = () => {

    const [user, setUser] = useState(null)

    const [loggedInUserData, setLoggedInUserData] =
        useState(null)

    const authData = useContext(AuthContext)


    // ==========================================
    // CHECK PREVIOUS LOGIN
    // ==========================================

    useEffect(() => {

        const loggedInUser =
            localStorage.getItem('loggedInUser')


        if (!loggedInUser) {
            return
        }


        try {

            const parsedUser =
                JSON.parse(loggedInUser)


            // ADMIN
            if (parsedUser.role === 'admin') {

                setUser('admin')

                return
            }


            // EMPLOYEE
            if (parsedUser.role === 'employee') {

                const employee =
                    authData?.employees?.find(
                        (employee) =>
                            employee.id === parsedUser.id
                    )


                if (employee) {

                    setUser('employee')

                    setLoggedInUserData(employee)

                } else {

                    localStorage.removeItem(
                        'loggedInUser'
                    )

                }
            }

        } catch (error) {

            console.error(
                'Login data error:',
                error
            )

            localStorage.removeItem(
                'loggedInUser'
            )
        }

    }, [authData])


    // ==========================================
    // LOGIN
    // ==========================================

    const handleLogin = (email, password) => {

        // ADMIN LOGIN
        const admin =
            authData?.admin?.find(
                (admin) =>
                    admin.email === email &&
                    admin.password === password
            )


        if (admin) {

            setUser('admin')

            localStorage.setItem(
                'loggedInUser',
                JSON.stringify({
                    role: 'admin',
                    id: admin.id
                })
            )

            return
        }


        // EMPLOYEE LOGIN
        const employee =
            authData?.employees?.find(
                (employee) =>
                    employee.email === email &&
                    employee.password === password
            )


        if (employee) {

            setUser('employee')

            setLoggedInUserData(employee)

            localStorage.setItem(
                'loggedInUser',
                JSON.stringify({
                    role: 'employee',
                    id: employee.id
                })
            )

            return
        }


        // INVALID LOGIN
        alert('Invalid credentials')
    }


    // ==========================================
    // LOGOUT
    // ==========================================

    const handleLogout = () => {

        localStorage.removeItem(
            'loggedInUser'
        )

        setUser(null)

        setLoggedInUserData(null)
    }


    // ==========================================
    // UI
    // ==========================================

    return (
        <>

            {/* LOGIN PAGE */}

            {!user && (
                <Login
                    handleLogin={handleLogin}
                />
            )}


            {/* ADMIN DASHBOARD */}

            {user === 'admin' && (
                <AdminDashBoard
                    handleLogout={handleLogout}
                />
            )}


            {/* EMPLOYEE DASHBOARD */}

            {user === 'employee' &&
                loggedInUserData && (

                    <EmployeeDashBoard
                        data={loggedInUserData}
                        handleLogout={handleLogout}
                    />

                )}

        </>
    )
}

export default App