import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {APICollection, BlogPostStyleTwoContent} from "../../assets/content";
import {PopularProductStyleOneBase} from "./PopularProductStyleOne.style";

interface IProps {
    title: string;
    caption: string;
    selectProductCategoryId: string;
}

interface IState {
    popularProducts?: Array<any>;
}

class PopularProductStyleOne extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            popularProducts: [],
        }
    };

    componentDidMount() {
        fetch(APICollection.localShop)
            .then(response => response.json())
            .then(result => {
                this.setState({popularProducts: result})
            });
    };


    render() {

        const popularProducts: any = this.state.popularProducts;

        return <PopularProductStyleOneBase>
            <Container>

                <Row className="pb-5">
                    <Col md={{span: 6, offset: 3}} className="text-center">
                        <h1>{this.props.title}</h1>
                        <p className="pt-3 pb-3 caption">{this.props.caption}</p>
                    </Col>
                </Row>

                <Row>
                    {popularProducts.filter((i: any) => i.category === this.props.selectProductCategoryId)
                        .map((i: any) =>
                            <Col xs={4} key={i.id}>
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top"
                                         alt=""
                                         src={require("../../assets/images/" + i.imgUrl)}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{i.name}</h5>
                                        <p className="card-text">Lorem Ipsum</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button"
                                                        className="btn btn-primary-abigail">
                                                    Add to cart
                                                </button>
                                                <button type="button" className="btn btn-secondary-outline-abigail">
                                                    Wishlist
                                                </button>
                                            </div>
                                            <small className="price"><b>€ {i.price}</b></small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )}
                </Row>
            </Container>
        </PopularProductStyleOneBase>
    }
}

export default PopularProductStyleOne;