import React, {FC} from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

interface IProps {
}

export const NavBar: FC<IProps> = () => {
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Link to={'/'} className={"navbar-brand"}>Abigail Shopping Store</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
                <Link to={"/shop/7"} className={"nav-link"}>Shop</Link>
                <Link to={"/blog"} className={"nav-link"}>Blog</Link>


                <Link to={"/sale"} className={"nav-link"}>Sales</Link>

                {/* testing only */}
                <Link to={"/shop-item/:id"} className={"nav-link"}>Shop Single Item</Link>

                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="http://googl.gl">Action</NavDropdown.Item>
                    <NavDropdown.Item href="http://googl.gl">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="http://googl.gl">Something</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="http://googl.gl">Separated link</NavDropdown.Item>
                </NavDropdown>

            </Nav>
            <Nav>
                <Nav.Link href="#deets">fb</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}