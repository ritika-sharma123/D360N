import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
const AllBusiness = styled.div``;
const AllBusinessContainer = styled.div``;
const TitleDiv = styled.div``;
const Business = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/createbusiness");
  return (
    <AllBusinessContainer className="home">
      <AllBusiness>
        <TitleDiv>All Business Files</TitleDiv>
        <button onClick={handleClick}>Create New</button>
      </AllBusiness>
    </AllBusinessContainer>
  );
};

export default Business;
