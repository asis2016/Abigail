import {Col, Row} from "react-bootstrap";
import React from "react";
import {ProductInspirationBase} from "./ProductInspiration.style";
import {faIcon} from "../../Assets/style/style";

const yo = [
    {
        id: 1,
        imgUrl: 'fi-5.jpg',
        title: 'Quo Bergen kalt magni'
    },
    {
        id: 2,
        imgUrl: 'fi-17.jpg',
        title: 'Inventore veritatis'
    },
    {
        id: 3,
        imgUrl: 'fi-21.jpg',
        title: 'Accusamus et iusto odi'
    },
    {
        id: 4,
        imgUrl: 'fi-16.jpg',
        title: 'Mauris finibus liberas'
    }
];

export const ProductInspiration = () => {
    return <ProductInspirationBase>
        <Row className="row-two">
            {yo.map((i) =>
                <Col style={{backgroundImage: 'url(' + require('../../Assets/images/blog/' + i.imgUrl) + ')'}}
                     key={i.id}
                >

                    <div className="detail">
                        <h3>{i.title}</h3>
                        <button className="btn btn-secondary">
                            <span className="mr-2">Explore</span> <i className={faIcon.more}></i>
                        </button>
                    </div>

                    <div className="overlay"></div>

                </Col>
            )}
        </Row>
    </ProductInspirationBase>
}