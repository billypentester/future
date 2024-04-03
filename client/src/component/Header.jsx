import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-header-img' style={{height: '100vh'}}>
        <div className='overlay'>
            <div className='content'>
            <div>
                <h1 className='text-white display-2'>Tired of matrix?</h1>
                <h3 className='text-white'>We are here to help you</h3>
                <button className='btn btn-primary btn-lg my-3'>
                <Link className='text-white' to='/apply'>Enroll Now</Link>
                </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Header
