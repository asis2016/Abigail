import React, {Component} from 'react';
import {AppBase} from "./App.style";
import Shop from "./pages/Shop/Shop";
import NavBar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import {FooterMenuStyleTwo} from "./components/FooterMenuStyleTwo/FooterMenuStyleTwo";
import ShopItem from "./pages/Shop/ShopItem";

class App extends Component {

    render() {

        return <AppBase>


            <BrowserRouter>
                {/* NavBar Component */}
                <NavBar/>

                <Switch>

                    {/* testing */}
                    <Route path={"/shop-item/:id"} exact component={ShopItem} />
                    {/* testing */}

                    <Route path={"/shop/:catID"} exact component={Shop} />

                    <Route path={"/"}>
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
