import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {APICollection} from "../../server/config";
import {RouteComponentProps, withRouter} from "react-router-dom";
import axios from 'axios';
import {ListGroupMenu} from "../../components/ListGroupMenu/ListGroupMenu";
import {CardShopItem} from "../../components/CardShopItem/CardShopItem";
import {TitleCaptionJumbotron} from "../../components/TitleCaptionJumbotron/JumboTron";

interface IFormState {
    productList?: Array<any>;
    productCategoryList?: Array<any>;
    productCategoryID?: string;
}

interface IState {
    products: Array<any>;
    categorys: Array<any>;
    categoryID: string;
    categoryTitle: string;
}

class Shop extends Component<RouteComponentProps<any>, IState> {

    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            products: [],
            categorys: [],
            categoryID: this.props.match.params.catID,
            categoryTitle: ''
        }
    };

    componentDidMount(): void {
        axios.get(APICollection.apiProduct)
            .then(data => {
                this.setState({products: data.data})
            });

        axios.get(APICollection.apiCategory)
            .then(data => {
                this.setState({categorys: data.data})
            })
    };

    render() {

        const products = this.state.products;
        const categorys = this.state.categorys;
        return <>

            {/* JumboTron Component */}
            <TitleCaptionJumbotron title={"Shop"}
                       content={"Ut enim ad minima veniam, quis nostrum exercitationem ullam."}
            />

            <Container className={"pt-2"}>

                <Row>
                    <Col md={2}>

                        {/* Category */}
                        <h3 className={"mt-5 mb-3"}>Category</h3>
                        <ul className="list-group list-group-flush">
                            {categorys.map((i) =>
                                <li className="list-group-item" key={i.id}>
                                    <ListGroupMenu title={i.title} url={`/shop/` + i.id} id={i.id}/>
                                </li>
                            )}
                        </ul>

                    </Col>

                    <Col md={9}>

                        <Row>
                            {products.filter((i: any) => i.category === this.state.categoryID)
                                .map((i: any) =>
                                    <Col md={4} key={i.id}>
                                        <CardShopItem id={i.id} title={i.title} price={i.price} img={i.img}/>
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