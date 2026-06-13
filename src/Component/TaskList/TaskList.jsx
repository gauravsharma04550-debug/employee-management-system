import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className=' flex items-center overflow-x-auto justify-start gap-5 flex-nowrap h-[55%] w-full mt-10 py-5 '>
      <AcceptTask />
      <NewTask />
      <FailedTask />
      <CompleteTask />

      
    </div>
  )
}

export default TaskList
