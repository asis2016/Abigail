import React, {FC, Fragment} from "react";

interface IProps {
    thead: Array<string>;
    tbodys: any;
}

export const TableStrip: FC<IProps> = (props) => {
    return <table className="table table-striped table-sm">
        <thead>
        <tr>
            {props.thead.map((i, index) =>
                <th key={index}>{i}</th>
            )}
        </tr>
        </thead>
        <tbody>
        {props.tbodys.map((i: any, index: any) =>
            <Fragment key={index}>{i}</Fragment>
        )}
        </tbody>
    </table>
}