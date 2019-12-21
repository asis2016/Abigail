import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {PopularProductStyleOneBase} from "./PopularProductStyleOne.style";
import {ToastStyleOne} from "../ToastStyleOne/ToastStyleOne";
import {APICollection} from "../../../../server/config";
import {CardShopItem} from "../CardShopItem/CardShopItem";
import {TitleCaptionSection} from "../TitleCaptionSection/TitleCaptionSection";
import axios from "axios";

interface IProps {
    page: number,
    limit: number,
    categoryID: number;
}

interface IState {
    popularProducts?: Array<any>;
    cart?: boolean;
    cartMessage?: string;
}

export default class PopularProductStyleOne extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            popularProducts: [],
            cart: false,
            cartMessage: 'empty',
        }
    };

    componentDidMount() {
        axios.get(APICollection.apiProduct + `?category=` + this.props.categoryID + `&_limit=` + this.props.limit)
            .then(data => {
                this.setState({popularProducts: data.data})
            })
    };

    render() {
        const popularProducts: any = this.state.popularProducts;
        return <PopularProductStyleOneBase>

            <ToastStyleOne title={'Wishlist'}
                           msg={this.state.cartMessage}
                           delay={3000}
                           show={this.state.cart}
                           onclose={() => this.setState({cart: false})}/>
            <Container>
                <TitleCaptionSection title={"Popular Products"}
                                     caption={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis."}/>
                <Row>
                    {popularProducts.map((i: any) =>
                            <Col xs={4} key={i.id}>
                                <CardShopItem id={i.id} title={i.title} price={i.price} img={i.img}/>
                            </Col>
                        )}
                </Row>
            </Container>
        </PopularProductStyleOneBase>
    }
};