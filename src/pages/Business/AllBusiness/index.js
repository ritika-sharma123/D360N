import React from "react";
import styled from "styled-components";
const BusinessPage = styled.div`
  width: 100%;
  display: flex;
`;
const BusinessHeading = styled.div`
  width: 100%;
  display: flex;
`;
const Business = () => {
  return (
    <BusinessPage>
      <BusinessHeading>
        <Title>All Business Files</Title>
      </BusinessHeading>
      Business Page
    </BusinessPage>
  );
};

export default Business;
