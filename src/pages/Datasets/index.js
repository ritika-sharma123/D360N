import React, { useEffect, useState } from "react";
import DataTable from "../../components/DataTable";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";

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

const AllDatasetsContainer = styled.div`
  padding-top: 10px;
`;
const AllDataSets = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const sampleColumnData = [
  {
    field: "datasets",
    headerName: "Data Sets",
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

const DatasetsPage = () => {
  const navigate = useNavigate();
  const [rowData, setRowData] = useState([]);

  const createColumnsData = () => {
    let columnData = [];
    sampleColumnData.forEach((item, index) => {
      if (item.field === "action") {
        columnData.push({
          ...item,
          renderCell: (props) => {
            return (
              <ActionLinks>
                <div onClick={() => handleRoute(props)}>Remove</div>
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

  const getDatasets = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products/1");
      console.log("response", response);
      //   setRowData();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDatasets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRoute = (rowDetail) => {
    navigate(`/all-manage-integrations/${rowDetail?.row.integration_name}`, {
      state: { rowDetail: rowDetail?.row },
    });
  };

  const handleClick = () => {
    navigate("/dataset-detail");
  };

  return (
    <AllDatasetsContainer className="home">
      <AllDataSets>
        <PageTitle text="All Data Sets" />
        <Button
          name="Add New Data Set"
          color="black"
          onClick={handleClick}
        ></Button>
      </AllDataSets>
      <DataTable
        columns={columnData || []}
        rows={rowData || []}
        handleRowClick={(row) => handleRowClick(row)}
      />
    </AllDatasetsContainer>
  );
};

export default DatasetsPage;
