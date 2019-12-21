import React from "react"
import {AdminNavigation} from "./components/nav/nav";
import {AdminIndexBase} from "./index.style";
import {AdminHeader} from "./components/header/header";
import {AdminDashboard} from "./Pages/Dashboard/Dashboard";
import {Container, Row} from "react-bootstrap";

export const AdminIndex = () => {
    return <AdminIndexBase>

        <AdminHeader/>

        <Container fluid>
            <Row>
                {/* Navigation */}
                <AdminNavigation/>

                {/* Main Content */}
                <AdminDashboard/>



            </Row>
        </Container>

    </AdminIndexBase>
}