import React from 'react'
import Header from './Header'
import FlashCards from './FlashCards'

function HomePage() {
  return (
    <>
    <Header />
    <FlashCards />
    {/* <div className='flex flex-col items-center justify-center m-8'>
      <h1 className='text-4xl font-bold mb-4'>Welcome to Flash Cards!</h1>
      <p className='text-lg mb-8'>A simple flash card app to help you learn new things.</p>
      <button className='bg-blue-500 text-white px-4 py-2 rounded'>Get Started</button>
    </div> */}
    </>
    
  )
}

export default HomePage
