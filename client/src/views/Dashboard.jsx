import { useState, useEffect } from 'react'
import { getUsers } from '../api/admin/adminAPI'
import { Container } from 'react-bootstrap';
import CustomPagination from '../utils/CustomPagination'

const Dashboard = () => {

  const [users, setUsers] = useState([])

  const itemsPerPage = 10;

  const fetchData = async() => {
    const data = await getUsers()
    setUsers(data)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    let token = window.localStorage.getItem('userToken')
    if(token) {
      fetchData()
    }
    else {
      window.location.href = '/login'
    }
  }, [])

  return (
    <Container className="my-5">
      <h2 className='text-center my-5'>Users</h2>
      <CustomPagination data={users} itemsPerPage={itemsPerPage} />
    </Container>
  )
}

export default Dashboard
