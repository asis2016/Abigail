import styled from "styled-components";
import {DefaultStyle} from "../../assets/style/style";

export const PopularProductStyleOneBase = styled.div`

  padding: ${DefaultStyle.sectionPaddingTopBottom} 0px;
  
  .card{
    border: none;
    background-color: transparent;
  }
  
  .card-body{
    padding: 1.25rem 0px;
  }
  
  .card-text{
      color: ${DefaultStyle.secondaryColorTwo};
  }
  
  .price{
    color: ${DefaultStyle.primaryColor} !important; 
  }

`;