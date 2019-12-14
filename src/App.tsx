import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ProfileCardStyleOne from "./components/ProfileCardStyleOne/ProfileCardStyleOne";
import TopNavigationStyleTwo from "./components/TopNavigationStyleTwo/TopNavigationStyleTwo";

interface IProps {
}

interface IState {
    products?: object;
    title?: string;
    template?: string;
}

interface IProduct {
    sku:number;
    title:string;
}

class App extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            products: {},
            title: 'My Button',
            template: 'light',
        }
    };

    changeColor = () => {
        console.log('change color');
        this.setState({template: 'dark', title: 'Changed title'});
    };

    async componentDidMount(){

        const url = 'https://raw.githubusercontent.com/BestBuyAPIs/open-data-set/master/products.json';
        const response = await fetch(url);
        const data = await response.json();

        console.log(response);
        console.log(data);

        console.log(typeof data);

        this.setState({products: data})

        console.log(this.state.products)

    }

    render() {
        return <Container>

            {/* TOP NAVIGATION */}
            <TopNavigationStyleTwo />


            <Row>
                <Col md={2}>

                    <button onClick={this.changeColor}>
                        {this.state.title}
                    </button>

                    {/* Profile Card Style One */}
                    <ProfileCardStyleOne/>

                </Col>

                <Col md={10}>

                    {
                        this.state.products.map((i)=>
                            <h6></h6>
                        )
                    }

                </Col>
            </Row>
        </Container>
    }
};

export default App;
