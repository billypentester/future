import React from 'react'
import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <Container id="about" fluid className="my-5 container-lg">
        <h2 className='text-center display-4 my-5'>About Us</h2>
    {/* <div className='d-flex justify-content-center flex-wrap align-items-center mb-0 mb-md-3 mb-lg-5'>
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
        </div> */}
        <div className='d-flex justify-content-center flex-wrap align-items-center'>
            <div className='col-12 col-md-6 col-lg-4 text-center'>
                <img className='rounded shadow-lg landing-img' src='/pic2.jpg' alt='img' />
            </div>
            <div className='col-12 col-md-6 col-lg-6 d-flex align-items-center py-5 px-lg-5 px-3'>
                <div>
                    <h2 className='display-6 mb-4'>Welcome to The Freedom University</h2>
                    <p>I’m Nouman Pervaiz, a professional cryptocurrency trader with over six years of experience in the financial markets. My journey began with a modest investment of just PKR 1,500, and through unwavering dedication and strategic trading, I’ve built a multimillion-dollar portfolio—by the grace of Allah.</p>
                    <br />
                    <p>I’m deeply passionate about helping others unlock their full potential in the world of cryptocurrency. Through my mentorship, I provide personalized, results-driven guidance to aspiring traders, empowering you to take control of your financial future.</p>
                    <br />
                    <p>At The Freedom University, we don’t just teach trading—we transform lives. Whether you’re just starting out or looking to elevate your trading skills, I’ll be by your side, sharing the proven strategies and insights that helped me achieve financial freedom.</p>
                    <br />
                    <p>Ready to take the next step? Let’s work together to turn your financial aspirations into reality.</p>
                    <br />
                    <p>Join me today and start your journey toward success in the cryptocurrency world.</p>
                    <div className='d-flex mt-4 gap-3'>
                        <a href='https://www.instagram.com/freedom_wth_nomi' target='_blank' className='text-dark me-3'>
                            <i className='fab fa-instagram fa-2x'></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='d-flex justify-content-center my-5'>
            <iframe 
                className='shadow-lg rounded'
                // style={{width: '70%', height: '520px'}}
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/lfgsrAqYbLA?si=ORdjgICUGg0WxL7w" 
                title="Crypto Trading" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
            >
            </iframe>
        </div>
    </Container>
  )
}

export default About
