import React, {FC} from "react";
import {faIcon} from "../../assets/style/style";
import {CardProductTileBase} from "./CardProductTitle.style";


interface IProps {
    id: string;
    title: string;
    img: string;
}

export const CardProductTile: FC<IProps> = (props) => {
    return <CardProductTileBase img={props.img}>
        <div className="card">
            <div className="card-body">

                <div className="product-img">
                </div>

                <div className="product-caption">
                    <h3>{props.title.substring(0, 10)}</h3>
                </div>

                <div className="overlay"></div>
                <div className="product-action">
                    <div className="quick-view">
                        <button className="btn btn-sm btn-primary">
                            <i className={faIcon.eye}></i>
                        </button>
                    </div>
                    <div className="add-to-cart">
                        <button className="btn btn-sm btn-secondary">
                            <i className={faIcon.cart}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </CardProductTileBase>
};