import React, { useState } from 'react'
export default function Title() {
  const [title, setTitle] = useState('Deep Nexus')
  

  return (
    <div className="flex flex-col text-left w-full">
        <div className='text-4xl'>
        The the first on-chain analytics platform built on Walrus.
        </div>
        <div className='text-title text-nav'>
           {title} 
        </div>
        <div className='text-2xl'>
        Built on Walrus, Deep Nexus delivers secure data storage and seamless service integration
        </div>
        
    </div>
  )
}
