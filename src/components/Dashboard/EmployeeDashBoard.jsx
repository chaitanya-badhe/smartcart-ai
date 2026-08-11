import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashBoard = () => {
  return (
    <div className='p-10  bg-[#1c1c1c] h-screen'>
      <Header/>
      <TaskListNumbers/>
      <Tasklist/>
    </div>
  )
}

export default EmployeeDashBoard
