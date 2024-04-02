import {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { adminLogin } from './../api/admin/adminAPI'

const Login = () => {

    const [user, setState] = useState({
        email: '',
        password: ''
    })

    const isSubmitReady = () => {
        if (user.email === '' || user.password === '') {
            return true
        }
        return false
    }

    const login = async(e) => {
        e.preventDefault()
        console.log(user)
        let res = await adminLogin(user)
        localStorage.setItem('userToken', res.token)
        window.location.href = '/dashboard'
    }

    return (
        <div className='my-5'>
            <h2 className='text-center my-5'>Login</h2>
            <div className='d-flex'>
                <Col lg={5} md={7} sm={9} xs={11} className="mx-auto">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="Enter email" value={user.email} onChange={(e) => setState({...user, email: e.target.value})} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="Enter password" value={user.password} onChange={(e) => setState({...user, password: e.target.value})} />
                        </Form.Group>
                        <div className='d-grid my-5'>
                            <Button variant="primary" type="submit" disabled={isSubmitReady()} onClick={(e)=> login(e)}>
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Col>
            </div>
        </div>
        
    )

}

export default Login
