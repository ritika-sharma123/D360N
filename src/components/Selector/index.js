import React from "react";
import styled from "styled-components";

const SelectIntegration = styled.select`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 8px 12px 8px 12px;
  border: 1px solid #d9d9d9;
  background-color: white;
  margin-top: 10px;
  outline: none;
`;

const SlectorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const SelectorInput = ({ optionValue, getSelectedValue, onChange, name }) => {
  return (
    <SlectorContainer>
      <SelectIntegration onChange={onChange} name={name} isClearable={false}>
        {optionValue.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </SelectIntegration>
    </SlectorContainer>
  );
};

export default SelectorInput;
