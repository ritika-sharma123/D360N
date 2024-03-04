import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import ProgressBar from "../../../components/ProgressBar";
import Union from "../../../images/Union.png";
const AllBusiness = styled.div`
  display: flex;
  align-items: center;
`;
const AllBusinessContainer = styled.div``;
const TitleDiv = styled.div``;

const Business = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/createbusiness");
  //const handleClick = () => handleProgress();
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  return (
    <AllBusinessContainer className="home">
      <AllBusiness>
        <TitleDiv>All Business Files</TitleDiv>
        <Button
          onClick={handleClick}
          image={Union}
          name="Create New"
          backgroundColor="white"
          color="black"
        />
      </AllBusiness>
    </AllBusinessContainer>
  );
};

export default Business;
