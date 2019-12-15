import styled from "styled-components";
import {DefaultStyle} from "../../assets/style/style";

export const PopularProductStyleOneBase = styled.div`

  padding: ${DefaultStyle.sectionPaddingTopBottom} 0px;
  
  .card{
    border: none;
    background-color: transparent;
    box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
    cursor: pointer;
    transition: 0.4s;
  }
  
  .card-body{
    padding: 15px;
  }
  
  .card-text{
      color: ${DefaultStyle.secondaryColorTwo};
  }
  
  .price{
    color: ${DefaultStyle.primaryColor} !important; 
  }
  
  .card:hover {
      transform: scale(0.9, 0.9);
      box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), 
        -5px -5px 30px 15px rgba(0,0,0,0.22);
    }

`;