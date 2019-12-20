import React, {FC} from "react";


interface IProps {
    title: string;
    share: boolean;
}

export const AdminSectionTitle: FC<IProps> = (props) => {
    return <div
        className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1>{props.title}</h1>

        {props.share === true ? <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group mr-2">
                <button className="btn btn-sm btn-outline-secondary">Share</button>
                <button className="btn btn-sm btn-outline-secondary">Export</button>
            </div>
            <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                This week
            </button>
        </div> : null}

    </div>
}