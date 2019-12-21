import React, {Component} from 'react';
import {AppBase} from "./App.style";
import Shop from "./Logic/Public/Pages/Shop/Shop";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Logic/Public/Pages/Home/Home";
import {FooterMenuStyleTwo} from "./Logic/Public/components/FooterMenuStyleTwo/FooterMenuStyleTwo";
import ShopItem from "./Logic/Public/Pages/Shop/ShopItem";
import Blog from "./Logic/Public/Pages/Blog/Blog";
import BlogItem from "./Logic/Public/Pages/Blog/BlogItem";
import {NavBar} from "./Logic/Public/components/NavBar/NavBar";
import {AdminIndex} from "./Logic/Admin";
import {AdminProduct} from "./Logic/Admin/Pages/Product/Product";
import {AdminTag} from "./Logic/Admin/Pages/Tag/Tag";
import {Contact} from "./Logic/Public/Pages/Contact/Contact";
import {About} from "./Logic/Public/Pages/About/About";

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
                    <Route path={"/shop/:catID"} exact>
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

                    {/* About Us */}
                    <Route path={"/about"}>
                        <NavBar/>
                        <Route component={About}/>
                        <FooterMenuStyleTwo/>
                    </Route>

                    {/* Contact Us */}
                    <Route path={"/contact"} exact>
                        <NavBar/>
                        <Route component={Contact}/>
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
