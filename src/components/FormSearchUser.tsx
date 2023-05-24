import React from 'react'
import SearchIcon from '@/components/icons/SearchIcon'

const FormSearchUser = () => {
  return (
    <form className='flex flex-wrap items-center gap-2 bg-blue-900 p-2 rounded-xl mb-6'>
      <span className='min-w-[20px] ml-5'>
        <SearchIcon className='fill-sky-500' />
      </span>
      <input type="text" placeholder='Search github username...' className='flex-1 h-14 p-2 rounded-lg bg-transparent text-white placeholder:text-white outline-none' />
      <button className='bg-blue-500 rounded-lg py-4 px-4 text-white font-bold'>Search</button>
    </form>
  )
}

export default FormSearchUser

