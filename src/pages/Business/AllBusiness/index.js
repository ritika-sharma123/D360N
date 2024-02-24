import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import ProgressBar from "../../../components/ProgressBar";
const AllBusiness = styled.div``;
const AllBusinessContainer = styled.div``;
const TitleDiv = styled.div``;
const ProgressBarContainer = styled.div`
  display: flex;
  gap: 0px;
`;
const Business = () => {
  const navigate = useNavigate();
  //const handleClick = () => navigate("/createbusiness");
  const handleClick = () => handleProgress();
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const progressData = [
    { raw: 0, silver: 0, gold: 0 },
    { raw: 33, silver: 0, gold: 0 },
    { raw: 100, silver: 33, gold: 0 },
    { raw: 100, silver: 100, gold: 33 },
    { raw: 100, silver: 100, gold: 100 },
  ];
  console.log(data);
  const handleProgress = () => {
    var i = 0;
    setData([progressData[0]]);

    setInterval(() => {
      i++;

      if (i < 5) {
        setData([progressData[i]]);
      }
    }, 5000);
  };

  return (
    <AllBusinessContainer className="home">
      <AllBusiness>
        <TitleDiv>All Business Files</TitleDiv>
        <button onClick={handleClick}>Create New</button>
      </AllBusiness>
      <ProgressBarContainer>
        <ProgressBar scale={data[0]?.raw} width="100px" />
        <ProgressBar scale={data[0]?.silver} width="100px" />
        <ProgressBar scale={data[0]?.gold} width="100px" />
      </ProgressBarContainer>
    </AllBusinessContainer>
  );
};

export default Business;
