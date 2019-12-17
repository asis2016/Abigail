import React, {Component} from "react";
import {Modal} from "react-bootstrap";
import axios from "axios";
import {APICollection} from "../../server/config";
import {ProductTileBase} from "./ProductTile.style";
import {TitleCaptionSection} from "../TitleCaptionSection/SectionTitleCaption";
import {CardProductTile} from "../CardProductTile/CardProductTile";

interface IProps {
}

interface IState {
    product: Array<any>;
    showModal: boolean;
}

export class ProductTile extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            product: [],
            showModal: false
        }
    };

    componentDidMount(): void {
        axios.get(APICollection.apiProduct)
            .then(data => {
                this.setState({product: data.data})
            })
    };


    render() {
        const products = this.state.product;
        console.log(this.state.product);

        const showModal = (): any => {
            return <Modal show={true}
                          onHide={() => false}>
                <Modal.Body>
                    asd </Modal.Body>
            </Modal>
        }


        return <ProductTileBase>

            <div className="container mt-5 mb-5">

                <TitleCaptionSection title={"Party Collection 19"}
                                     caption={"Aenean eget turpis sagittis massa porttitor convallis."}/>

                <div className="row">
                    {products.filter((i) => i.category === '8')
                        .map((i) =>
                            <div className="col-md-2" key={i.id}>
                                <CardProductTile id={i.id}
                                                 title={i.title}
                                                 imgUrl={i.imgUrl}/>
                            </div>
                        )}
                </div>
            </div>
        </ProductTileBase>
    }
}