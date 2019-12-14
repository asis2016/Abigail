import React, {Component} from "react";
import {TrendingProductStyleOneBase} from "./TrendingProductStyleOne.style";
import {Card, Col, Container, Row} from "react-bootstrap";

const test = [1, 2, 3, 4];

class TrendingProductStyleOne extends Component {
    render() {
        return <TrendingProductStyleOneBase>

            <Container>
                <Row>
                    {test.map((i) =>
                        <Col>
                            <Card className="text-center">
                                <img className="card-img-top" src={require("../../assets/images/p1.jpg")} alt="Card image cap" />
                                <Card.Body>
                                    <p className="category">yoyo</p>
                                    <p className="name">Lorem Ipsum</p>
                                    <p className="price">$ 150.00</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </TrendingProductStyleOneBase>
    }
};

export default TrendingProductStyleOne;