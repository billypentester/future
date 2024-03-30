import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Testimonial = () => {

    var link = [
        'https://www.youtube.com/embed/dqlO6_5rZSQ?si=b5p6bTZwHxF_CSfG',
        'https://www.youtube.com/embed/dqlO6_5rZSQ?si=b5p6bTZwHxF_CSfG',
        'https://www.youtube.com/embed/dqlO6_5rZSQ?si=b5p6bTZwHxF_CSfG',
        'https://www.youtube.com/embed/dqlO6_5rZSQ?si=b5p6bTZwHxF_CSfG',
        'https://www.youtube.com/embed/dqlO6_5rZSQ?si=b5p6bTZwHxF_CSfG',
        'https://www.youtube.com/embed/dqlO6_5rZSQ?si=b5p6bTZwHxF_CSfG',
    ]
    
    var pics = [
        '/sample.jpg',
        '/sample.jpg',
        '/sample.jpg',
        '/sample.jpg',
        '/sample.jpg',
        '/sample.jpg',
        '/sample.jpg',
        '/sample.jpg',
    ]

    return (
        <div id="testimonial">
            <Container className='my-5'>
                <h2 className='my-5 text-center'>Take a look at some of our 100+ successful student testimonials!</h2>
                <Row className="g-1" xs={1} md={2} lg={3}>
                {
                    link.map((link, index) => {
                    return (
                        <Col>
                            <iframe className="rounded shadow-sm" key={index} width={'100%'} height="400" src={link} title="YouTube videos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                            </iframe>
                        </Col>
                    )
                    })
                }
                </Row>
            </Container>
            <Container className='my-5'>
                <h2 className='my-5 text-center'>Ready for a glimpse into your future ?</h2>
                <Row className="g-1 justify-content-center row-cols-4">
                {
                    pics.map((link, index) => {
                    return (
                        <Col>
                            <img width={'100%'} className="rounded shadow-sm" key={index} src={link} alt="sample" />
                        </Col>
                    )
                    })
                }
                </Row>
            </Container>
        </div>
    )

}

export default Testimonial
