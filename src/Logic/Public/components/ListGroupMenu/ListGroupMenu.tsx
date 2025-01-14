import React, {FC} from "react";

interface IProps {
    id: any;
    title: any;
    url: any;
}

export const ListGroupMenu: FC<IProps> = (props) => {
    return <a href={props.url}>
        {props.title}
    </a>
};