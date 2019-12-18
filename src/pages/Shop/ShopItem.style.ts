import styled from "styled-components";


interface IProps {
    img: string;
}

export const ShopItemBase = styled.div<IProps>`

  margin-top:40px;
  padding: 0px 0px;
  
  .product-img{
      background-image: url(${({img}) => img ? (require('../../assets/images/product/' + img)) : ''});
      background-size: cover;
      background-position: center;
      height: 500px;
      width:100%;
      
}

`;