import React from 'react';
import './index.css';
import styled from 'styled-components';

const DefaultInput = styled.input`

`;

const Input =({type='text' , customClass}) =>{

    return(
        <>
          <DefaultInput className={`input ${customClass}`} type={type}>
          </DefaultInput>
          
        </>
    )
}

export default Input;