import React, {FC} from "react";
import {FeatureStyleFourBase} from "./FeatureStyleFourBase.style";
import {Col, Container, Row} from "react-bootstrap";


export const FeatureStyleFourContent = [
    {
        id: 0,
        title: 'Auctor massa quis, bibendum massa.',
        faIcon: 'plane',
        img: 'f-5.jpg',
        price: 299
    },
    {
        id: 1,
        title: 'Ornare, et pellentesque massa.',
        faIcon: 'trophy',
        img: 'feature-9.jpg',
        price: 359
    },
]

interface IProps {
    title: string;
    caption: string;
}

export const FeatureStyleFour: FC<IProps> = (props) => {
    return <FeatureStyleFourBase>
        <Container fluid>
            <Row>
                <div className="overlay"></div>
                {FeatureStyleFourContent.map((item) =>
                    <Col
                        style={{backgroundImage: "url(" + require("../../Assets/images/" + item.img) + ")"}}
                        key={item.id}
                    >
                        <h1>{item.title}</h1>
                        <h1>from $ {item.price}</h1>
                        <button className="btn btn-primary-outline">
                            Eine Reservierung machen
                        </button>
                    </Col>
                )}
            </Row>
        </Container>
    </FeatureStyleFourBase>
}