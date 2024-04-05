import { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Footer from './../component/Footer'

const Terms = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Container className='my-5'>
                <h2 className='text-center display-5'>Terms of Service</h2>
                <p className='text-center'>Last updated: April 05, 2024</p>
                {/* <p className='text-center'>Please read these terms of service carefully before using our service.</p> */}
                <div className='my-5'>
                    <h3 className='text-center my-5'>E-commerce Masters Practical Mentorship Program</h3>
                    <h4 className='my-3'>How to register yourself?</h4>
                    <ul>
                        <li>
                            To get registered in the Mentorship Program, kindly deposit or transfer the fee online using the bank details.
                        </li>
                        <li>
                            Refund Policy: A student will be able to get a 50% refund on their submitted fee if they demand one before the commencement of classes. In case the student attends a class, no refund will be given
                        </li>
                    </ul>
                </div>
            </Container>
            <Footer />
        </>
    )

}

export default Terms
