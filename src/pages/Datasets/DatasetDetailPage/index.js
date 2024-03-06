import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import Button from "../../../components/Button";
import ArrowLeft from "../../../images/ArrowLeft.png";
import TextAreaInput from "../../../components/TextArea";
import SelectorInput from "../../../components/Selector";
import BreadCrumbs from "../../../components/BreadCrumbs";
import { useNavigate } from "react-router";
import AzureSqlForm from "../../Forms/azure_sql";
import AzureBlobForm from "../../Forms/azure_blob";
import axios from "axios";

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

const DataSetType = {
  "": "",
  "Azure SQL": "Azure SQL",
  "Azure Blob": "Azure Blob",
};

const DatasetDetailPage = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    dataset_type: "",
    dataset_description: "",
    dataset_name: "",
  });
  const [typeFormValues, setTypeFormValues] = useState({});
  const breadData = [
    { path: "datasets", text: "All Data Sets " },
    { path: "dataset-detail", text: "Add New Data Set" },
  ];

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setInputValue((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const formHandler = async () => {
    console.log("data", { ...inputValue, ...typeFormValues });
    const data = { ...inputValue, ...typeFormValues };
    try {
      const response = await axios.post("/save_dataset",
        data      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputValuesChange = (values) => {
    setTypeFormValues(values);
  };

  function toggleForms(value) {
    switch (value) {
      case "Azure SQL":
        return (
          <AzureSqlForm
            handleInputValuesChange={(values) =>
              handleInputValuesChange(values)
            }
          />
        );
      case "Azure Blob":
        return (
          <AzureBlobForm
            handleInputValuesChange={(values) =>
              handleInputValuesChange(values)
            }
          />
        );
      default:
        return "";
    }
  }

  useEffect(() => {
    setTypeFormValues({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue.dataset_type]);

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
        optionValue={Object.keys(DataSetType)}
        onChange={handlerChange}
        name="dataset_type"
      />
      <Input
        customClass="business-input"
        labelText="Data Set Name"
        onChange={handlerChange}
        name="dataset_name"
      />
      <TextAreaInput
        labelText="Data Set Description"
        onChange={handlerChange}
        name="dataset_description"
      />

      {inputValue.dataset_type &&
        toggleForms(DataSetType[inputValue.dataset_type])}

      <ButtonContainer>
        <Button
          name="Save"
          backgroundColor={`var(--button-background-color)`}
          color="#fff"
          onClick={formHandler}
        />
        <Button name="Cancel" backgroundcolor="white" color="black" />
      </ButtonContainer>
    </CreateBusiness>
  );
};

export default DatasetDetailPage;
