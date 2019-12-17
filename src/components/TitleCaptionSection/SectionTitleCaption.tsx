import React, {FC} from "react";
import {Col, Row} from "react-bootstrap";

interface IProps {
    title: string;
    caption: string;
}

export const TitleCaptionSection: FC<IProps> = (props) => {
    return <Row className="pb-5">
        <Col md={{span: 6, offset: 3}} className="text-center">
            <h1>{props.title}</h1>
            <p className="pt-3 pb-3 caption">{props.caption}</p>
        </Col>
    </Row>
};