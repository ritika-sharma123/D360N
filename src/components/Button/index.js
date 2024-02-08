import React from 'react';
import styled from 'styled-components';

const DefaultButtonDiv = styled.div`
text-align:center !important;
`;

const DefaultButton = styled.button`
width:100px;
height:40px;
border:1px solid transparent;
border-radius:2;
background-color:${(props) => props.backgroundColor? '#FF7A45' : ''};
color:${(props) => props.color? 'white' :''}
`

const Button = ({name}) =>{

    return(
        <DefaultButtonDiv>
         <DefaultButton color backgroundColor>{name}</DefaultButton>
        </DefaultButtonDiv>
    )
}

export default Button;