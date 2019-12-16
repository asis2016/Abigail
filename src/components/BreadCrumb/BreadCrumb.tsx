import React, {FC} from "react";
import {Breadcrumb} from "react-bootstrap";

interface IProps {
    levelOneUrl?: string;
    levelOneText?: string;
    levelTwoText: string;
}

export const BreadCrumb: FC<IProps> = (props) => {
    return <Breadcrumb>
        <Breadcrumb.Item href="http://googl.gl">Home</Breadcrumb.Item>
        {props.levelOneUrl ?
            <Breadcrumb.Item href={props.levelOneUrl}>
                {props.levelOneText}
            </Breadcrumb.Item>
            : ''
        }
        <Breadcrumb.Item active>{props.levelTwoText}</Breadcrumb.Item>
    </Breadcrumb>
};