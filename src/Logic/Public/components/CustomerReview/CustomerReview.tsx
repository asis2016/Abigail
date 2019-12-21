import {Col, Row} from "react-bootstrap";
import React, {FC} from "react";
import {CustomerReviewBase} from "./CustomerReview.style";
import {faIcon} from "../../Assets/style/style";
import {CustomerReviewData} from "../../../../server/review";
import {userData} from "../../../../server/userdata";

interface IProps {
    productId: number;
}

export const CustomerReview: FC<IProps> = (props) => {

    return <CustomerReviewBase>
        <Row className="mt-5">
            <Col>
                <div className="card">
                    <div className="card-header">
                        <h3>Customer Review</h3>
                    </div>
                    <div className="card-body">

                        {CustomerReviewData.filter((i) => i.productId === props.productId)
                            .map((i) =>
                                <div className="media" key={i.id}>

                                    {userData.filter((childI) => childI.id === i.user)
                                        .map((childItem) =>
                                            <>
                                                <img className="mr-3"
                                                     src={require('../../assets/images/author/' + childItem.img)}
                                                     alt="Generic placeholder image"/>
                                                <div className="media-body">
                                                    <h3 className="mb-3">{childItem.name}</h3>
                                                    <p>
                                                        <i className={faIcon.star}></i>
                                                        <i className={faIcon.star}></i>
                                                        <i className={faIcon.star}></i>
                                                        <i className={faIcon.star}></i>
                                                    </p>
                                                    <p>
                                                        {i.review}
                                                    </p>
                                                    <hr/>
                                                </div>
                                            </>
                                        )}


                                </div>
                            )}


                    </div>
                </div>
            </Col>
        </Row>
    </CustomerReviewBase>
};