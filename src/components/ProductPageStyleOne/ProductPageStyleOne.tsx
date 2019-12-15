import React, {Component} from "react";
import {Card, Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {ProductPageStyleOneBase} from "./ProductPageStyleOne.style";


class ProductPageStyleOne extends Component {
    render() {
        return <ProductPageStyleOneBase>
            <Container fluid>

                <Row>


                    <div className="col-2">
                        <div className="card">
                            <img className="card-img"
                                 src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png"
                                 alt="Vans"/>
                            <div className="card-img-overlay d-flex justify-content-end">
                                <a href="#" className="card-link text-danger like">
                                    <i className="fas fa-heart"></i>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Vans Sk8-Hi MTE Shoes</h4>
                                <h6 className="card-subtitle mb-2 text-muted">Style: VA33TXRJ5</h6>

                                <div className="options d-flex flex-fill">
                                    <select className="custom-select mr-1">
                                        <option selected>Color</option>
                                        <option value="1">Green</option>
                                        <option value="2">Blue</option>
                                        <option value="3">Red</option>
                                    </select>
                                    <select className="custom-select ml-1">
                                        <option selected>Size</option>
                                        <option value="1">41</option>
                                        <option value="2">42</option>
                                        <option value="3">43</option>
                                    </select>
                                </div>
                                <div className="buy d-flex justify-content-between align-items-center">
                                    <div className="price text-success"><h5 className="mt-4">$125</h5></div>
                                    <a href="#" className="btn btn-danger mt-3"><i
                                        className="fas fa-shopping-cart"></i> Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </Row>

            </Container>
        </ProductPageStyleOneBase>
    }
};

export default ProductPageStyleOne;