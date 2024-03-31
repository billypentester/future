import { useState, useEffect } from 'react'
import { Container, Table, Tabs, Tab, Modal } from 'react-bootstrap'
import { getContent, addPaymentMode, deletePaymentMode, updatePaymentMode, addCourse, deleteCourse, updateCourse, addTiming, deleteTiming, updateTiming } from '../api/admin/adminAPI'

const Content = () => {

  const [content, setContent] = useState({
    paymentData: [],
    timingData: [],
    courseData: []
  })

  const [key, setKey] = useState('course');
  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState('')

  const [addPaymentData, setAddPaymentData] = useState({ name: '', number: '' })
  const [updatePaymentData, setUpdatePaymentData] = useState({ name: '', number: '' })

  const [addCourseData, setAddCourseData] = useState({ title: '', fee: '' })
  const [updateCourseData, setUpdateCourseData] = useState({ title: '', fee: '' })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchData = async () => {
    const data = await getContent()
    setContent(data)
  }

  const addPayment = async (e) => {
    e.preventDefault()
    await addPaymentMode(addPaymentData)
    handleClose()
    fetchData()
  }

  const deletePayment = async (id) => {
    await deletePaymentMode(id)
    fetchData()
  }

  const updatePayment = async (e) => {
    e.preventDefault()
    await updatePaymentMode(updatePaymentData)
    handleClose()
    fetchData()
  }

  const addCourseInfo = async (e) => {
    e.preventDefault()
    await addCourse(addCourseData)
    handleClose()
    fetchData()
  }

  const deleteCourseInfo = async (id) => {
    await deleteCourse(id)
    fetchData()
  }

  const updateCourseInfo = async (e) => {
    e.preventDefault()
    await updateCourse(updateCourseData)
    handleClose()
    fetchData()
  }

  const openModal = async (data, dataToBeUpdated) => {
    if(data == 'updatePayment') {
      setUpdatePaymentData(dataToBeUpdated)
    }
    else if(data == 'updateCourse') {
      setUpdateCourseData(dataToBeUpdated)
    }
    else {
      setModalType(data)
    }
    setModalType(data)
    handleShow()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container className="my-5">
      <h2 className='text-center my-5'>Content</h2>
      <Tabs id="ct" activeKey={key} justify onSelect={(k) => setKey(k)} className="mb-3 bg-light">
        <Tab eventKey="course" title="Courses">
          <div className='my-5'>
            <div className='d-flex justify-content-between'>
              <h3 className='text-center'>Courses</h3>
              <button className='btn btn-primary' onClick={()=> openModal('addCourse')}>Add Course</button>
            </div>
            <hr className='my-2' />
            <Table hover className="text-center" responsive="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Fee</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className='align-middle'>
                {
                  content.courseData.map((course, index) => (
                    <tr key={course._id}>
                      <td>{index + 1}</td>
                      <td>{course.title}</td>
                      <td>{course.fee}</td>
                      <td>
                        <button className='btn btn-warning' onClick={()=> openModal('updateCourse', course)}>Edit</button>
                        <button className='btn btn-danger mx-2' onClick={()=> deleteCourseInfo(course._id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </div>
        </Tab>
        <Tab eventKey="payment" title="Payment">
          <div className='p-3'>
            <div className='d-flex justify-content-between'>
              <h3 className='text-center'>Payment Modes</h3>
              <button className='btn btn-primary' onClick={()=> openModal('addPayment')}>Add Payment Mode</button>
            </div>
            <hr className='my-2' />
            <Table hover className="text-center" responsive="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Number</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className='align-middle'>
                {
                  content.paymentData.map((payment, index) => (
                    <tr key={payment._id}>
                      <td>{index + 1}</td>
                      <td>{payment.name}</td>
                      <td>{payment.number}</td>
                      <td>
                        <button className='btn btn-warning' onClick={()=> openModal('updatePayment', payment)}>Edit</button>
                        <button className='btn btn-danger mx-2' onClick={()=> deletePayment(payment._id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </div>
        </Tab>
        <Tab eventKey="timing" title="Timing">
          <div className='p-3'>
            <div className='d-flex justify-content-between'>
              <h3 className='text-center'>Payment Modes</h3>
              <button className='btn btn-primary' onClick={()=> openModal('addPayment')}>Add Payment Mode</button>
            </div>
            <hr className='my-2' />
            <Table hover className="text-center" responsive="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Number</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className='align-middle'>
                {
                  content.paymentData.map((payment, index) => (
                    <tr key={payment._id}>
                      <td>{index + 1}</td>
                      <td>{payment.name}</td>
                      <td>{payment.number}</td>
                      <td>
                        <button className='btn btn-warning' onClick={()=> openModal('updatePayment', payment)}>Edit</button>
                        <button className='btn btn-danger mx-2' onClick={()=> deletePayment(payment._id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </div>
        </Tab>
      </Tabs>
      
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {
              modalType === 'addPayment' ? 
                'Add Payment Mode' 
              :
              modalType === 'updatePayment' ? 
                'Update Payment Mode'
              :
              modalType === 'addCourse' ? 
                'Add Course'
              :
              modalType === 'updateCourse' ? 
                'Update Course'
              :
                'Add Timing'
            }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            modalType === 'addPayment' ? 
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" name="name" placeholder="Name" onChange={(e)=> setAddPaymentData({...addPaymentData, name: e.target.value})} />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="number">Number</label>
                  <input type="text" className="form-control" id="number" name="number" placeholder="Number" onChange={(e)=> setAddPaymentData({...addPaymentData, number: e.target.value})} />
                </div>
                <div className='d-grid'>
                  <button type="submit" className="btn btn-primary" onClick={addPayment}>Submit</button>
                </div>
              </form>
            :
            modalType === 'updatePayment' ? 
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" name="name" placeholder="Name" value={updatePaymentData.name} onChange={(e)=> setUpdatePaymentData({...updatePaymentData, name: e.target.value})} />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="number">Number</label>
                  <input type="text" className="form-control" id="number" name="number" placeholder="Number" value={updatePaymentData.number} onChange={(e)=> setUpdatePaymentData({...updatePaymentData, number: e.target.value})} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={updatePayment}>Submit</button>
              </form>
            :
            modalType === 'addCourse' ? 
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="name">Title</label>
                  <input type="text" className="form-control" id="name" name="title" placeholder="Title" onChange={(e)=> setAddCourseData({ ...addCourseData, title: e.target.value })} />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="number">Fee</label>
                  <input type="text" className="form-control" id="number" name="fee" placeholder="Fee" onChange={(e)=> setAddCourseData({ ...addCourseData, fee: e.target.value })} />
                </div>
                <div className='d-grid'>
                  <button type="submit" className="btn btn-primary" onClick={addCourseInfo}>Submit</button>
                </div>
              </form>
            :
            modalType === 'updateCourse' ? 
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="name">Title</label>
                  <input type="text" className="form-control" id="name" name="title" value={updateCourseData.title} placeholder="Title" onChange={(e)=> setUpdateCourseData({...updateCourseData, title: e.target.value})} />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="number">Fee</label>
                  <input type="text" className="form-control" id="number" name='fee' value={updateCourseData.fee} placeholder="Fee" onChange={(e)=> setUpdateCourseData({...updateCourseData, fee: e.target.value})} />
                </div>
                <div className='d-grid'>
                  <button type="submit" className="btn btn-primary" onClick={updateCourseInfo}>Submit</button>
                </div>
              </form>
            :
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="number">Number</label>
                  <input type="text" className="form-control" id="number" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
          }
        </Modal.Body>
      </Modal>
    </Container>
  )
}

export default Content
