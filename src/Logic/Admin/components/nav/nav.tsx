import React from "react";
import {Link} from "react-router-dom";


const menu = [
    {id: 1, faIcon: '', title: 'Dashboard', url: 'administrator'},
    {id: 2, faIcon: '', title: 'Products', url: 'admin-product'},
    {id: 3, faIcon: '', title: 'Order', url: 'admin-order'},
    {id: 4, faIcon: '', title: 'Tags', url: 'admin-tag'}
]

export const AdminNavigation = () => {
    return <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
            <ul className="nav flex-column">
                {menu.map((i) =>
                    <li className="nav-item" key={i.id}>
                        <Link to={i.url}>
                            {i.title}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    </nav>
}