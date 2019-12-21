import styled from "styled-components";
import {DefaultStyle} from "../../Assets/style/style";


export const CardShopItemBase = styled.div`

.card{
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: 0.2s;
  }
  
    .card-text{
      color: ${DefaultStyle.secondaryColorTwo};
  }
  
  .product-img{
      background-size: cover;
      background-position: center;
      height: 300px;
      width: 100%;
  }
  
  .price{
    color: ${DefaultStyle.primaryColor} !important; 
  }
  
  .card:hover {
        transform: scale(0.99, 0.99);
    }

`;