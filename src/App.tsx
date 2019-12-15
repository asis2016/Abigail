import React, {Component} from 'react';
import {AppBase} from "./App.style";
import PopularProductStyleOne from "./components/PopularProductStyleOne/PopularProductStyleOne";

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

          {/*  <Shop/>*/}


            {/* Popular Product Style One */}
            <PopularProductStyleOne title={"Popular Products "}
                                    caption={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis."}
                                    selectProductCategoryId={"6"}
            />



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
