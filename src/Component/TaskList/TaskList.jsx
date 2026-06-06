import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className=' flex items-center overflow-x-auto justify-start gap-5 flex-nowrap h-[55%] w-full mt-10 py-5 '>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-300 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4>06-june-2026</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus libero aut eveniet? Nisi, aut quisquam.</p>
      </div>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-300 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4>06-june-2026</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus libero aut eveniet? Nisi, aut quisquam.</p>
      </div>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-300 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4>06-june-2026</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus libero aut eveniet? Nisi, aut quisquam.</p>
      </div>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-300 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4>06-june-2026</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus libero aut eveniet? Nisi, aut quisquam.</p>
      </div>

      
    </div>
  )
}

export default TaskList
