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
const CreateBusiness = styled.div`
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
const CreateNewBusiness = () => {
  const [value, setValue] = useState();
  const [file, setFile] = useState();
  const [fileExtension, setFileExtension] = useState();
  const integration = ["integration1", "integration2"];
  const breadData = [
    { path: "business", text: "All Business Files " },
    { path: "createbusiness", text: "Creat new business " },
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
  return (
    <CreateBusiness className="home">
      <Navigation></Navigation>
      <BreadCrumbs breadData={breadData} />
      <Headingcontainer>
        <img src={ArrowLeft} height="16" width="17" />
        <h1>React File Upload</h1>
      </Headingcontainer>
      <Input customClass="business-input" labelText="Business File Name" />
      <Label labelText="Select Integration" />
      <SelectorInput
        optionValue={integration}
        getSelectedValue={getSelectedValue}
      />
      <TextAreaInput getTextAreaValue={getTextAreaValue} />
      <UploadFiles
        text1="click or drag file to this area to upload"
        text2="Only files with .json format supported"
        getFile={getFile}
      />
      <p className="paperclip">
        <img src={PaperClip} alt="v" height="14" width="14" />
        XXX.json
      </p>
      <ButtonContainer>
        <Button name="Save" backgroundcolor="#357eff" color="#fff" />
        <Button name="Cancel" backgroundcolor="white" color="black" />
      </ButtonContainer>
    </CreateBusiness>
  );
};

export default CreateNewBusiness;
