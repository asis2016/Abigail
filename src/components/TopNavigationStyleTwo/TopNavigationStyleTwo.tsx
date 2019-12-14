import React, {Component} from "react";
import {TopNavigationStyleTwoBase} from './TopNavigationStyleTwo.style';
import {Col, Row} from "react-bootstrap";
import ProfileCardStyleOne from "../ProfileCardStyleOne/ProfileCardStyleOne";
import {APICollection} from "../../assets/content";

interface IProps {
}

interface IState {
    firstName?:string;
    lastName?:string;
    picture?: string;
}

class TopNavigationStyleTwo extends Component<IProps, IState>{

    constructor(props: IProps){
        super(props);
        this.state = {
            firstName: 'n/a',
            lastName: 'n/a',
            picture:'n/a'
        }
    }

    async componentDidMount() {
        await fetch(APICollection.randomUserAPI)
            .then(response => response.json())
            .then(data => this.setState({
                firstName: data.results[0].name.first,
                lastName: data.results[0].name.last,
                picture: data.results[0].picture.large
            }));

        console.log(this.state.firstName)
    }

    render(){
        return <TopNavigationStyleTwoBase>
                <Row>
                    <Col>

                    </Col>
                    <Col className="mr-auto text-right">
                        <div className="btn-group show-on-hover">
                            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                {this.state.lastName},  {this.state.firstName} <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu" role="menu">
                                <li><a href="#"><img src={this.state.picture} alt=""/></a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li className="divider"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </TopNavigationStyleTwoBase>
    }
};

export default TopNavigationStyleTwo;