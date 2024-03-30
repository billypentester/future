import { useEffect, useState } from 'react'
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap'
import Footer from './../component/Footer'
import axios from './../config'

const Apply = () => {

  const [data, setData] = useState({
    paymentModes: [],
    courses: [],
    timings: []
  })

  const [user, setUser] = useState({
    name: '',
    phoneNo: '',
    email: '',
    city: '',
    course: '',
    timing: '',
    paymentMode: '',
    screenShot: ''
  })

  const getAllOptions = async() => {
    try {
      const response = await axios.get('web/payment')
      setData({
        ...data,
        paymentModes: response.data
      })
    }
    catch (error) {
      console.log(error)
    }
  }

  const submitUserData = async() => {
    try {
      let data = new FormData();
      data.append('name', user.name)
      data.append('phoneNo', user.phoneNo)
      data.append('email', user.email)
      data.append('city', user.city)
      data.append('course', user.course)
      data.append('timing', user.timing)
      data.append('paymentMode', user.paymentMode)
      data.append('ssFile', user.screenShot)
      const response = await axios.post('web/user', data)
      console.log(response)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    getAllOptions()
  }, [])

  return (
    <div className=''>
      <Container className='py-5'>
        <Card className=' border-1 border-primary'>
          <Card.Header className='py-3 text-center bg-primary text-white'>
            <h3>Apply Now</h3>
            <p className='text-white mb-0'>Fill the form below to apply for the course</p>
          </Card.Header>
          <Card.Body className='px-2 py-4 px-md-5 bg-light rounded'>
            <Container>
              {/* <Link to='/'>
                <Button variant="secondary my-3"> Back to Home </Button>
              </Link> */}
              <Form className='py-3'>
                <Row className='mb-2' lg={2} md={1} sm={1} xs={1}>
                  <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="abc" onChange={(e) => setUser({ ...user, name: e.target.value })} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="text" placeholder="03xxxxxxxxx" onChange={(e) => setUser({ ...user, phoneNo: e.target.value })} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className='mb-2' lg={2} md={1} sm={1} xs={1}>
                  <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="abc@gmail.com" onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                      <Form.Label>City</Form.Label>
                      <Form.Select aria-label="Default select example" onChange={(e) => setUser({ ...user, city: e.target.value })}>
                        <option>Select City</option>
                        <option value="Lahore">Lahore</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className='mb-2' lg={2} md={1} sm={1} xs={1}>
                  <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                      <Form.Label>Courses</Form.Label>
                      <Form.Check type={'radio'} id={`default-${'radio'}`} label={`Rs30,000 Live Classes + Rec + Student Sup`} onChange={(e) => setUser({ ...user, course: e.target.value })} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                      <Form.Label>Timings</Form.Label>
                      <Form.Check type={'radio'} id={`default-${'radio'}`} label={`10:00am-12:00pm (Sat-Sun) 13th April`} onChange={(e) => setUser({ ...user, timing: e.target.value })} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className='mb-2' lg={2} md={1} sm={1} xs={1}>
                  <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                      <Form.Label>Payment Method</Form.Label>
                      {
                        data.paymentModes.map((item, index) => (
                          <>
                            <Form.Check key={index} type={'radio'} id={`default-mode-${index}`} label={item.name} name={'paymentMode'} value={item._id} onChange={(e) => setUser({ ...user, paymentMode: e.target.value })} />
                          </>
                        ))
                      }
                      {
                        user.paymentMode ? 
                          data.paymentModes.filter(item => item._id === user.paymentMode).map((item, index) => (
                            <h6 key={index} className="my-3 text-danger">
                              {`Send fee in ${item.name} to this number: ${item.number}`}
                            </h6>
                          ))
                        : 
                          null
                      }
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Payment Screen Shot</Form.Label>
                      <Form.Control type="file" onChange={(e) => setUser({ ...user, screenShot: e.target.files[0] })} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className='my-4'>
                  <Col>
                    <Form.Check type={'checkbox'} id={`default-terms`} label={'I agree to the terms and conditions'} />
                  </Col>
                </Row>
                <Row className='my-2'>
                  <Col className='d-grid'>
                    <Button className="secondary my-3 w-full btn-block" onClick={submitUserData}>Submit</Button>
                  </Col>
                </Row>
              </Form>
            </Container>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </div>
  )
}

export default Apply
