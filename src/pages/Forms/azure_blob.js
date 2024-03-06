import React from "react";
import Input from "../../components/Input";
import styled from "styled-components";

const BlobForm = styled.div`
  margin-top: 20px;
  .integration-input {
    border: 1px solid #d9d9d9;
    height: 30px;
  }
`;

const AzureBlobForm = ({ handleInputValuesChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleInputValuesChange((previous) => ({ ...previous, [name]: value }));
  };
  return (
    <BlobForm>
      <Input
        customClass="integration-input"
        labelText="Server Name"
        onChange={handleChange}
        name="server_name"
      />
    </BlobForm>
  );
};

export default AzureBlobForm;
