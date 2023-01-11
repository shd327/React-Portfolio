import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import bannerImg from '../../assets/img/dude.png'

// import Typewriter from 'typewriter-effect/dist/core';

// new Typewriter('#typewriter', {
//     strings: ['Hello', 'World'],
//     autoStart: true,
// });
export default function Banner() {
    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Sid Desai`} <span className='wrap'></span></h1>
                        <p>I love pizza very much pizza makes me stronger than stinky old broccoli</p>
                        <button onClick={() => console.log('connect')}>Let's Connect</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={bannerImg} alt="Header Img"></img>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}
