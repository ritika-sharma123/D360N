import React, { useEffect, useState } from "react";
import DataTable from "../../components/DataTable";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import Union from "../../images/Union.png";

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
    field: "dataset_name",
    headerName: "Datasets Name",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "dataset_description",
    headerName: "Datasets Description",
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
              <>
                <ActionLinks>
                  <div onClick={() => handleRoute(props)}>Edit</div>
                </ActionLinks>
                <ActionLinks>
                  <div onClick={() => handleRoute(props)}>Delete</div>
                </ActionLinks>
              </>
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
      const response = await axios.get("/list_datasets");
      console.log("response", response);
      setRowData(response.data);
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
        <PageTitle text="All Datasets" />
        <Button
          onClick={handleClick}
          image={Union}
          name="Add New Dataset"
          backgroundColor="white"
          color="black"
        />
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
