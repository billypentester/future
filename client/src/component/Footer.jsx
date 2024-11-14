import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-light'>
        <Container>
        <footer className="pt-4">
            <div className="container text-center">
                <div className="row">
                    
                    <div className="col-md-6 mt-md-0 mb-3">
                        <img src='/logo.png' alt='logo' width='200' className='d-inline-block align-text-top' />
                        {/* <Link to="/apply">
                            <Button variant="primary my-2"> Apply Now </Button>
                        </Link> */}
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Social Links</h5>
                        <ul className="list-unstyled d-flex flex-column gap-2 my-4">
                            <li>
                                <a target='_blank' href="https://www.instagram.com/freedom_wth_nomi">Instagram</a>
                            </li>
                            <li>
                                <a target='_blank' href="https://youtu.be/lfgsrAqYbLA?si=eJcIIEbhzFwSnxd9">Youtube</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Legal</h5>
                        <ul className="list-unstyled d-flex flex-column gap-2 my-4">
                            <li>
                                <Link to="terms">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            
            <hr className='mb-0 mt-2'/>

            <div className="text-center py-4">
                <span>© {new Date().getFullYear()} Copyright</span>
                <span className="text-muted mx-1"> &#x2022; </span>
                <a className='underline-0' href="/"> future.com</a>
            </div>
        </footer>
        </Container>
    </div>
  )
}

export default Footer
