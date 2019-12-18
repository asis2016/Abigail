import React, {Component} from "react";
import {Button, Modal} from "react-bootstrap";
import axios from "axios";
import {APICollection} from "../../server/config";
import {ProductTileBase} from "./ProductTile.style";
import {TitleCaptionSection} from "../TitleCaptionSection/TitleCaptionSection";
import {CardProductTile} from "../CardProductTile/CardProductTile";
import {TitleCaptionSectionExploreAll} from "../TitleCaptionSectionExploreAll/TitleCaptionSectionExploreAll";

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
        console.log(products)

        const showModal = (): any => {
            return <Modal show={true}
                          onHide={() => false}>
                <Modal.Body>
                    asd </Modal.Body>
            </Modal>
        };

        return <ProductTileBase>
            <div className="container">
                <TitleCaptionSection title={"Wedding Dress Collection"}
                                     caption={"Aenean eget turpis sagittis massa porttitor convallis."}/>

                <div className="row">
                    {products.map((i) =>
                        <div className="col-md-2" key={i.id}>
                            <CardProductTile id={i.id}
                                             title={i.title}
                                             img={i.img}
                            />
                        </div>
                    )}
                </div>

                <TitleCaptionSectionExploreAll url={'shop/1'}/>

            </div>
        </ProductTileBase>
    }
}