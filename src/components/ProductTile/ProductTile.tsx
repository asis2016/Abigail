import React, {Component, FC} from "react";
import {Badge, Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import axios from "axios";
import {APICollection} from "../../server/config";
import {ProductTileBase} from "./ProductTile.style";
import {TitleCaptionSection} from "../TitleCaptionSection/TitleCaptionSection";
import {CardProductTile} from "../CardProductTile/CardProductTile";
import {TitleCaptionSectionExploreAll} from "../TitleCaptionSectionExploreAll/TitleCaptionSectionExploreAll";
import {faIcon} from "../../assets/style/style";
import {axiosInstance} from "../../server/axios";

interface IProps {
    page: number;
    limit: number;
    categoryID: number;
}

interface IState {
    product: Array<any>;
}

export class ProductTile extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            product: [],
        }
    };

    componentDidMount(): void {
        axios.get(APICollection.apiProduct + `?category=` + this.props.categoryID + `&_limit=` + this.props.limit)
            .then(data => {
                this.setState({product: data.data})
            })
    };

    render() {
        const products = this.state.product;
        return <ProductTileBase>
            <div className="container">
                {/* Title Caption */}
                <TitleCaptionSection title={"Wedding Dress Collection"}
                                     caption={"Aenean eget turpis sagittis massa porttitor convallis."}/>

                <div className="row">
                    {products.map((i) =>
                        <div className="col-md-2" key={i.id}>
                            <CardProductTile id={i.id}
                                             title={i.title}
                                             price={i.price}
                                             dealPrice={i.dealPrice}
                                             size={i.size}
                                             color={i.color}
                                             sku={i.sku}
                                             img={i.img}
                                             category={i.category}/>
                        </div>
                    )}
                </div>
                {/* Explore Link*/}
                <TitleCaptionSectionExploreAll url={'shop/1'}/>
            </div>
        </ProductTileBase>
    }
}