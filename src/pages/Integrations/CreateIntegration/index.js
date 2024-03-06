import React, { useState, useRef, useEffect } from "react";
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
import axios from "axios";
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
  const [formData, setFormData] = useState({
    integration: "",
    description: "",
    method: "",
    sourcetype: "",
    targettype: "",
  });
  const [file, setFile] = useState();
  const [fileExtension, setFileExtension] = useState();
  const [source, setSource] = useState([]);
  const [target, setTarget] = useState([]);
  const integration = ["SCDI", "SCDII", "CDC"];
  const breadData = [
    { path: "allintegration", text: "All Integration " },
    { path: "createintegration", text: "Creat New  " },
  ];
  const getTextAreaValue = (event) => {
    console.log("textArea value", event.target.value);
  };
  const getSelectedValue = (event) => {
    console.log("Selected Option", event.target.value);
  };
  const navigate = useNavigate();
  const goToBack = () => navigate("/allintegration");
  const HandlerChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formHandler = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );
      console.log("Post created:", response.data);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const getDatasets = async () => {
    try {
      const response = await axios.get("");
      console.log("datasets dropdoen", response);
    } catch (err) {
      console.log(err);
    }

    // const arr = response?.data?.map((item, index) => {
    //   return item.dataset_name;
    // });

    // console.log("arr", arr);
  };

  useEffect(() => {
    getDatasets();
  }, []);

  return (
    <CreateIntegrationDiv className="home">
      <Navigation></Navigation>
      <BreadCrumbs breadData={breadData} />
      <Headingcontainer>
        <img src={ArrowLeft} height="16" width="17" onClick={goToBack} />
        <h1>Integration Details</h1>
      </Headingcontainer>
      <Input
        customClass="integration-input"
        labelText="Integration Name"
        onChange={HandlerChange}
        name="integration_name"
      />
      <TextAreaInput
        getTextAreaValue={getTextAreaValue}
        labelText="Integration Description"
        onChange={HandlerChange}
        name="integration_description"
      />
      <Label labelText="Select Integration Method" />
      <SelectorInput
        optionValue={integration}
        getSelectedValue={getSelectedValue}
        onChange={HandlerChange}
        name="integration_method"
      />
      <Label labelText="Select Source" />
      <SelectorInput
        optionValue={source}
        getSelectedValue={getSelectedValue}
        onChange={HandlerChange}
        name="source_dataset"
      />
      <Label labelText="Select Target" />
      <SelectorInput
        optionValue={target}
        getSelectedValue={getSelectedValue}
        onChange={HandlerChange}
        name="target_dataset"
      />
      <ButtonContainer>
        <Button
          name="Save"
          backgroundcolor="var(--button-background-color)"
          color="#fff"
          onClick={formHandler}
        />
        <Button name="Cancel" backgroundcolor="white" color="black" />
      </ButtonContainer>
    </CreateIntegrationDiv>
  );
};

export default CreateIntegration;
