import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashBoard = ({ data }) => {

    return (
        <div className='p-10 bg-[#1c1c1c] min-h-screen'>

            <Header data={data} />

            <TaskListNumbers data={data} />

            <Tasklist data={data} />

        </div>
    )
}

export default EmployeeDashBoard