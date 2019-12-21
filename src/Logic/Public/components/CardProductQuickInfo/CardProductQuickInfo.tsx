import React, {FC, useEffect} from "react";
import {Badge, Col, Form, Row} from "react-bootstrap";
import {faIcon} from "../../Assets/style/style";
import {CardProductQuickInfoBase} from "./CardProductQuickInfo.style";
import axios from 'axios';

interface IProps {
    id: string;
    title: string;
    price: string;
    dealPrice: string;
    size: string;
    color: string;
    sku: string;
    img: string;
    category: string;
    closePopup: any;
}

export const CardProductQuickInfo: FC<IProps> = (props) => {

    return <CardProductQuickInfoBase>
        <div className="container">
            <Row>
                <Col md={{span: 7, offset: 2}}>
                    <div className="card">
                        <div className="card-header">
                            <h3>{props.title.substring(0,60)}</h3>
                            <span className="close-popup">
                                <i className={faIcon.close} onClick={props.closePopup}></i>
                            </span>
                        </div>
                        <div className="card-body">
                            <Row>
                                <div className="col-lg-6 pr-5 pt-2 d-flex justify-content-center">
                                    <div className="product-img">
                                    </div>
                                </div>

                                <div className="col-lg-6 pr-5 pt-2">
                                    <h1>
                                        <Badge variant="primary">$ {props.price}</Badge>
                                    </h1>

                                    <Form>
                                        <Form.Group as={Row}>
                                            <Form.Label column sm="4">
                                                Size
                                            </Form.Label>
                                            <Col sm="8">
                                                {props.size}
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row}>
                                            <Form.Label column sm="4">
                                                Color
                                            </Form.Label>
                                            <Col sm="8">
                                                {props.color}
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row}>
                                            <Form.Label column sm="4">
                                                SKU
                                            </Form.Label>
                                            <Col sm="8">
                                                {props.sku}
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row}>
                                            <Form.Label column sm="4">
                                                Product Code
                                            </Form.Label>
                                            <Col sm="8">
                                                {props.id + `000` + props.sku}
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row}>
                                            <Form.Label column sm="4">
                                                Category
                                            </Form.Label>
                                            <Col sm="8">
                                                {props.category}
                                            </Col>
                                        </Form.Group>
                                    </Form>

                                    <hr/>
                                    <button className="btn btn-sm btn-primary">
                                        <i className={faIcon.cart}></i> Add to Cart
                                    </button>
                                    <button className="btn btn-sm btn-secondary ml-2">
                                        <i className={faIcon.heart}></i> Wishlist
                                    </button>

                                </div>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>

        </div>
    </CardProductQuickInfoBase>
};