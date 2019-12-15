import React, {Component} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import PopularThisWeekStyleOne from "./components/PopularThisWeekStyleOne/PopularThisWeekStyleOne";
import {AppBase} from "./App.style";
import PopularProductStyleOne from "./components/PopularProductStyleOne/PopularProductStyleOne";
import ProductPageStyleOne from "./components/ProductPageStyleOne/ProductPageStyleOne";

import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Customer from "./pages/Customer";
import CustomerDetail from "./pages/CustomerDetail";

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

        const bigData: any = this.state.products;

        return <AppBase>

            <BrowserRouter>

                <Link to={'/'}> Home </Link>

                <Switch>
                    <Route path={'/'} exact component={Customer} />

                    <Route path={'/view/:id'} exact component={CustomerDetail}/>
                </Switch>
            </BrowserRouter>

            <div className="pt-5"></div>
            {/* Products Page */}
            {/* <ProductPageStyleOne/>*/}

            {/* Popular Product Style One */}
            {/*<PopularProductStyleOne title={"Popular Products "}
                                    caption={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis."}
                                    selectProductCategoryId={"6"}
            />*/}
        </AppBase>
    }
};

export default App;
