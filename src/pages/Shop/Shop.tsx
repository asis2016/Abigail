import React, {Component} from "react";
import {Button, Card, Col, Container, ListGroup, Row} from "react-bootstrap";
import {APICollection} from "../../server/config";
import {BreadCrumb} from "../../components/BreadCrumb/BreadCrumb";
import JumboTron from "../../components/JumboTron/JumboTron";
import {Link, RouteComponentProps, withRouter} from "react-router-dom";
import axios from 'axios';

interface IFormState {
    productList?: Array<any>;
    productCategoryList?: Array<any>;
    productCategoryID?: string;
}

const product = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface IState {
    products: Array<any>;
    categoryID: string;
}

class Shop extends Component<RouteComponentProps<any>, IState> {

    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            products: [],
            categoryID: this.props.match.params.catID,
        }
    };

    componentDidMount(): void {
        axios.get('http://localhost:9001/products')
            .then(data => {
                this.setState({products: data.data})
            })
    };

    render() {

        const products = this.state.products;
        console.log(this.state.products);

        return <>

            {/* JumboTron Component */}
            <JumboTron title={"Shop"}
                       content={"Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS"}
            />

            <Container fluid className={"pt-2"}>

                <Row>
                    <Col md={2}>

                        <ListGroup variant="flush">
                            {product.map((i: any) =>
                                <ListGroup.Item>
                                    <input type="button"
                                           value={i.id}
                                    />
                                </ListGroup.Item>
                            )}

                        </ListGroup>

                    </Col>

                    <Col md={10}>

                        {/* BreadCrumb Component */}
                        <BreadCrumb levelTwoText={'Category 2'}/>

                        <Row>
                            {products.filter((i: any) => i.category === this.state.categoryID)
                                .map((i: any) =>
                                    <Col md={3}>
                                        <Card className="m-2">
                                            <Card.Img variant="top" src={require("../../assets/images/" + i.imgUrl)}/>
                                            <Card.Body>
                                                <Card.Title>
                                                    <Link to={`shop-item/${i.id}`}>{i.name}</Link>
                                                </Card.Title>
                                                <Card.Text>
                                                    $ {i.price}
                                                </Card.Text>
                                                <Button variant="primary">Add to Cart</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )}

                        </Row>

                    </Col>

                </Row>
            </Container>
        </>
    }
};

export default withRouter(Shop);