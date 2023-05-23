import SearchIcon from '@/components/icons/SearchIcon'
import React from 'react'

const Home = () => {
  return (
    <>
      <form className='grid grid-cols-[1fr_1fr_1fr] bg-blue-900 p-2 rounded-xl'>
        <span>
          <SearchIcon className='fill-blue-500' width={30}/>
        </span>
        <input type="text" placeholder='Search github username...' />
        <button className='bg-blue-500 rounded-lg py-2 px-4'>Buscar</button>
      </form>
      <article>todo el chamullo de la pagina</article>
    </>
  )
}
  
export default Home
