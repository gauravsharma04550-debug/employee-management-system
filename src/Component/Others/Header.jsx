import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello, <br /> <span className='text-3xl font-semibold'>Gaurav 👋</span></h1>
      <button className='bg-red-600 text-lg font-medium py-2 px-6 rounded-sm'>Log out</button>
    </div>
  )
}

export default Header
