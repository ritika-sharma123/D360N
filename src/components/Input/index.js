import React from "react";
import "./index.css";
import styled from "styled-components";
import Label from "../Label";

const DefaultInput = styled.input``;

const LabelInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px !important;

  input {
    padding: 8px 12px 8px 12px;
    height: 25px;
    border: 1px solid transparent;
    border-radius: 2px;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

const InputImgDiv = styled.div`
  background-color: white;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    outline: none;
  }
`;

const Input = ({ type = "text", labelText, customClass, suffix, onChange }) => {
  return (
    <LabelInputDiv>
      <Label labelText={labelText} />
      <InputImgDiv>
        <DefaultInput
          className={`input ${customClass}`}
          type={type}
          onChange={onChange}
        ></DefaultInput>
        {suffix}
      </InputImgDiv>
    </LabelInputDiv>
  );
};

export default Input;
