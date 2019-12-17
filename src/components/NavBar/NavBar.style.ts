import styled from "styled-components";


export const NavBarBase = styled.div`

.navbar-primary{
    border-bottom:1px solid #cecece;
}

.navbar-primary .col-two{
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

`;