import styled from "styled-components";
import {color} from "../../Assets/style/style";
import {FC} from "react";


interface IProps {
    img: string;
}

export const CardProductTileBase = styled.div<IProps>`

.card{
    margin-bottom: 10px;
}

.card-body{
        position:relative;
        width: 100%;
        height: 200px;
        padding:0px;
}

.product-img{
      background-image: url(${({img}) => img ? (require('../../Assets/images/product/' + img)) : ''});
      background-size: cover;
      height: 200px;
      width:100%;
      overflow: hidden;
}

.card-body:hover{
    cursor: pointer;
}

.card-body:hover .product-caption{
        visibility:visible;
        opacity: 1;
}

.card-body:hover .product-action,
.card-body:hover .overlay{
        visibility: visible;
        }


.product-caption{
        visibility:hidden;
         opacity: 0;
        transition: visibility 0s, opacity 0.4s linear;
        position: absolute;
        z-index: 2;
        bottom:0;
        background: ${color.primary};
        width: 100%;
        color: ${color.text};
        text-align: center;
        padding-top:10px;
        padding-bottom:10px;
}

.product-caption h3{
        color: ${color.white};
        margin-bottom: 0;
}

.product-action{
        visibility: hidden;
        height:200px;
        width:100%;        
        display:flex;
        align-items:center;
        justify-content:center;
        position:absolute;
        top: 0px;
        z-index: 3;
}

.product-action .quick-view,
.product-action .add-to-cart{
        position:relative;
        color: white;
        z-index: 4;
        opacity:1;
        margin:2px;
}

/*

.overlay{
        visibility: hidden;
        top: 0;
        position:absolute;
        height:200px;
        width:100%; 
        background: #000;
        opacity: 0.2;
        z-index:5;
}
*/

`;