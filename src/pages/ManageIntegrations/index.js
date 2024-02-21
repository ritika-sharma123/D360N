import React, { useEffect, useState } from "react";
import DataTable from "../../components/DataTable";
import { sampleRowData, sampleColumnData } from "../../mocks/SampleData";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ActionLinks = styled.div`
  display: flex;
  text-decoration: none;
  justify-content: space-evenly;
  width: 100%;

  a {
    text-decoration: none;
    color: #1890ff;
  }
`;

const ManageIntegrationsPage = () => {
  const createColumnsData = () => {
    let columnData = [];
    sampleColumnData.forEach((item, index) => {
      if (item.headerName === "Actions") {
        columnData.push({
          ...item,
          renderCell: () => (
            <>
              <ActionLinks>
                <Link>Manage</Link>
                <Link>Edit</Link>
              </ActionLinks>
            </>
          ),
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

  return (
    <div className="home">
      <h2>Manage Integrations</h2>
      <br></br>
      <DataTable columns={columnData} rows={sampleRowData} />
    </div>
  );
};

export default ManageIntegrationsPage;
