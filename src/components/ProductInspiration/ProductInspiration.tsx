import {Col, Row} from "react-bootstrap";
import React from "react";
import {ProductInspirationBase} from "./ProductInspiration.style";

const yo = [
    {
        id: 1,
        imgUrl: 'fi-14.jpg',
        title: 'At veros'
    },
    {
        id: 2,
        imgUrl: 'fi-17.jpg',
        title: 'At veros'
    },
    {
        id: 3,
        imgUrl: 'fi-5.jpg',
        title: 'At veros'
    },
    {
        id: 4,
        imgUrl: 'fi-10.jpg',
        title: 'At veros'
    }
];

export const ProductInspiration = () => {
    return <ProductInspirationBase>
        <Row>
            <Col>
                <h1>More Inspiration</h1>
            </Col>
        </Row>
        <Row className="row-two">
            {yo.map((i) =>
                <Col style={{backgroundImage: 'url(' + require('../../assets/images/blog/' + i.imgUrl) + ')'}}>

                    <div className="caption">
                        <h2>{i.title}</h2>
                    </div>

                </Col>
            )}
        </Row>
    </ProductInspirationBase>
}