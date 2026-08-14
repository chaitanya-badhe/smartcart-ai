import React, {
    createContext,
    useEffect,
    useState                 // 🔴 CORRECTION 1
} from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {

        // 🔴 CORRECTION 2
        // Initialize localStorage with your employee/admin data
        setLocalStorage()

        const { employees, admin } = getLocalStorage()

        // 🔴 CORRECTION 3
        // Make sure arrays are available
        setUserData({
            employees: employees || [],
            admin: admin || []
        })

    }, [])

    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider


// ============================================
// EMPLOYEES DATA
// ============================================

const employees = [
    {
        id: 1,
        email: "employee1@ems.com",
        password: "123",

        tasks: [
            {
                active: true,
                newTask: true,
                failed: false,
                taskTitle: "Design Login Page",
                taskDescription: "Create a responsive login page for the EMS application.",
                taskDate: "2026-08-11",
                category: "Design"
            },

            {
                active: true,
                newTask: false,
                failed: false,
                taskTitle: "Create Dashboard UI",
                taskDescription: "Build the main dashboard layout with cards and navigation.",
                taskDate: "2026-08-12",
                category: "Frontend"
            },

            {
                active: false,
                newTask: false,
                failed: false,
                taskTitle: "Update User Profile",
                taskDescription: "Add profile editing functionality for employees.",
                taskDate: "2026-08-08",
                category: "Development"
            },

            {
                active: false,
                newTask: false,
                failed: true,
                taskTitle: "Fix Authentication Bug",
                taskDescription: "Resolve the login authentication issue reported by users.",
                taskDate: "2026-08-07",
                category: "Bug Fix"
            },

            {
                active: true,
                newTask: true,
                failed: false,
                taskTitle: "Add Search Feature",
                taskDescription: "Implement search functionality for employees and tasks.",
                taskDate: "2026-08-13",
                category: "Development"
            }
        ]
    },

    // 👇 KEEP YOUR EMPLOYEE 2, 3, 4, 5 DATA HERE
]


// ============================================
// ADMIN DATA
// ============================================

const admin = [
    {
        id: 1,
        email: "admin@ems.com",
        password: "123"
    }
]


// ============================================
// LOCAL STORAGE
// ============================================

export const setLocalStorage = () => {

    localStorage.setItem(
        'employees',
        JSON.stringify(employees)
    )

    localStorage.setItem(
        'admin',
        JSON.stringify(admin)
    )
}


export const getLocalStorage = () => {

    const employees = JSON.parse(
        localStorage.getItem('employees')
    )

    const admin = JSON.parse(
        localStorage.getItem('admin')
    )

    return {
        employees,
        admin
    }
}