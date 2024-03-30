import React from 'react'
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from './../component/Footer'

const Apply = () => {
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
                      <Form.Control type="text" placeholder="abc" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="text" placeholder="03xxxxxxxxx" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className='mb-2' lg={2} md={1} sm={1} xs={1}>
                  <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="abc@gmail.com" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                      <Form.Label>City</Form.Label>
                      <Form.Select aria-label="Default select example">
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
                      <Form.Check type={'radio'} id={`default-${'radio'}`} label={`Rs30,000 Live Classes + Rec + Student Sup`} />
                      <Form.Check type={'radio'} id={`default-${'radio'}`} label={`Rs30,000 Live Classes + Rec + Student Sup`} />
                      <Form.Check type={'radio'} id={`default-${'radio'}`} label={`Rs30,000 Live Classes + Rec + Student Sup`} />
                      <Form.Check type={'radio'} id={`default-${'radio'}`} label={`Rs30,000 Live Classes + Rec + Student Sup`} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                      <Form.Label>Timings</Form.Label>
                      <Form.Check type={'radio'} id={`default-${'radio'}`} label={`10:00am-12:00pm (Sat-Sun) 13th April`} />
                      <Form.Check type={'radio'} id={`default-${'radio'}`} label={`10:00am-12:00pm (Sat-Sun) 13th April`} />
                      <Form.Check type={'radio'} id={`default-${'radio'}`} label={`10:00am-12:00pm (Sat-Sun) 13th April`} />
                      <Form.Check type={'radio'} id={`default-${'radio'}`} label={`10:00am-12:00pm (Sat-Sun) 13th April`} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className='mb-2' lg={2} md={1} sm={1} xs={1}>
                  <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                      <Form.Label>Payment Method</Form.Label>
                      <Form.Check type={'radio'} id={`default-${'radio'}`} label={`Meezan Bank`} />
                      <Form.Check type={'radio'} id={`default-${'radio'}`} label={`JazzCash`} />
                      <Form.Check type={'radio'} id={`default-${'radio'}`} label={`SadaPay`} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Payment Screen Shot</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className='my-4'>
                  <Col>
                    <Form.Check type={'checkbox'} id={`default-${'radio'}`} label={'I agree to the terms and conditions'} />
                  </Col>
                </Row>
                <Row className='my-2'>
                  <Col className='d-grid'>
                    <Button className="secondary my-3 w-full btn-block"> Submit </Button>
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
