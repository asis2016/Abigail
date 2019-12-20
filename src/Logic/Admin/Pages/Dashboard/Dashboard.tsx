import React from "react"
import {AdminSectionTitle} from "../../components/sectionTitle/AdminSectionTitle";

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
    </main>
}