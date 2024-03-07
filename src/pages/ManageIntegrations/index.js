import React, { useEffect, useState } from "react";
import DataTable from "../../components/DataTable";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

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
    editable: true,
  },
  {
    field: "integration_method",
    headerName: "Integration Method",
    flex: 1,
    headerAlign: "center",
    align: "center",
    editable: true,
  },
  {
    field: "action",
    headerName: "Action",
    headerAlign: "center",
    align: "center",
    flex: 1,
    editable: true,
  },
];

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
const ManageIntegrationDiv = styled.div`
  width: calc(100% - 300px);
`;
const ManageIntegrationsPage = () => {
  const navigate = useNavigate();

  const createColumnsData = () => {
    let columnData = [];
    sampleColumnData.forEach((item, index) => {
      if (item.field === "action") {
        columnData.push({
          ...item,
          renderCell: (props) => {
            return (
              <ActionLinks>
                <div onClick={() => handleRoute(props)}>Manage</div>
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
  const [rowData, setRowData] = useState([
    {
      id: 1,
      integration_description:
        "A pipeline implementing SCDII on Azure SQL DB data complied on business file (businessfile.json) associated to the integration",
      integration_method: "SCDII",
      integration_name: "SCDII_AZSQL_to_ADLS_Gen 2",
    },
  ]);

  useEffect(() => {
    setColumnData(createColumnsData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sampleColumnData]);

  const handleRoute = (rowDetail) => {
    navigate(`/all-manage-integrations/${rowDetail?.row.integration_name}`, {
      state: { rowDetail: rowDetail?.row },
    });
  };

  const getManageIntegrations = async () => {
    try {
      const response = await axios.get("/manage_list_integrations");
      setRowData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getManageIntegrations();
  }, []);

  return (
    <ManageIntegrationDiv className="home">
      <h2>Manage Integrations</h2>
      <br></br>
      <DataTable columns={columnData} rows={rowData} />
    </ManageIntegrationDiv>
  );
};

export default ManageIntegrationsPage;
