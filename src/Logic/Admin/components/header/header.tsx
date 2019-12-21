import React from "react";
import {Link} from "react-router-dom";
import {general} from "../../../../config";
import {AdminHeaderBase} from "./header.style";


export const AdminHeader = () => {
    return <AdminHeaderBase className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <Link className="navbar-brand col-sm-3 mr-0" to={"/administrator"}>
            {general.companyName}
        </Link>

        <input className="form-control form-control-dark w-100" type="text" placeholder="Search"
               aria-label="Search"/>
        <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
                <Link to={"/"}>
                    Sign out
                </Link>
            </li>
        </ul>
    </AdminHeaderBase>
}