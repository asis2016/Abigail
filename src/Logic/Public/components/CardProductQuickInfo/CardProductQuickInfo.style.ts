import styled from "styled-components";
import {color} from "../../Assets/style/style";


export const CardProductQuickInfoBase = styled.div`

position: fixed;
height: 100%;
width: 100%;
padding-top: 100px;
top: 0;
left: 0;
right: 0;
background-color: rgba(0,0,0, 0.6);
z-index: 999;
transition: all .25s linear;

.card{
  border: none;
}

.card-body{
    height: 100%;
    padding: 20px;
    border: none;
}

.card-header{
    background: ${color.primary};
    border: ${color.primary};
    color: ${color.white};
}

.close-popup{
    font-size: 1.5rem;
    position: absolute;
    top: 5px;
    right: 5px;
    color: ${color.white};
}

.close-popup:hover{
    cursor: pointer;
}

.card-header h3{
    color: ${color.white};
    margin:0;
}

.product-img{
    height: 100%;
    width: 200px;
    border-radius: 2px;
}

.form-group{
    margin-bottom: 0;
}



`;
