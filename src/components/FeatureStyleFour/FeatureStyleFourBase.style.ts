import styled from "styled-components";


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
    background-color: rgba(0,0,0,0.5);
  }

  .col{
    background-size: cover;
    padding: 50px;
    padding-top: 100px;
    min-height: 80vh;
  }
  
   h2, .price{
    position: relative;
    z-index: 2;
    color: #fff;
  }
  
  .price{
    font-size: 1.5rem;
  }
  
  .btn{
    position: absolute;
    bottom: 20px;
    z-index: 2;
    font-size: 1.5rem;
    color: #fff;
    border-color: #fff;
  }

`;
