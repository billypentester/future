import { useEffect, useState } from 'react'
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap'
import Footer from './../component/Footer'
import { createUser, getPaymentModes } from './../api/web/webAPI'
import { getContent } from './../api/admin/adminAPI'
import { toast, ToastContainer } from 'react-toastify'

const Apply = () => {

  const [data, setData] = useState({
    paymentModes: [],
    timing: [],
    course: []
  })

  const [terms, setTerms] = useState(false)

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
      const data = await getContent()
      setData({
        paymentModes: data.paymentData,
        timing: data.timingData,
        course: data.courseData
      })
    }
    catch (error) {
      console.log(error)
    }
  }

  function convertTimestamp(timestamp) {
    const date = new Date(timestamp);
  
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const monthName = monthNames[monthIndex];

    const formattedDate = `${day} ${monthName} ${year}`;

    return formattedDate;
  }

  const timeTo24h = (time) => {
    const [hours, minutes] = time.split(':')
    return `${hours % 12 || 12}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`
  }


  const submitUserData = async() => {
    try {
      await createUser(user)
      setUser({ name: '', phoneNo: '', email: '', city: '', course: '', timing: '', paymentMode: '', screenShot: '' })
      toast.info("We've received your application. We'll get back to you soon.");
    }
    catch (error) {
      console.log(error)
    }
  }

  const IsFormReady = () => {
    if (user.name === '' || user.phoneNo === '' || user.email === '' || user.city === '' || user.course === '' || user.timing === '' || user.paymentMode === '' || user.screenShot === '' || terms === false) {
      return true
    }
    return false
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
              <Form className='py-3'>
                <Row className='mb-2' lg={2} md={1} sm={1} xs={1}>
                  <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" onChange={(e) => setUser({ ...user, name: e.target.value })} />
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
                      {
                        data.course.map((item, index) => (
                          <Form.Check key={index} type={'radio'} id={`default-course-${index}`} label={`${item.title} : Rs. ${item.fee}`} name={'course'} value={item._id} onChange={(e) => setUser({ ...user, course: e.target.value })} />
                        ))
                      }
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                      <Form.Label>Timings</Form.Label>
                      {
                        data.timing.map((item, index) => (
                          <Form.Check key={index} type={'radio'} id={`default-timing-${index}`} label={`${timeTo24h(item.startTime)} - ${timeTo24h(item.endTime)} : (${convertTimestamp(item.date)})`} name={'timing'} value={item._id} onChange={(e) => setUser({ ...user, timing: e.target.value })} />
                        ))
                      }
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
                      <Form.Control type="file" accept="image/png, image/gif, image/jpeg, image/jpg" onChange={(e) => setUser({ ...user, screenShot: e.target.files[0] })} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className='my-4'>
                  <Col>
                    <Form.Check type={'checkbox'} id={`default-terms`} checked={terms} label={'I agree to the terms and conditions'} onChange={(e) => setTerms(e.target.checked)} />
                  </Col>
                </Row>
                <Row className='my-2'>
                  <Col className='d-grid'>
                    <Form.Text className="text-muted text-center">
                      Your Payment will be verified by our team so whatsapp it as well at +92 333 1234567
                    </Form.Text>
                  </Col>
                </Row>
                <Row className='my-2'>
                  <Col className='d-grid'>
                    <Button className="secondary my-3 w-full btn-block" disabled={IsFormReady()} onClick={submitUserData}>Submit</Button>
                  </Col>
                </Row>
              </Form>
            </Container>
          </Card.Body>
        </Card>
      </Container>
      <ToastContainer 
        position="top-center"
        theme="colored"
        hideProgressBar={true}
        closeOnClick={true}
        autoClose={3000}
      />
      <Footer />
    </div>
  )
}

export default Apply
