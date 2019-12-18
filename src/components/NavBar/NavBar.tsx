import React, {FC} from "react";
import {Col, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {faIcon} from "../../assets/style/style";
import {NavBarBase} from "./NavBar.style";

interface IProps {
}

export const NavBar: FC<IProps> = () => {
    return <NavBarBase>
        <div className="container-fluid navbar-primary">
            <div className="row">
                <Col md={3} className="col-one">
                    <Link to={"/"} className="navbar-brand">
                        <img src={require('../../assets/images/logo.png')} alt=""/>
                    </Link>
                </Col>
                <Col md={6} className="col-two">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                All
                            </span>
                        </div>
                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                        <div className="input-group-append">
                                <span className="input-group-text">
                                    <i className={faIcon.search}></i>
                                </span>
                        </div>
                    </div>
                </Col>
                <Col md={3} className="col-three">
                    <Nav>
                        <Link to={"/blog"} className={"nav-link"}>
                            <i className={faIcon.globe}></i> en

                        </Link>
                        <Link to={"/blog"} className={"nav-link"}>
                            <i className={faIcon.user}></i> Account
                        </Link>
                        <Link to={"/blog"} className={"nav-link"}>
                            <i className={faIcon.basket}></i> Checkout
                        </Link>
                    </Nav>
                </Col>
            </div>

        </div>

        <div className="container-fluid navbar-secondary">

            <div className="row">
                <Col md={2} className="col-one">
                    <p>
                        <i className={faIcon.gift}></i> <span className="ml-1">Woooho! Christmas Sale is on.</span>
                    </p>
                </Col>
                <Col md={8} className="col-two">
                    <Nav className="mr-auto">
                        <NavDropdown title="Shop" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="http://googl.gl">
                                <Link to={"/shop/6"}>Shop</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="http://googl.gl">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="http://googl.gl">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="http://googl.gl">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Link to={"/blog"} className={"nav-link"}>Blog</Link>
                        <Link to={"/sale"} className={"nav-link"}>Sales</Link>
                        <Link to={"/sale"} className={"nav-link"}>About</Link>
                        <Link to={"/sale"} className={"nav-link"}>Contact</Link>
                    </Nav>
                </Col>
                <Col md={2} className="col-three">
                    <p>
                        <i className={faIcon.delivery}></i> <span className="ml-1">50 % delivery off on every purchase.</span>
                    </p>
                </Col>
            </div>

        </div>


    </NavBarBase>
}