import styled from "styled-components";
import {DefaultStyle} from "../../assets/style/style";

export const FooterMenuStyleTwoBase = styled.div`

  background-color: ${DefaultStyle.secondaryColorOne};
  
  .container-fluid{
    padding: ${DefaultStyle.sectionPaddingTopBottom} ;
  }
  
  .logo{
    width: 120px;
  }
  
  .col-one p{
    width: 300px;
  }
  
  ul{
    margin:0px;
    padding:0px;
  }
  
  li{
    color: #fff;
    list-style: none;
  }
  
  P, a{
    color: #fff !important;
  }
  
  .social-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 15px;
  }
  
   .social-inner:hover{
    text-decoration: none;
    color: ${DefaultStyle.primaryColor};
   }
  
  
  .social .col {
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

`;