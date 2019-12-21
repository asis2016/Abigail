import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {FourZeroFourBase} from "./404.style";


export const FourZeroFour = () => {
    return <FourZeroFourBase>
        <Container>
            <Row>
                <Col className={"text-center"}>
                    <h1>404 Not Found</h1>
                    <p>The page that you are looking for is not found.</p>
                </Col>
            </Row>
        </Container>
    </FourZeroFourBase>
}