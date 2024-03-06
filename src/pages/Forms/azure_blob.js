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
        labelText="Storage Account Name"
        onChange={handleChange}
        name="storage_account_name"
      />
      <Input
        customClass="integration-input"
        labelText="Storage Account Access Key"
        onChange={handleChange}
        name="storage_account_access_key"
      />
      <Input
        customClass="integration-input"
        labelText="Blob Container Name"
        onChange={handleChange}
        name="blob_container_name"
      />
      <Input
        customClass="integration-input"
        labelText="Mount Point"
        onChange={handleChange}
        name="mountpoint"
      />
    </BlobForm>
  );
};

export default AzureBlobForm;
