import { useState } from 'react'
import Logo from "/PMA_Icon.png"

function App() {

  return (
    <div>
      <div className='flex flex-nowrap border-b-10 rounded-b-2xl py-5 border-purple-900/30 shadow-xl shadow-gray-700/25 max-w-screen'>
        <img src={Logo} className='size-[50px] md:size-[75px]'></img>
        <h1 className='text-4xl md:text-6xl chewy-regular'>Post 'Most Anything</h1>
      </div>
      <div className='md:fixed md:left-0 border-b-5 md:border-r-5 md:min-h-screen min-w-[15rem] pt-10 border-purple-900/30 flex flex-row md:flex-col gap-10 md:overflow-y-scroll'>
          <span className='sidebarOptions'>Popular</span>
          <span className='sidebarOptions'>Recent</span>
          <span className='sidebarOptions'>Forums</span>
          <span className='sidebarOptions'>Q&A</span>
      </div>
    </div>
  )
}

export default App
