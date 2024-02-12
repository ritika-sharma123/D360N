import React from 'react';
import styled from 'styled-components';

const DefaultButtonDiv = styled.div`
text-align:center !important;
`;

const DefaultButton = styled.button`
width:100px;
height:40px;
border:1px solid transparent;
border-radius:2px;
background-color:${(props) => props.backgroundcolor? '#FF7A45' : ''};
color:${(props) => props.color? 'white' :''};
font-size:16px;
cursor:pointer
`

const Button = ({name,backgroundcolor , color}) =>{

    return(
        <DefaultButtonDiv>
         <DefaultButton color={color} backgroundcolor={backgroundcolor}>{name}</DefaultButton>
        </DefaultButtonDiv>
    )
}

export default Button;