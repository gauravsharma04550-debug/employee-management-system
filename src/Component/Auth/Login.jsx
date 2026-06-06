import React, { useState } from 'react'

const Login = () => {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const submitHandler =(e)=> {
    e.preventDefault();
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-cyan-700'>
          <form 
          onSubmit={(e)=>{
            submitHandler(e)
            console.log('email is ', email)
            console.log('password is ', password)
            setEmail('')
            setPassword('')
            
          }}
          className='flex flex-col items-center justify-center p-20' 
          >
            <input
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }} 
            required 
            className='outline-none bg-transparent border-2 border-cyan-700 rounded-full py-2 px-6 text-xl placeholder:text-gray-400' type="email" placeholder='Enter your email...' 
            />
            <input 
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            required 
            className='outline-none bg-transparent border-2 border-cyan-700 rounded-full py-2 px-6 text-xl mt-10 placeholder:text-gray-400'  type="password" placeholder='Enter password...' 
            />
            <button className=' mt-8  text-white outline-none bg-red-600 border-none rounded-full py-2 px-8 text-xl  placeholder:text-white'>Log in</button>
          </form>
      </div>
    </div>
  )
}

export default Login
