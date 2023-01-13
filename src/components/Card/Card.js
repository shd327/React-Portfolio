import React from 'react';
// import { View, Image, Text, StyleSheet } from "react-native";

import Button from 'react-bootstrap/Button';
import Cards from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
export default function Card(props) {
    const cardStyle = {
        width: '18rem',
    };

    // Helper function that generates a random width for our placeholder images


    return (
        <Container>
            <Row xs={1} md={3}>
                <Col>
                    <Cards style={{ width: '18rem' }}>
                        <Cards.Img variant="top" src={props.img} />
                        <Cards.Body>
                            <Cards.Title>{props.name}</Cards.Title>
                            <Cards.Text>
                                {props.description}
                            </Cards.Text>
                            <Button href={props.githubLink} variant="primary">Github</Button>
                        </Cards.Body>
                    </Cards>
                </Col>
            </Row>
        </Container>
        // <div className="container">
        //     <div className="card" style={cardStyle}>

        //         <div className="card-body">
        //             <h5 className="card-title">Name: {props.name}</h5>
        //             <p className="card-text">Description: {props.description}</p>
        //             <p className="card-text">ID: {props.githubLink}</p>
        //             <a href={props.githubLink} className="btn btn-primary">

        //             </a>
        //             <img src={props.img}
        //                 className="card-img-top"

        //                 alt="Card cap"
        //             />
        //         </div>
        //     </div>
        // </div>
    );
}
