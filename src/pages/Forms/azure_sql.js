import React from "react";
import Input from "../../components/Input";
import styled from "styled-components";

const AzureForm = styled.div`
  margin-top: 20px;
  .integration-input {
    border: 1px solid #d9d9d9;
    height: 30px;
  }
`;

const AzureSqlForm = ({ handleInputValuesChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleInputValuesChange((previous) => ({ ...previous, [name]: value }));
  };
  return (
    <AzureForm>
      <Input
        customClass="integration-input"
        labelText="Server Name"
        onChange={handleChange}
        name="server_name"
      />
      <Input
        customClass="integration-input"
        labelText="Database Name"
        onChange={handleChange}
        name="database_name"
      />
      <Input
        customClass="integration-input"
        labelText="User Name"
        onChange={handleChange}
        name="user_id"
      />
      <Input
        customClass="integration-input"
        labelText="Password"
        onChange={handleChange}
        name="password"
      />
    </AzureForm>
  );
};

export default AzureSqlForm;
