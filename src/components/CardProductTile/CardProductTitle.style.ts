import styled from "styled-components";


export const CardProductTileBase = styled.div`

.card{
    margin-bottom: 10px;
}

.card-body{
        position:relative;
        width: 100%;
        height: 200px;
        padding:0px;
}

.card-body:hover{
    cursor: pointer;
}

.card-body:hover .product-caption{
        visibility:visible;
        opacity: 1;
}

.card-body:hover .product-img{
      transform: scale(1.5);
}

.card-body:hover .product-action,
.card-body:hover .overlay{
        visibility: visible;
        }

img{
    width: 100%;
    height: 200px;
    object-fit: cover;
    }

.product-img{
        position:relative;
        background-position: cover;
        height: 200px;
        transition: transform .5s ease;
}

.product-caption{
        visibility:hidden;
         opacity: 0;
        transition: visibility 0s, opacity 0.9s linear;
        position: absolute;
        z-index: 2;
        bottom:0;
        background: #121212;
        width: 100%;
        color: #fff;
        text-align: center;
        padding-top:10px;
        padding-bottom:10px;
        transition: 0.4s;
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