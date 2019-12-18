import React, {FC} from "react";
import {Link} from "react-router-dom";
import {CardShopItemBase} from "./CardShopItem.style";
import {faIcon} from "../../assets/style/style";


interface IProps {
    id: string;
    title: string;
    price: string;
    img: string;
}

export const CardShopItem: FC<IProps> = (props) => {
    return <CardShopItemBase>
        <div className="card mb-4 box-shadow">
            <div className="product-img"
                 style={{backgroundImage: 'url(' + require('../../assets/images/product/' + props.img) + ')'}}>
            </div>
            <div className="card-body">
                <Link to={`/shop-item/` + props.id}><h3>{props.title.substring(0, 20)}</h3></Link>
                <p className="card-text">€ {props.price}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button"
                                className="btn btn-sm btn-primary">
                            <i className={faIcon.cart}></i> Add to cart
                        </button>
                        <button type="button"
                                className="btn btn-sm btn-primary-outline">
                            <i className={faIcon.heart}></i> Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </CardShopItemBase>
};