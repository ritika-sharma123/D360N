import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/Logo.png';

const HeaderContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: calc(100vh-100px);

img{
    width:480px;
    height:80px;
}
`;

const Header = () =>{
    return(
        <HeaderContainer>
            <img src={Logo} alt='Logo'></img>
        </HeaderContainer>
    )
};

export default Header;