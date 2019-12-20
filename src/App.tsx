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
import {FourZeroFour} from "./pages/404/404";
import {getAllCategory} from "./model/Product";
import {AdminDashboard} from "./Logic/Admin/Pages/Dashboard/Dashboard";
import {AdminIndex} from "./Logic/Admin";
import {AdminProduct} from "./Logic/Admin/Pages/Product/Product";
import {AdminTag} from "./Logic/Admin/Pages/Tag/Tag";

class App extends Component {

    render() {
        return <AppBase>
            <BrowserRouter>
                <Switch>
                        {/* Home */}
                        <Route exact path="/">
                            <NavBar/>
                            <Home/>
                            <FooterMenuStyleTwo/>
                        </Route>

                        {/* Blog */}
                        <Route path={"/blog"} exact>
                            <NavBar/>
                            <Route component={Blog}/>
                            <FooterMenuStyleTwo/>
                        </Route>

                        {/* Blog Item*/}
                        <Route path={"/blog-item/:id"} exact>
                            <NavBar/>
                            <Route component={BlogItem}/>
                            <FooterMenuStyleTwo/>
                        </Route>

                        {/* Shop */}
                        <Route path={"/shop/:catID"}>
                            <NavBar/>
                            <Route component={Shop}/>
                            <FooterMenuStyleTwo/>
                        </Route>

                        {/* Shop Item */}
                        <Route path={"/shop-item/:id"} exact>
                            <NavBar/>
                            <Route component={ShopItem}/>
                            <FooterMenuStyleTwo/>
                        </Route>

                    {/* Customer Account */}

                    {/* Administrator Account */}
                    <Route path={"/administrator"} exact>
                        <AdminIndex/>
                    </Route>

                    <Route path={"/admin-product"} exact>
                        <AdminProduct/>
                    </Route>

                    <Route path={"/admin-tag"} exact>
                        <AdminTag/>
                    </Route>

                </Switch>
            </BrowserRouter>
        </AppBase>
    }
};

export default App;
