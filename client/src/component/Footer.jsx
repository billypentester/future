import React from 'react'
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-light'>
        <Container>
        <footer className="page-footer font-small blue pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Logo</h5>
                        <p>Description</p>
                        <Link to="/apply">
                            <Button variant="primary"> Apply Now </Button>
                        </Link>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0"/>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Social Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Legal</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </div>

                </div>
            </div>
            <hr/>
            <div className="footer-copyright text-center py-3">
                © {new Date().getFullYear()} Copyright
                <span className="text-muted"> | </span>
                <a href="/"> future.com</a>
            </div>
        </footer>
        </Container>
    </div>
  )
}

export default Footer
