import React from "react";
import styled from "styled-components";
import "../../App.css";

const ColorBoxDivContainer = styled.div`
  display: flex;
  gap: 10px;

  flex-direction: row;
`;
const ColorBoxDiv = styled.div`
  background-color: ${(props) => (props.Color ? props.Color : "")};
  width: 15px;
  height: 15px;
`;
const ColorBox = ({ Text, Color }) => {
  return (
    <ColorBoxDivContainer>
      <ColorBoxDiv Color={Color}></ColorBoxDiv>
      <div>{Text}</div>
    </ColorBoxDivContainer>
  );
};

export default ColorBox;
