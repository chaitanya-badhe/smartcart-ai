import React from 'react'
import Header from '../other/Header'

const AdminDashBoard = () => {
  return (
    <div className="bg-[#1c1c1c] min-h-screen p-10 text-white">
      
      <form className="flex items-start justify-between gap-10">

        {/* LEFT SIDE */}
        <div className="w-1/2 space-y-5">

          <div>
            <h3 className="mb-1 text-sm text-gray-300">Task Title</h3>
            <input
              type="text"
              placeholder="Make a UI design"
              className="w-full p-2 rounded bg-transparent border border-gray-500 outline-none"
            />
          </div>

          <div>
            <h3 className="mb-1 text-sm text-gray-300">Date</h3>
            <input
              type="date"
              className="w-full p-2 rounded bg-transparent border border-gray-500 outline-none"
            />
          </div>

          <div>
            <h3 className="mb-1 text-sm text-gray-300">Assign to</h3>
            <input
              type="text"
              placeholder="employee name"
              className="w-full p-2 rounded bg-transparent border border-gray-500 outline-none"
            />
          </div>

          <div>
            <h3 className="mb-1 text-sm text-gray-300">Category</h3>
            <input
              type="text"
              placeholder="design, dev, etc"
              className="w-full p-2 rounded bg-transparent border border-gray-500 outline-none"
            />
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 flex flex-col justify-between">

          <div>
            <h3 className="mb-1 text-sm text-gray-300">Description</h3>
            <textarea
              rows="10"
              className="w-full p-3 rounded bg-transparent border border-gray-500 outline-none resize-none"
            ></textarea>
          </div>

          <button className="mt-5 w-full bg-green-500 hover:bg-green-600 transition-all py-3 rounded text-white font-medium">
            Create Task
          </button>

        </div>

      </form>
    </div>
  )
}

export default AdminDashBoard