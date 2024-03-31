import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import { imageURL } from './../config'

const CustomPagination = ({ data, itemsPerPage }) => {

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container className="my-5">
      <Table bordered hover className="text-center">
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
        <tbody>
          {
            currentItems.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.phoneNo}</td>
                  <td>{user.email}</td>
                  <td>{user.city}</td>
                  <td>{user.course}</td>
                  <td>{user.timing}</td>
                  <td>{user.paymentMode.name}</td>
                  <td><a href={`${imageURL}${user.screenShot}`} target="_blank" rel="noreferrer">View</a></td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
      <br />
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
    </Container>
  );
};

export default CustomPagination;
