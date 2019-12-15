import React, {Component} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {AppBase} from "./App.style";
import PopularProductStyleOne from "./components/PopularProductStyleOne/PopularProductStyleOne";
import Shop from "./pages/Shop";

interface IProps {
}

interface IState {
    products?: Array<any>;
    title?: string;
    template?: string;
}


class App extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            products: [],
            title: 'My Button',
            template: 'light',
        }
    };

    changeColor = () => {
        console.log('change color');
        this.setState({template: 'dark', title: 'Changed title'});
    };

    componentDidMount() {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(result => {
                this.setState({products: result});
            })
    }

    render() {

        return <AppBase>


            <Shop/>


            {/* Popular Product Style One */}
            <PopularProductStyleOne title={"Popular Products "}
                                    caption={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis."}
                                    selectProductCategoryId={"6"}
            />



            <Container>


                {/* TOP NAVIGATION */}


            </Container>

            <Container fluid>
                <Row>
                    <Col></Col>
                </Row>
            </Container>
        </AppBase>
    }
};

export default App;
