import React from "react";
import styled from "styled-components";

const TitleDiv = styled.div`
  font-weight: 700;
  font-size: 22px;
`;

const PageTitle = ({ text }) => {
  return <TitleDiv>{text}</TitleDiv>;
};

export default PageTitle;
