import styled from "styled-components";

export const CardProfileStyleOneBase = styled.div`

  .card{
  border: none;
  }
  img{
      border-radius: 50%;
      height: 150px;
      width: 150px;
      object-fit: cover;
      top:0;
  }
  
  .card-body{
      text-align: center;
  }
  
  .card-profile-simple-col{
    display: flex;
    justify-content: center;
  }
  
  .card-profile-simple-col a{
    padding: 10px;
    font-size: 1.5rem;
  }
  
  .card-profile-simple-col a:hover{
  }
  
  .card{
    max-width: 18rem;
    margin: 10px;
  }

`;