import React from 'react'
import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <Container id="about" fluid className="my-5 container-lg">
        <h2 className='text-center display-4 my-5'>About Us</h2>
        <div className='d-flex justify-content-center flex-wrap align-items-center mb-0 mb-md-3 mb-lg-5'>
            <div className='col-12 col-md-6 col-lg-4 text-center'>
                <img className='rounded shadow-lg landing-img' src='/pic1.jpg' alt='img' />
            </div>
            <div className='col-12 col-md-6 col-lg-6 d-flex align-items-center py-5 px-lg-5 px-3'>
                <div>
                    <h2 className='display-6 mb-4'>Hi I'm Faheem Ahmed</h2>
                    <p>The dynamic young multimillionaire and e-commerce guru, Faheem, possesses a savvy understanding of digital markets and a knack for success. Swiftly rising to the top of the online business world, his innovative strategies and entrepreneurial spirit make him a standout figure in the realm of e-commerce, inspiring others to follow in his footsteps.</p>
                    <div className='d-flex mt-4 gap-3'>
                        <a href='https://www.instagram.com/ecomw_sultann' target='_blank' className='text-dark me-3'>
                            <i className='fab fa-instagram fa-2x'></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='d-flex justify-content-center flex-wrap align-items-center'>
            <div className='col-12 col-md-6 col-lg-4 text-center'>
                <img className='rounded shadow-lg landing-img' src='/pic2.jpg' alt='img' />
            </div>
            <div className='col-12 col-md-6 col-lg-6 d-flex align-items-center py-5 px-lg-5 px-3'>
                <div>
                    <h2 className='display-6 mb-4'>Hi I'm Nouman Pervaiz</h2>
                    <p>As a professional crypto trader with three years of experience, I embarked on my crypto journey with just Rs-1500 PKR. Now, with the blessings of Allah, I am a multimillionaire. I am passionate about sharing my knowledge and experience to guide others on their journey to financial success in the world of cryptocurrency. Let me help you become a millionaire too.</p>
                    <div className='d-flex mt-4 gap-3'>
                        <a href='https://www.instagram.com/freedom_wth_nomi' target='_blank' className='text-dark me-3'>
                            <i className='fab fa-instagram fa-2x'></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default About
