import {Badge, Col, Container, Form, Row} from "react-bootstrap"
import React, {Component} from "react";
import {ShopItemBase} from "./ShopItem.style";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import axios from 'axios';

interface IValues {
    [key: string]: any;
}

interface IFormState {
    id: string;
    product: any;
    values?: IValues[];
}

class ShopItem extends Component<RouteComponentProps<any>, IFormState> {

    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            product: {}
        }
    };

    componentDidMount(): void {
        axios.get(`http://localhost:9001/products/${this.state.id}`)
            .then(data => {
                this.setState({product: data.data})
            })
    }

    render() {
        console.log(this.state.id);
        const img = this.state.product.imgUrl;
        const products = this.state.product;
        console.log(products)


        return <ShopItemBase>
            {products.length === undefined && (<h1>Not Found</h1>)}
            <Container>
                <Row>

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        {products.imgUrl}

                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4>{this.state.product.name}</h4>
                        <hr/>
                        <h1>
                            <Badge variant="primary">$ {this.state.product.price}</Badge>
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

                    </div>
                </Row>

                <Row>
                    <Col md={6}></Col>

                    <Col md={6}></Col>
                </Row>
            </Container>}
        </ShopItemBase>
    }
};

export default withRouter(ShopItem);
