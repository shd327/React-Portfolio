
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Container, Row, Col } from 'react-bootstrap'

export default function Skills() {
    const responsive = {
        superLargeDesktop: {

            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                            {/* <Container style={{ width: 200, height: 200 }}> */}
                            <Row className='align-items-center' style={{ width: 200, height: 200 }}>
                                <Col xs={12} md={6} xl={7}>

                                    <CircularProgressbar class="circle" value={80} text={'react'} />


                                </Col>
                                <Col>
                                    <CircularProgressbar class="circle" value={80} text={'react'} />
                                </Col>
                                <Row>
                                    <Col xs={12} md={6} xl={7}>

                                        <CircularProgressbar class="circle" value={80} text={'react'} />


                                    </Col>
                                </Row>
                            </Row>

                            {/* </Container> */}


                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={'colorSharp'} alt="Image" />
        </section >
    )
}