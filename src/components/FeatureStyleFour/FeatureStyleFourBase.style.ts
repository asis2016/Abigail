import styled from "styled-components";
import {color} from "../../assets/style/style";


export const FeatureStyleFourBase = styled.div`

  .container-fluid{
    position: relative;
  }
  
  .overlay{
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.2);
  }

  .col{
    background-size: cover;
    background-position: top center;
    padding: 50px;
    padding-top: 100px;
    min-height: 80vh;
  }
  
   h1{
    position: relative;
    z-index: 2;
    color: ${color.white};
  }
  
  .btn{
    position: absolute;
    bottom: 20px;
    z-index: 2;
    font-size: 1.5rem;
    border-color: ${color.white};
    color: ${color.white};
  }
  
`;
