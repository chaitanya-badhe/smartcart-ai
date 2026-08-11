import React, { useEffect,useState  } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashBoard from './components/Dashboard/EmployeeDashBoard'
import AdminDashBoard from './components/Dashboard/AdminDashBoard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

const App = () => {

  const [user ,setUser] = useState(null)

  const handleLogin = (email,password) =>{
    if(email == 'admin@me.com'&& password == '123'){
      setUser('admin')
    } else if(email == 'user@me.com' && password =='123' ){
      setUser('employee')
    }else{
      alert("invalid credientials")
    }
  }

  handleLogin(

  )

  return (
    <>
    {!user? <Login handleLogin={handleLogin}/> : ''}
    {user == 'admin'? <AdminDashBoard/> :<EmployeeDashBoard/>}
    {/* <EmployeeDashBoard/> */}
    {/* < AdminDashBoard/> */}
    </>
  )
}

export default App
