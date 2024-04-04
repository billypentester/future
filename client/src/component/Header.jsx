import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div id='home' className='bg-header-img' style={{height: '50vh'}}>
        <div className='overlay'>
            <div className='content'>
            <div className='text-center'>
                <h1 className='text-white display-2 d-none d-lg-block'>Tired of matrix?</h1>
                <h1 className='text-white display-5 d-lg-none d-block'>Tired of matrix?</h1>
                <h3 className='text-white my-2'>We are here to help you</h3>
                <button className='d-none d-lg-block btn btn-lg btn-primary mx-auto my-3'>
                  <Link className='text-white' to='/apply'>Enroll Now</Link>
                </button>
                <button className='d-lg-none d-block btn btn-primary mx-auto btn my-3'>
                  <Link className='text-white' to='/apply'>Enroll Now</Link>
                </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Header
