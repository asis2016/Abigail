import styled from "styled-components";
import {DefaultStyle} from "../../assets/style/style";


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
  
  .price{
    color: ${DefaultStyle.primaryColor} !important; 
  }
  
  .card:hover {
        transform: scale(0.99, 0.99);
    }

`;