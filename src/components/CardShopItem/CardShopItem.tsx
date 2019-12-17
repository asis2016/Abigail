import React, {FC} from "react";
import {Link} from "react-router-dom";
import {CardShopItemBase} from "./CardShopItem.style";


interface IProps {
    id: string;
    title: string;
    price: string;
    imgUrl: string;
}

export const CardShopItem: FC<IProps> = (props) => {
    return <CardShopItemBase>
        <div className="card mb-4 box-shadow">
            <img className="card-img-top"
                 alt=""
                 src={require("../../assets/images/product/" + props.imgUrl)}
            />
            <div className="card-body">
                <Link to={`/shop-item/` + props.id}><h6>{props.title}</h6></Link>
                <p className="card-text">€ {props.price}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button"
                                className="btn btn-primary-abigail btn-sm">
                            <i className="fas fa-cart-plus"></i> Add to cart
                        </button>
                        <button type="button"
                                className="btn btn-secondary-outline-abigail"
                        >
                            <i className="fas fa-heart"></i> Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </CardShopItemBase>
};