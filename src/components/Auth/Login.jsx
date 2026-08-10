import React, { useState } from 'react'

const Login = () => {

    const [email,setEmail] = useState('');
    const [password , setPassword] = useState('')

   const  submitHandler =(e)=>{
    e.preventDefault()
    console.log('email is',email)
    console.log('email is',password)
    console.log("Form submitted!")

    setEmail("")
    setPassword("")
   }

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className='border-2 border-emerald-600 p-5 rounded-xl '>
            <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required
                className=' text-black outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full' type='email' placeholder='Enter your email'/>
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                className='required text-black outline-none bg-transparent mt-10 border-2 border-emerald-600 text-xl py-3 px-5 rounded-full' type='password' placeholder='Enter Password'/>
                <button className="text-white cursor-pointer mt-5 bg-emerald-600 w-70 mt-10 border-2 border-emerald-600 text-xl py-3 px-5 rounded-full">
                    Login
                </button>            
            </form>
        </div>      
    </div>
  )
}

export default Login
