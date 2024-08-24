import React from 'react'
import { Link } from 'react-router-dom'
import ReusabelDisplay from './ReusabelDisplay'

const LandiingPage = () => {
  return (
    <div className='text-center mt-5 pt-5'>
        <h1 className='text-center text-danger'>Welcome to My Landing page </h1>
        <Link to="/login"><button className='btn btn-warning'>Click Me</button></Link>

        <ReusabelDisplay />
    </div>
  )
}

export default LandiingPage