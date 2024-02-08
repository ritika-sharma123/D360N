import React from 'react';
import styled from 'styled-components';

const Button = ({name ,backgroundColor}) =>{

    const DefaultButtonDiv = styled.div`
        text-align:center !important
    `;

    const DefaultButton = styled.button`
        width:100px,
        height:40px,
        border:1px solid transparent,
        border-radius:2,
        background-color:${()=>backgroundColor}
`

    return(
        <DefaultButtonDiv>
         <DefaultButton>{name}</DefaultButton>
        </DefaultButtonDiv>
    )
}

export default Button;