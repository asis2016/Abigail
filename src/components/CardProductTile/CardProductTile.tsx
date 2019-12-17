import React, {FC} from "react";
import {faIcon} from "../../assets/style/style";
import {CardProductTileBase} from "./CardProductTitle.style";


interface IProps {
    id: string;
    title: string;
    imgUrl: string;
}

export const CardProductTile: FC<IProps> = (props) => {
    return <CardProductTileBase>
        <div className="card">
            <div className="card-body">
                <img src={require('../../assets/images/product/' + props.imgUrl)}
                     alt={props.title}/>
                <div className="product-caption">
                    {props.title.substring(0, 10)}
                </div>

                <div className="overlay"></div>
                <div className="product-action">
                    <div className="quick-view">
                        <button className="btn btn-sm btn-primary-abigail">
                            <i className={faIcon.eye}></i>
                        </button>
                    </div>
                    <div className="add-to-cart">
                        <button className="btn-sm btn-primary-abigail btn">
                            <i className={faIcon.cart}></i>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </CardProductTileBase>
}