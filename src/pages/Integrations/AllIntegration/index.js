import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import DataTable from "../../../components/DataTable";
import { sampleRowData } from "../../../mocks/SampleData";
import { useNavigate } from "react-router-dom";
import "./index.css";
import styled from "styled-components";
import Union from "../../../images/Union.png";
import axios from "axios";
const ActionLinks = styled.div`
  display: flex;
  text-decoration: none;
  justify-content: space-evenly;
  width: 100%;

  div {
    cursor: pointer;
    color: var(--blue);
  }
`;
const sampleColumnData = [
  {
    field: "integration_name",
    headerName: "Integration Name",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "integration_description",
    headerName: "Integration Description",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "action",
    headerName: "Actions",
    headerAlign: "center",
    align: "center",
    flex: 1,
    editable: true,
  },
];

const AllIntegration = () => {
  const [rowData, setRowData] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => navigate("/createintegration");
  const createColumnsData = () => {
    let columnData = [];
    sampleColumnData.forEach((item, index) => {
      if (item.field === "action") {
        columnData.push({
          ...item,
          renderCell: (props) => {
            return (
              <ActionLinks>
                <div>Edit</div>
              </ActionLinks>
            );
          },
        });
      } else {
        columnData.push({
          ...item,
        });
      }
    });
    return columnData;
  };
  const [columnData, setColumnData] = useState(createColumnsData());
  useEffect(() => {
    setColumnData(createColumnsData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sampleColumnData]);
  const getIntegrations = async () => {
    try {
      const response = await axios.get("/list_integrations");
      console.log("response", response);
      setRowData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getIntegrations();
  }, []);
  return (
    <div className="home">
      <div className="heading-container">
        <h2>All Integrations</h2>
        <Button
          image={Union}
          name="Create New"
          backgroundColor="white"
          color="black"
          onClick={handleClick}
        />
      </div>
      <DataTable columns={columnData || []} rows={rowData || []} />
      <br></br>
    </div>
  );
};
export default AllIntegration;
