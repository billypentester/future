import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Header = () => {

  const [showBackground, setShowBackground] = useState(false)
  const TOP_OFFSET = 100;
  const location = useLocation();

  const logout = () => {
    window.localStorage.removeItem('userToken')
    window.location.href = '/login'
  }

  const isHome = () => {
    return location.pathname === '/'
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true)
      } 
      else {
        setShowBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className={`${isHome() ? 'header-navbar' : ''}`}>
      <Navbar collapseOnSelect expand={'lg'} className={`${(isHome() && !showBackground) ? 'bg-transparent' : 'bg-light' }`}>
        <Container>
          <Navbar.Brand as={Link} to="/" className='text-primary m-0 p-0'>
            <img src="/logo.png" alt="logo" width="100" className="d-inline-block align-top" />
          </Navbar.Brand>
          {
            isHome() ?
              <>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className={`${(isHome() && !showBackground) ? 'bg-light opacity-50' : ''}`} />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ms-auto gap-2 px-4 px-lg-0 mt-2 mt-lg-0 gap-lg-5">
                    <Nav.Link className={`${(isHome() && !showBackground) ? 'text-white' : ''}`} href="#home">Home</Nav.Link>
                    <Nav.Link className={`${(isHome() && !showBackground) ? 'text-white' : ''}`} href="#about">About</Nav.Link>
                    <Nav.Link className={`${(isHome() && !showBackground) ? 'text-white' : ''}`} href="#testimonial">Testimonial</Nav.Link>
                    {/* <Nav.Link className={`${(isHome() && !showBackground) ? 'text-white' : ''}`} href="#team">Team</Nav.Link> */}
                  </Nav>
                </Navbar.Collapse>
              </>
            :
            location.pathname === '/dashboard' || location.pathname === '/content' ?
              <>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ms-auto gap-1 gap-lg-5">
                    <Nav.Link as={Link} to="/dashboard">Users</Nav.Link>
                    <Nav.Link as={Link} to="/content">Content</Nav.Link>
                    <Nav.Link onClick={()=> logout()}>
                      <span className='text-danger'>Logout</span>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </>
            :
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                <Button>Back to Home</Button>
              </Nav.Link>
            </Nav>
          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
