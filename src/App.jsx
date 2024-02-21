import React from 'react'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

function App() {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white flex font-[satoshi]'>
      <Sidebar/>
      <Content/>
    </div>
  )
}

export default App