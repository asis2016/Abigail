import React, {Component} from "react";
import {PopularThisWeekStyleOneBase} from "./PopularThisWeekStyleOne.style";
import {Card, Col, Row} from "react-bootstrap";

interface IProps {
    title: string;
}

interface IState {
    products: Array<any>;
}

class PopularThisWeekStyleOne extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            products: [],
        };
    };

    changeProducts = () => {
        this.setState({products: ['12', '34', 'fff']})
    };

    render() {

        return <PopularThisWeekStyleOneBase className="container-fluid">
            <button onClick={this.changeProducts}>ahah</button>
            <Row>
                <Col><h2>{this.props.title}</h2></Col>
                <Col>
                    <Card>
                        <Card.Body>
                            h6
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </PopularThisWeekStyleOneBase>
    }
};

export default PopularThisWeekStyleOne;