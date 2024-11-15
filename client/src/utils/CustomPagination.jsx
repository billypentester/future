import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
import { Container, Modal, Button } from 'react-bootstrap';

const CustomPagination = ({ data, itemsPerPage }) => {

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const [show, setShow] = useState(false);
  const [link, setLink] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const previewScreenShot = (user) => {
    setLink(user.screenShot)
    handleShow()
  }

  return (
    <>
      <Table hover className="text-center" responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone No</th>
            <th>Email</th>
            <th>City</th>
            <th>Course</th>
            <th>Timing</th>
            <th>Payment Mode</th>
            <th>Screen Shot</th>
          </tr>
        </thead>
        <tbody className='align-middle'>
          {
            currentItems.length > 0 ? 
            currentItems.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.phoneNo}</td>
                  <td>{user.email}</td>
                  <td>{user.city}</td>
                  <td>{user.course ?  user.course.title : '-'}</td>
                  <td>{user.timing ? `${convertTimestamp(user.timing.date)} (${user.timing.startTime} - ${user.timing.endTime})` : '-'}</td>
                  <td>{user.paymentMode ? user.paymentMode.name : '-'}</td>
                  <td>
                    <Button className='btn-sm' onClick={()=>previewScreenShot(user)}>View</Button>
                  </td>
                </tr>
              )
            })
            :
            <tr>
              <td colSpan="9">No data found</td>
            </tr>
          }
        </tbody>
      </Table>
      <br />
      <div className='d-flex justify-content-end'>
        <Pagination>
          {
            Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, i) => (
              <Pagination.Item
                key={i + 1}
                active={i + 1 === currentPage}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            ))
          }
        </Pagination>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>ScreenShot</Modal.Title>
        </Modal.Header>
        <Modal.Body className='mx-auto'>
          <img src={link} alt="Screen Shot" className='img-fluid' />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomPagination;
