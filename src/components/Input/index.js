import React from 'react';
import './index.css';
import styled from 'styled-components';
import Label from '../Label';

const DefaultInput = styled.input`

`;

const LabelInputDiv = styled.div`
display:flex;
flex-direction:column;
gap:10px;
margin-bottom:20px !important;

input{
    padding:8px 12px 8px 12px;
    height:25px;
    border:1px solid transparent;
    border-radius:2px;
}

img{
    position: relative;
    right: -92%;
    top: -39px;
    margin:0px;
    padding:0px
}
`;

const Input =({type='text' , labelText,  customClass}) =>{

    return(
        <LabelInputDiv>
          <Label labelText={labelText}/>
          <DefaultInput className={`input ${customClass}`} type={type}>
          </DefaultInput>
        </LabelInputDiv>
    )
}

export default Input;