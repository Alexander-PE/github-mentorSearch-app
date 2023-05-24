import React from 'react'
import BulbOnIcon from '@/components/icons/BulbOnIcon'

const Navbar = () => {
  return (
    <header className='flex items-center space-x-2 mb-10'>
      <h1 className='text-white text-3xl font-bold flex-grow '>devfinder</h1>

      <span className='uppercase text-white'>Light</span>
      <button>
        <BulbOnIcon className='fill-white' height={25}/>
      </button>
    </header>
  )
}

export default Navbar
