import React, { useEffect, useState } from "react";
import DataTable from "../../components/DataTable";
import { sampleRowData, sampleColumnData } from "../../mocks/SampleData";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

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

  const handleRowClick = (row) => {};

  useEffect(() => {
    setColumnData(createColumnsData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sampleColumnData]);

  const handleRoute = (rowDetail) => {
    navigate(`/all-manage-integrations/${rowDetail?.row.integration_name}`, {
      state: { rowDetail: rowDetail?.row },
    });
  };

  return (
    <div className="home">
      <h2>Manage Integrations</h2>
      <br></br>
      <DataTable
        columns={columnData}
        rows={sampleRowData}
        handleRowClick={(row) => handleRowClick(row)}
      />
    </div>
  );
};

export default ManageIntegrationsPage;
