import styled from "styled-components";
import {color, DefaultStyle} from "../../assets/style/style";

export const ProductInspirationBase = styled.div`

overflow: hidden;
position: relative;
z-index: 2;
background-color: ${color.white};

.row-one{
    margin-bottom: 20px;
    margin-left: 10px;
}

.row-two .col{
    display:flex;
    justify-content:center;
    align-items:center;
    height: 400px;
    background-size:cover;
    background-position: center;
    cursor: pointer;
}

.row-two .col:hover .overlay{
    background-color: rgba(0,0,0,0.4);
}

.detail{
    position: relative;
    z-index: 2;
}

.detail h3{
    font-size: 1.5rem;
    color: ${color.white} !important;
}

.overlay{
    position: absolute;
    top:0px;
    left:0px;
    z-index: 1;
    height: 400px;
    width: 100%;
    background-color: rgba(0,0,0,0.2);
}

`;