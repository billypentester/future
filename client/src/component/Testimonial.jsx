import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";

const Testimonial = () => {

    var link = [
        'https://www.youtube.com/embed/dqlO6_5rZSQ?si=b5p6bTZwHxF_CSfG',
        'https://www.youtube.com/embed/dqlO6_5rZSQ?si=b5p6bTZwHxF_CSfG',
        'https://www.youtube.com/embed/dqlO6_5rZSQ?si=b5p6bTZwHxF_CSfG'
    ]
    
    var pics = [
        '/s1.jpg',
        '/s2.jpg',
        '/s3.jpg',
        '/s4.jpg',
    ]

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div id="testimonial">
            <Container className='my-5'>
                <h2 className='my-5 text-center display-6'>Take a look at some of our 100+ successful student testimonials!</h2>
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
                <h2 className='my-5 text-center display-6'>Ready for a glimpse into your future ?</h2>
                <Slider {...settings}>
                    {
                        pics.map((pic, index) => {
                            return (
                                <div key={index} className=''>
                                    <img src={pic} alt="pic" className="slider-img mx-auto rounded shadow-lg" />
                                </div>
                            )
                        })
                    }
                </Slider>
            </Container>
        </div>
    )

}

export default Testimonial
