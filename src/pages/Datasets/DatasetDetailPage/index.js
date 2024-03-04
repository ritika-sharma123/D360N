import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import Button from "../../../components/Button";
import ArrowLeft from "../../../images/ArrowLeft.png";
import TextAreaInput from "../../../components/TextArea";
import SelectorInput from "../../../components/Selector";
import BreadCrumbs from "../../../components/BreadCrumbs";
import { useNavigate } from "react-router";
const CreateBusiness = styled.div`
  width: calc(100% - 300px);
  display: flex;
  padding: 20px;
  flex-direction: column;
  box-sizing: border-box;
  .business-input {
    border: 1px solid #d9d9d9;
    height: 30px;
  }
  .paperclip {
    display: flex;
    color: #357eff;
    font-size: 14px;
    align-items: center;
    gap: 5px;
  }
`;
const Headingcontainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  h1 {
    font-size: 20px;
    font-weight: 500;
  }
`;
const Navigation = styled.div`
  width: 100%;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;
const DatasetDetailPage = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const [file, setFile] = useState();
  const [fileExtension, setFileExtension] = useState();
  const integration = ["integration1", "integration2"];
  const breadData = [
    { path: "datasets", text: "All Data Sets " },
    { path: "dataset-detail", text: "Add New Data Set" },
  ];
  const getTextAreaValue = (event) => {
    console.log("textArea value", event.target.value);
  };
  const getSelectedValue = (event) => {
    console.log("Selected Option", event.target.value);
  };
  return (
    <CreateBusiness className="home">
      <Navigation></Navigation>
      <BreadCrumbs breadData={breadData} />
      <Headingcontainer>
        <img
          src={ArrowLeft}
          height="16"
          width="17"
          alt=""
          onClick={() => navigate(-1)}
        />
        <h1>Data Set Details</h1>
      </Headingcontainer>
      <Label labelText="Select Data Set Type" />
      <SelectorInput
        optionValue={integration}
        getSelectedValue={getSelectedValue}
      />
      <Input customClass="business-input" labelText="Data Set Name" />
      <TextAreaInput
        getTextAreaValue={getTextAreaValue}
        labelText="Data Set Description"
      />
      <ButtonContainer>
        <Button
          name="Save"
          backgroundColor={`var(--button-background-color)`}
          color="#fff"
        />
        <Button name="Cancel" backgroundcolor="white" color="black" />
      </ButtonContainer>
    </CreateBusiness>
  );
};

export default DatasetDetailPage;
