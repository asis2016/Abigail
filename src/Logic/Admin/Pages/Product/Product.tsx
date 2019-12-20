import React from "react";
import {AdminHeader} from "../../components/header/header";
import {Container, Row} from "react-bootstrap";
import {AdminNavigation} from "../../components/nav/nav";
import {AdminDashboard} from "../Dashboard/Dashboard";
import {AdminIndexBase} from "../../index.style";
import {AdminSectionTitle} from "../../components/sectionTitle/AdminSectionTitle";

export const AdminProduct = () => {
    return <>
        <AdminHeader/>

        <Container fluid>
            <Row>
                {/* Navigation */}
                <AdminNavigation/>

                {/* Main Content */}
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                    <AdminSectionTitle title={'Products'} share={false}/>


                </main>
            </Row>
        </Container>
    </>
};