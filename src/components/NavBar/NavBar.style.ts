import styled from "styled-components";
import {color} from "../../assets/style/style";


export const NavBarBase = styled.div`
    position: relative;
    z-index: 2;
    background-color: ${color.white};
    
a{
    text-transform: uppercase;
    font-weight: bold;
}

.navbar-brand img{
    width: 100px;
}

.navbar-primary{
    min-height: 100px;
    border-bottom:1px solid;
    border-color: rgba(44, 47, 77, 0.05);
}

.navbar-primary .col-two{
    min-height: 100px;
    display:flex;
    justify-content:center;
    align-items:center;
}

.navbar-primary .col-one, 
.navbar-primary .col-three{
    min-height: 60px;
    display:flex;
    justify-content:center;
    align-items:center;
}

.navbar-secondary .col-two{
    display:grid;
    justify-content:center;
    align-items:center;
}

.navbar-secondary .col-one, 
.navbar-secondary .col-three{
    min-height: 60px;
    display:flex;
    justify-content:center;
    align-items:center;
}

.navbar-secondary p{
    margin-bottom: 0;
}

`;