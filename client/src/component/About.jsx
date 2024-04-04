import React from 'react'
import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <Container id="about" fluid className="my-5 container-lg">
        <h2 className='text-center display-4 my-5'>About Us</h2>
        <div className='d-flex justify-content-center flex-wrap mb-0 mb-md-3 mb-lg-5'>
            <div className='col-12 col-md-6 col-lg-4'>
                <img className='rounded shadow-lg landing-img' src='/pic1.jpg' alt='img' />
            </div>
            <div className='col-12 col-md-6 col-lg-6 d-flex align-items-center py-5 px-lg-5 px-3'>
                <div>
                    <h2 className='display-6 mb-4'>Hi I'm Faheem Ahmed</h2>
                    <p className=''>The dynamic young multimillionaire and e-commerce guru. With a savvy understanding of digital markets and a knack for success, Faheem has swiftly risen to the top of the online business world. His innovative strategies and entrepreneurial spirit make him a standout figure in the realm of e-commerce, inspiring others to follow in his footsteps.</p>
                    <div className='d-flex mt-4 gap-3'>
                    <a href='https://www.instagram.com/ecomw_sultann' target='_blank' className='text-dark me-3'>
                        <i className='fab fa-instagram fa-2x'></i>
                    </a>
                    <a href='#' target='_blank' className='text-dark me-3'>
                        <i className='fab fa-whatsapp fa-2x'></i>
                    </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='d-flex flex-wrap justify-content-center'>
            <div className='col-12 col-md-6 col-lg-6 d-flex align-items-center py-5 px-lg-5 px-3'>
                <div>
                    <h2 className='display-6 mb-4'>Hi I'm Nouman Pervaiz</h2>
                    <p className=''>I am a professional crypto trader.I am trading from past 3 years. I start my crypto journey with just Rs-1500pkr Now with the blessing of Allah i am multimillionaire I am passionate to give my knowledge & experience of my journey & make you millionaire also</p>
                    <div className='d-flex mt-4 gap-3'>
                        <a href='https://www.instagram.com/freedom_wth_nomi' target='_blank' className='text-dark me-3'>
                            <i className='fab fa-instagram fa-2x'></i>
                        </a>
                        <a href='#' target='_blank' className='text-dark me-3'>
                            <i className='fab fa-whatsapp fa-2x'></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4'>
            <img className='rounded shadow-lg landing-img' src='/pic2.jpg' alt='img' />
            </div>
        </div>
    </Container>
  )
}

export default About
