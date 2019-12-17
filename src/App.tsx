import React, {Component} from 'react';
import {AppBase} from "./App.style";
import Shop from "./pages/Shop/Shop";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./pages/Home/Home";
import {FooterMenuStyleTwo} from "./components/FooterMenuStyleTwo/FooterMenuStyleTwo";
import ShopItem from "./pages/Shop/ShopItem";
import Blog from "./pages/Blog/Blog";
import BlogItem from "./pages/Blog/BlogItem";
import {NavBar} from "./components/NavBar/NavBar";

class App extends Component {


    render() {
        return <AppBase>


            <BrowserRouter>
                {/* NavBar Component */}
                <NavBar/>

                <Switch>

                    <Route path={"/blog"} exact component={Blog}/>
                    <Route path={"/blog-item/:id"} exact component={BlogItem}/>

                    <Route path={"/shop/:catID"}>
                        <Route component={Shop}/>
                    </Route>

                    <Route path={"/shop-item/:id"} exact component={ShopItem}/>

                    <Route Path={"/"}>
                        <Home/>
                    </Route>

                </Switch>
            </BrowserRouter>


            {/* Footer */}
            <FooterMenuStyleTwo/>


        </AppBase>
    }
};

export default App;
