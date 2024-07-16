import styled from "styled-components";
import LogoAlura from "../../assets/img/LogoMain.png"

const FooterContainer = styled.footer`
  background: linear-gradient(to bottom, rgb(3, 9, 15), rgb(3, 9, 15) 100%);
  color: #fff;
  padding: 40px;
  text-align: center;
  border-top: 4px solid var(--Blue, rgba(34, 113, 209, 1));
  box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.7);
`;


import React from 'react'

function Footer() {
  return (
    <FooterContainer>
    <img src={LogoAlura}/>
    </FooterContainer> 
  )
}

export default Footer