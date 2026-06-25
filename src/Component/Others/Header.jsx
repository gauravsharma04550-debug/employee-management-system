import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = () => {
  // conts[username, setUsername] = useState('')

  // if(!data) {
  //   setUsername('Admin')
  // } else{
  //   setUsername(data.firstName)
  // }

const logOutUser = ()=>{
  localStorage.setItem('loggedInUser','')
  window.location.reload()
}

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello, <br /> <span className='text-3xl font-semibold'>username 👋</span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium py-2 px-6 rounded-sm'>Log out</button>
    </div>
  )
}

export default Header
