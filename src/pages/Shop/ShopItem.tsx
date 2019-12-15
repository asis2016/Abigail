import {Badge, Col, Container, Form, Row} from "react-bootstrap"
import React from "react";


export const ShopItem =()=>{

    return <Container>
        <Row>

            <Col md={6}>
                <img src={require('../../assets/images/p2.jpg')} alt=""/>
            </Col>

            <Col md={6}>
                <h4>Product Title</h4>
                <hr/>
                <h1>
                    <Badge variant="primary">$ 12.99</Badge>
                </h1>

                <Form>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Model
                        </Form.Label>
                        <Col sm="10">
                            Lorem Ipsum is the product name.
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm="2">
                            Description
                        </Form.Label>
                        <Col sm="10">
                            Lorem Ipsum is the product name.
                            Lorem Ipsum is the product name.
                            Lorem Ipsum is the product name.
                            Lorem Ipsum is the product name.
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Model
                        </Form.Label>
                        <Col sm="10">
                            Lorem Ipsum is the product name.
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Model
                        </Form.Label>
                        <Col sm="10">
                            Lorem Ipsum is the product name.
                        </Col>
                    </Form.Group>
                </Form>

                <hr/>
                <button className="btn btn-primary">Add to Cart</button>

            </Col>
        </Row>

        <Row>
            <Col md={6}></Col>

            <Col md={6}></Col>
        </Row>
    </Container>
}