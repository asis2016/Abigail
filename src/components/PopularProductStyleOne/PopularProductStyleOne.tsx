import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {PopularProductStyleOneBase} from "./PopularProductStyleOne.style";
import {ToastStyleOne} from "../ToastStyleOne/ToastStyleOne";
import {APICollection} from "../../server/config";
import {SectionTitleCaption} from "../SectionTitleCaption/SectionTitleCaption";
import {CardShopItem} from "../CardShopItem/CardShopItem";

interface IProps {
    selectProductCategoryId: string;
}

interface IState {
    popularProducts?: Array<any>;
    cart?: boolean;
    cartMessage?: string;
}

class PopularProductStyleOne extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            popularProducts: [],
            cart: false,
            cartMessage: 'empty',
        }
    };

    componentDidMount() {
        fetch(APICollection.apiProduct)
            .then(response => response.json())
            .then(result => {
                this.setState({popularProducts: result})
            });
    };


    render() {

        const popularProducts: any = this.state.popularProducts;
        console.log(popularProducts)
        return <PopularProductStyleOneBase>

            <ToastStyleOne title={'Wishlist'}
                           msg={this.state.cartMessage}
                           delay={3000}
                           show={this.state.cart}
                           onclose={() => this.setState({cart: false})}/>

            <Container>

                <SectionTitleCaption title={"Popular Products"}
                                     caption={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis."}/>

                <Row>
                    {popularProducts.filter((i: any) => i.category === '1')
                        .map((i: any) =>
                            <Col xs={4} key={i.id}>
                                <CardShopItem id={i.id} title={i.title} price={i.price} imgUrl={i.imgUrl}/>
                            </Col>
                        )}
                </Row>
            </Container>
        </PopularProductStyleOneBase>
    }


};

export default PopularProductStyleOne;