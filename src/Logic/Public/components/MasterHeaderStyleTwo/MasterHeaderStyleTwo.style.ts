import styled from "styled-components";
import {DefaultStyle} from "../../Assets/style/style";

export const MasterHeaderStyleTwoBase = styled.div`

  
height: calc(100vh - 160px);
position: relative;

.carousel{
  height: 100%;
}

.carousel-item{
    position: fixed;
    top:0;
    left:0;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position:center;
    z-index: -1;
}

.carousel-item-content{
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 70px;
    z-index: 3;
    border-radius: 4px;
}

.carousel-item-content .col-md-8{
    background: rgba(0,0,0,0.5);
    padding: 40px;
    text-align: center;
}

.carousel-item-content h1, p{
    color: #fff;
}

.carousel-control-next-icon, .carousel-control-prev-icon{
    height: 80px;
    width: 80px;
    z-index: 5;
}

.overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 1;
}
  
`;