import React from "react";
import styled from "styled-components";
import "../../App.css";

const DefaultButtonDiv = styled.div`
  text-align: center !important;
`;

const DefaultButton = styled.button`
  width: 100px;
  height: 40px;
  border: 1px solid transparent;
  border-radius: 2px;
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.disabled
      ? "var(--grey)"
      : "var(--button-background-color)"};
  color: ${(props) =>
    props.color ? props.color : props.disabled ? "grey" : "white"};
  font-size: 16px;
  cursor: pointer;
`;

const Button = ({ name, backgroundColor, color, onClick, isDisabled }) => {
  return (
    <DefaultButtonDiv>
      <DefaultButton
        color={color}
        backgroundColor={backgroundColor}
        onClick={onClick}
        disabled={isDisabled}
      >
        {name}
      </DefaultButton>
    </DefaultButtonDiv>
  );
};

export default Button;
