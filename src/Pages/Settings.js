import React from 'react'
import ToggleButton from '../components/ToggleBotton'
import { Link } from 'react-router-dom'

const Settings = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <h1 className=' text-2xl  md:text-4xl dark:text-teal-500'>Made with ❤️ by Jyoti Km </h1>
        <Link to='https://jyoti-km.vercel.app/' className=' text-2xl  md:text-4xl dark:text-teal-500'>Portfolio</Link>
    </div>
  )
}

export default Settings
