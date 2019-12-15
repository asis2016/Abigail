import React, {Component} from 'react';
import {AppBase} from "./App.style";
import Shop from "./pages/Shop/Shop";
import NavBar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import {ShopItem} from "./pages/Shop/ShopItem";

class App extends Component {

    render() {

        return <AppBase>



            <BrowserRouter>
                {/* NavBar Component */}
                <NavBar/>

                <Switch>

                    {/* testing */}
                    <Route path={"/shop-item"}>
                        <ShopItem/>
                    </Route>
                    {/* testing */}

                    <Route path={"/shop"}>
                        <Shop/>
                    </Route>
                    <Route path={"/"}>
                        <Home/>
                    </Route>



                </Switch>
            </BrowserRouter>


        </AppBase>
    }
};

export default App;
