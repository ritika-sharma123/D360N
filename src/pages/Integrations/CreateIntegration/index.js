import React, { useState, useRef } from "react";
import styled from "styled-components";
import UploadFiles from "../../../components/UploadFiles";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import Button from "../../../components/Button";
import PaperClip from "../../../images/PaperClip.png";
import ArrowLeft from "../../../images/ArrowLeft.png";
import TextAreaInput from "../../../components/TextArea";
import SelectorInput from "../../../components/Selector";
import BreadCrumbs from "../../../components/BreadCrumbs";
import { useNavigate } from "react-router-dom";
const CreateIntegrationDiv = styled.div`
  width: calc(100% - 300px);
  display: flex;
  padding: 20px;
  flex-direction: column;
  box-sizing: border-box;
  .integration-input {
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
const CreateIntegration = () => {
  const [value, setValue] = useState();
  const [file, setFile] = useState();
  const [fileExtension, setFileExtension] = useState();
  const integration = ["integration1", "integration2"];
  const breadData = [
    { path: "allintegration", text: "All Integration " },
    { path: "createintegration", text: "Creat New  " },
  ];
  const getFile = (files) => {
    const file = files.target.files[0].name;
    const extension = file.split(".");
    setFile(files.target.files[0]);
    setFileExtension(extension[extension.length - 1]);
    console.log("uploaded file", extension[extension.length - 1]);
  };
  const getTextAreaValue = (event) => {
    console.log("textArea value", event.target.value);
  };
  const getSelectedValue = (event) => {
    console.log("Selected Option", event.target.value);
  };
  const navigate = useNavigate();
  const goToBack = () => navigate("/allintegration");
  return (
    <CreateIntegrationDiv className="home">
      <Navigation></Navigation>
      <BreadCrumbs breadData={breadData} />
      <Headingcontainer>
        <img src={ArrowLeft} height="16" width="17" onClick={goToBack} />
        <h1>Integration Details</h1>
      </Headingcontainer>
      <Input customClass="integration-input" labelText="Integration Name" />
      <TextAreaInput
        getTextAreaValue={getTextAreaValue}
        labelText="Integration Description"
      />
      <Label labelText="Select Integration Method" />
      <SelectorInput
        optionValue={integration}
        getSelectedValue={getSelectedValue}
      />
      <Label labelText="Select Source Type" />
      <SelectorInput
        optionValue={integration}
        getSelectedValue={getSelectedValue}
      />
      <Label labelText="Select Target Type" />
      <SelectorInput
        optionValue={integration}
        getSelectedValue={getSelectedValue}
      />
      <Input customClass="integration-input" labelText="Database Name" />
      <Input customClass="integration-input" labelText="Sever Name" />
      <Input customClass="integration-input" labelText="UserName" />
      <ButtonContainer>
        <Button name="Save" backgroundcolor="#357eff" color="#fff" />
        <Button name="Cancel" backgroundcolor="white" color="black" />
      </ButtonContainer>
    </CreateIntegrationDiv>
  );
};

export default CreateIntegration;
