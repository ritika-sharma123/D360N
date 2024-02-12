import React from 'react';
import styled from 'styled-components';

 const DefaultLabel = styled.label`2
     font-size:14px;
 `;

const Label =({text='text' }) =>{

    return(
        <>
          <DefaultLabel>{text}</DefaultLabel>
        </>
    )
}

export default Label;