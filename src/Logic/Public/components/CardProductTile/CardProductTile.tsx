import React, {FC, useState} from "react";
import {faIcon} from "../../Assets/style/style";
import {CardProductTileBase} from "./CardProductTitle.style";
import {CardProductQuickInfo} from "../CardProductQuickInfo/CardProductQuickInfo";

interface IProps {
    id: string;
    title: string;
    price: string;
    dealPrice: string;
    size: string;
    color: string;
    sku: string;
    img: string;
    category: string;
}

export const CardProductTile: FC<IProps> = (props) => {

    const [quickInfo, setQuickInfo] = useState(false);

    const toggle = () => {
        setQuickInfo(!quickInfo);
    };

    return <CardProductTileBase img={props.img}>

        {/* Show Card Quick Info: Pop Up */}
        {quickInfo ? <CardProductQuickInfo
                id={props.id}
                title={props.title}
                price={props.price}
                dealPrice={props.dealPrice}
                size={props.size}
                color={props.color}
                sku={props.sku}
                img={props.img}
                category={props.category}
                closePopup={toggle}/>
            :
            null}

        <div className="card">
            <div className="card-body">
                <div className="product-img"></div>
                <div className="product-caption">
                    <h3>{props.title.substring(0, 10)}</h3>
                </div>
                <div className="overlay"></div>
                <div className="product-action">
                    <div className="quick-view">
                        <button className="btn btn-sm btn-primary" onClick={toggle}>
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