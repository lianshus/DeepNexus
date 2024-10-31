import React, { useState } from 'react'
export default function Title() {
  const [title, setTitle] = useState('DeepSync')
  

  return (
    <div className="flex flex-col text-left w-full">
        <div className='text-4xl'>
        The the first on-chain analytics platform built on Walrus.
        </div>
        <div className='text-title text-nav'>
           {title} 
        </div>
        <div className='text-2xl'>
        Built on decentralized infrastructure, DeepSync delivers enterprise-grade analytics to drive project growth.
        </div>
        
    </div>
  )
}
