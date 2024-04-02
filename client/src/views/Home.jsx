import React from 'react'
import Footer from '../component/Footer'
import Testimonial from '../component/Testimonial'
import { Container } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div>
      <div className='bg-header-img' style={{height: '100vh'}}>
        <div className='overlay'>
          <div className='content'>
            <div>
              <h1 className='text-white display-2'>Tired of matrix?</h1>
              <h3 className='text-white'>We are here to help you</h3>
              <button className='btn btn-primary btn-lg my-3'>
                <Link className='text-white' to='/apply'>Get Started</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Container className="my-5">
        <div className='row'>
          <div className='col-6 d-flex align-items-center pe-5'>
            <div>
              <h2 className='display-6 mb-4'>Hi I'm Nouman Pervaiz</h2>
              <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.</p>
              <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.</p>
              <div className='d-flex mt-4 gap-3'>
                <a href='https://www.facebook.com' className='text-dark me-3'>
                  <i className='fab fa-facebook fa-2x'></i>
                </a>
                <a href='https://www.instagram.com' className='text-dark me-3'>
                  <i className='fab fa-instagram fa-2x'></i>
                </a>
                <a href='https://www.twitter.com' className='text-dark me-3'>
                  <i className='fab fa-twitter fa-2x'></i>
                </a>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <img className='img-fluid' src='/pic2.jpg' alt='img' />
          </div>
        </div>
      </Container>
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Home
