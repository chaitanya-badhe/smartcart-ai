import React from 'react'

const Header = ({ data }) => {

    return (
        <div className='flex items-end justify-between text-white border border-white p-5'>

            <h1 className='font-bold'>
                Hello
                <br />

                <span className='font-semibold'>
                    {data?.email}
                </span>
            </h1>

            <button className='bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium'>
                Log Out
            </button>

        </div>
    )
}

export default Header