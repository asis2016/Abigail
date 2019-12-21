import React from "react"
import {AdminSectionTitle} from "../../components/sectionTitle/AdminSectionTitle";
import {Card} from "react-bootstrap";

export const AdminDashboard = () => {
    return <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">


        <AdminSectionTitle title={'Dashboard'} share={true}/>

        <h3>Section title</h3>
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1,015</td>
                    <td>sodales</td>
                    <td>ligula</td>
                    <td>in</td>
                    <td>libero</td>
                </tr>
                </tbody>
            </table>
        </div>

        <hr/>
        {/* General Setting */}
        <h3>General Settings</h3>
        <Card>
            <Card.Body>

            </Card.Body>
            <Card.Footer>
                <button className="btn btn-primary">Update</button>
            </Card.Footer>
        </Card>
    </main>
}