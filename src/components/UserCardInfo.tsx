import React from 'react'
import Image from 'next/image'
import GithubIcon from '@/components/icons/GithubIcon'

const UserCardInfo = () => {
  return (
    <article className='p-4 bg-blue-900 rounded-xl text-white'>
      <div className='bg-gray-200 rounded-full w-24 h-24 grid place-content-center'>
        <GithubIcon className='relative top-2 h-20 w-20'/>
      </div>
    </article>
  )
}

export default UserCardInfo
