import {Badge, Col, Container, Form, Row} from "react-bootstrap"
import React, {Component} from "react";
import {ShopItemBase} from "./ShopItem.style";
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import axios from 'axios';
import {APICollection} from "../../../../server/config";
import {BreadCrumb} from "../../components/BreadCrumb/BreadCrumb";
import {faIcon} from "../../Assets/style/style";
import {CustomerReview} from "../../components/CustomerReview/CustomerReview";

interface IValues {
    [key: string]: any;
}

interface IFormState {
    id: string;
    categoryID: any;
    product: any;
    category: any;
    values?: IValues[];
}



class ShopItem extends Component<RouteComponentProps<any>, IFormState> {

    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            categoryID: '',
            product: {},
            category: {},
        }
    };

    componentDidMount(): void {
        axios.get(APICollection.apiProduct + `/` + this.state.id)
            .then(data => {
                this.setState({product: data.data})
            });
    };

    /* Get Category Data */
    getCategoryData = (id: string) => {
        axios.get(APICollection.apiCategory + `/` + id)
            .then(result => {
                this.setState({category: result.data});
            });
        const category = this.state.category;
        return <>
            <Link to={`/shop/` + category.id}>{category.title}</Link>
        </>
    };

    render() {

        const products = this.state.product;

        return <ShopItemBase img={products.img}>

            <Container>

                {/* BreadCrumb Component */}
                <Row>
                    <Col>
                        <BreadCrumb levelOneUrl={'Shop'}
                                    levelOneText={'Shop'}
                                    levelTwoText={'Wedding Dress'}/>
                    </Col>
                </Row>

                {/* Shop Item */}
                <Row>
                    <div className="col-lg-6 pr-5 pt-2">
                        <div className="product-img">
                        </div>
                    </div>

                    <div className="col-lg-6 pr-5 pt-2">
                        <h1>{products.title}</h1>
                        <hr/>
                        <h1>
                            <Badge variant="primary">$ {products.price}</Badge>
                        </h1>

                        <Form>
                            <Form.Group as={Row}>
                                <Form.Label column sm="3">
                                    Size
                                </Form.Label>
                                <Col sm="9">

                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm="3">
                                    Color
                                </Form.Label>
                                <Col sm="9">

                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="3">
                                    SKU
                                </Form.Label>
                                <Col sm="9">
                                    {products.sku}
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="3">
                                    Product Code
                                </Form.Label>
                                <Col sm="9">
                                    {products.id + `000` + products.sku}
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="3">
                                    Category
                                </Form.Label>
                                <Col sm="9">
                                    {this.getCategoryData(products.category)}
                                </Col>
                            </Form.Group>
                        </Form>

                        <hr/>
                        <button className="btn btn-primary">
                            <i className={faIcon.cart}></i> Add to Cart
                        </button>
                        <button className="btn btn-secondary ml-2">
                            <i className={faIcon.heart}></i> Wishlist
                        </button>

                    </div>
                </Row>
                {/* Ends: Shop Item */}

                {/* Customer Review */}
                <CustomerReview productId={Number(products.id)}/>

                {/* Related Products */}
                <Row className="mt-3">
                    <Col>
                        <div className="card">
                            <div className="card-header">
                                Related Products
                            </div>
                            <div className="card-body">

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>}
        </ShopItemBase>
    }
};

export default withRouter(ShopItem);
