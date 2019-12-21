import React, {FC} from "react";
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

interface IProps {
    url: any;
}

export const TitleCaptionSectionExploreAll: FC<IProps> = (props) => {
    return <Row className="pt-5">
        <Col md={{span: 6, offset: 3}} className="text-center">
            <Link to={props.url}>
                <h2 className="caption">
                    Explore All ...
                </h2>
            </Link>
        </Col>
    </Row>
};