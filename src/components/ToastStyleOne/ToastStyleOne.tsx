import React, {FC} from "react";
import {Toast} from "react-bootstrap";
import {ToastStyleOneBase} from "./ToastStyleOne.style";


interface IProps {
    title: any;
    msg: any;
    delay: number;
    show: any;
    onclose: () => any;
}

export const ToastStyleOne: FC<IProps> = (props) => {
    return <ToastStyleOneBase>
        <Toast onClose={props.onclose}
               show={props.show}
               delay={props.delay}
               autohide>
            <Toast.Header>
                <strong className="mr-auto">{props.title}</strong>
            </Toast.Header>
            <Toast.Body>{props.msg}</Toast.Body>
        </Toast>
    </ToastStyleOneBase>
};