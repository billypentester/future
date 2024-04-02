import React from 'react'
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-light'>
        <Container>
        <footer className="pt-4">
            <div className="container-fluid text-center">
                <div className="row">
                    
                    <div className="col-md-6 mt-md-0 mb-3">
                        <h5 className="text-uppercase">Logo</h5>
                        <Link to="/apply">
                            <Button variant="primary my-2"> Apply Now </Button>
                        </Link>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Social Links</h5>
                        <ul className="list-unstyled d-flex flex-column gap-2 my-4">
                            <li>
                                <Link to="#">Facebook</Link>
                            </li>
                            <li>
                                <Link to="#">Instagram</Link>
                            </li>
                            <li>
                                <Link to="#">Youtube</Link>
                            </li>
                            <li>
                                <Link to="#">TikTok</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Legal</h5>
                        <ul className="list-unstyled d-flex flex-column gap-2 my-4">
                            <li><a href="#!">Terms & Conditions</a></li>
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
