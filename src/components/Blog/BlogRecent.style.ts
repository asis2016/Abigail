import styled from "styled-components";
import {DefaultStyle} from "../../assets/style/style";


export const BlogRecentBase = styled.div`

  padding: ${DefaultStyle.sectionPaddingTopBottom} 0px;
  
  .card{
    transition: 0.2s;
  }
  
  
  .card:hover{
      transform: scale(0.99, 0.99);
    }

`;
