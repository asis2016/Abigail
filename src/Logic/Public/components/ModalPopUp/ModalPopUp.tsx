import {Modal} from "react-bootstrap";
import {CardBlog} from "../CardBlog/CardBlog";
import React, {FC} from "react";

interface IProps {
    id:string;
    title:string;
}

export const ModalPopUp:FC<IProps> = (props) =>{
    return <Modal show={true}
                  onHide={() => false}>
        <Modal.Body>
asd        </Modal.Body>
    </Modal>
}