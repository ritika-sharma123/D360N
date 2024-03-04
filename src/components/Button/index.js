import React from "react";
import styled from "styled-components";
import "./index.css";

const DefaultButtonDiv = styled.div`
  text-align: center !important;
  
  border:${(props) =>
    props.image ? "1px solid #9d9d9d;" : "1px solid transparent;"}
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 21px;
  border-radius: 2px;
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
      : ""};
  color: ${(props) =>
    props.color ? props.color : props.disabled ? "grey" : "white"};
  font-size: 16px;
  cursor: pointer;
`;

const Button = ({
  name,
  backgroundColor,
  color,
  onClick,
  isDisabled,
  image,
}) => {
  return (
    <DefaultButtonDiv>
      {image ? <img src={image} alt="" width="15" height="15" /> : ""}

      <DefaultButton
        color={color}
        backgroundColor={backgroundColor}
        onClick={onClick}
        disabled={isDisabled}
        image={image}
      >
        {name}
      </DefaultButton>
    </DefaultButtonDiv>
  );
};

export default Button;
