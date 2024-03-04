import React from "react";
import styled from "styled-components";
import Label from "../Label";

const TextArea = styled.textarea`
  width: 100%;
  height: 95px;
  box-sizing: border-box;
  margin-top: 10px;
  padding: 8px 12px 8px 12px;
  border: 1px solid #d9d9d9;
  outline: none;
`;

const TextAreaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const TextAreaInput = ({ labelText, getTextAreaValue }) => {
  const GetTextAreaValue = (event) => {
    getTextAreaValue(event);
  };
  return (
    <TextAreaContainer>
      <Label labelText={labelText} />
      <TextArea placeholder="Enter" onChange={GetTextAreaValue} />
    </TextAreaContainer>
  );
};

export default TextAreaInput;
