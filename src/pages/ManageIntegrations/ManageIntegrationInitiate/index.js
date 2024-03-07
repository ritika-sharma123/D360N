import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
import DataTable from "../../../components/DataTable";
import ArrowLeft from "../../../images/ArrowLeft.png";
import styled from "styled-components";
import BreadCrumbs from "../../../components/BreadCrumbs";
import Button from "../../../components/Button";
import ProgressBar from "../../../components/ProgressBar";
import ColorBox from "../../../components/ColorBox";
import axios from "axios";
import fileTransfer from "../../../images/fileTransfer.gif";

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
    field: "source_dataset",
    headerName: "Source Information",
    flex: 1,
    headerAlign: "center",
    align: "center",
    editable: true,
  },
  {
    field: "target_dataset",
    headerName: "Target Information",
    flex: 1,
    headerAlign: "center",
    align: "center",
    editable: true,
  },
];

const ManageIntegration = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  box-sizing: border-box;
`;

const Headingcontainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  h1 {
    font-size: 20px;
    font-weight: 500;
  }
  img {
    cursor: pointer;
  }
`;

const Navigation = styled.div`
  width: 100%;
`;

const ProcessDiv = styled.div`
  border: 1px solid var(--grey);
  margin-top: 10px;
  padding: 10px;
  display: flex;
  align-items: end;
`;
const ProgressBarContainer = styled.div`
  display: flex;
  gap: 0px;
  width: 60%;
`;
const ColorBoxContainer = styled.div`
  display: flex;

  width: 100%;
  gap: 10px;

  div {
    display: flex;
  }
`;
const BlankDiv = styled.div`
  width: 80%;
`;
const BoxContainer = styled.div`
  width: 20%;
  width: 20%;
  display: flex;
  flex-direction: column;
`;
const ManageIntegrationInitiate = () => {
  //const { pathname } = useLocation();
  const {
    state: { rowDetail },
  } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [isDisabled, setIsDisabled] = useState(false);
  const [data, setData] = useState({});
  const [loadState, setLoadState] = useState("InitialLoad");
  const [rowData, setRowData] = useState([
    {
      id: 1,
      integration_description:
        "A pipeline implementing SCDII on Azure SQL DB data complied on business file (businessfile.json) associated to the integration",
      integration_name: "SCDII_AZSQL_to_ADLS_Gen 2",
      source_dataset: "az_sql",
      status_initial_load: "Not Done",
      target_dataset: "az_blob",
    },
  ]);

  const pollStatus = async (run_id) => {
    const pp_progress = await fetch(`/execution_status/${run_id}`);
    const pp_progress_json = await pp_progress.json();
    setData({ ...pp_progress_json, scale: 100 });
    return pp_progress_json;
  };
  const handleProgress = async (key) => {
    // setIsDisabled(true)
    const data = {
      trigger_name: key,
      integration_name: rowDetail.integration_name,
    };
    const response = await axios.post("/execute_pipeline/", data);
    const res_json = await response.json();
    const run_id = res_json.run_id;
    pollStatus(run_id);
    const intervalID = setInterval(() => {
      let res = pollStatus(run_id);
      if (
        res.raw_status === "Succeeded" &&
        res.gold_status === "Succeeded" &&
        res.silver_status === "Succeeded"
      ) {
        clearInterval(intervalID);
      }
    }, 5000);
    return () => clearInterval(intervalID);
  };

  const breadData = [
    { path: "all-manage-integrations", text: "All Integrations" },
    { path: "all-manage-integrations/:id", text: "Manage Integrations" },
  ];

  useEffect(() => {
    const fetchDataApi = async () => {
      const data = rowDetail.integration_name;
      try {
        const response = await axios.post("/manage_integration_info", { data });
        setRowData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDataApi();
  }, [rowDetail]);

  return (
    <ManageIntegration className="home">
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
        <h1>{rowDetail.integration_name}</h1>
      </Headingcontainer>
      <br></br>
      <DataTable rows={rowData || []} columns={sampleColumnData} />
      {rowDetail.integration_method === "SCDII" ? (
        rowData[0].status_initial_load === "Not Done" ? (
          <ProcessDiv>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 20,
                width: "85%",
              }}
            >
              <ProgressBarContainer>
                <ProgressBar
                  scale={data?.scale}
                  width="100px"
                  status={data?.raw_status}
                  Text={data?.silver_status ? "Bronze Layer  " : ""}
                />
                <ProgressBar
                  scale={data?.scale}
                  width="100px"
                  status={data?.silver_status}
                  Text={data?.silver_status ? "Silver Layer  " : ""}
                />
                <ProgressBar
                  scale={data?.scale}
                  width="100px"
                  status={data?.gold_status}
                  Text={data?.silver_status ? "Gold Layer " : ""}
                />
              </ProgressBarContainer>

              <Button
                name="Start Initial Load"
                onClick={() => handleProgress("InitialLoad")}
                isDisabled={isDisabled}
                backgroundColor={`var(--button-background-color)`}
              />
            </div>
            <div>
              <ColorBoxContainer>
                <BlankDiv></BlankDiv>
                <BoxContainer>
                  <div>
                    <ColorBox Color="#1890FF" Text="Queued"></ColorBox>
                  </div>
                  <div>
                    <ColorBox Color="#FFFF00" Text="InProgress"></ColorBox>
                  </div>
                  <div>
                    <ColorBox Color="#52C41A" Text="Succeeded"></ColorBox>
                  </div>
                  <div>
                    <ColorBox Color="red" Text="Cancelled"></ColorBox>
                  </div>
                </BoxContainer>
              </ColorBoxContainer>
            </div>
          </ProcessDiv>
        ) : (
          <ProcessDiv>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 20,
                width: "85%",
              }}
            >
              <Button
                name="Start Incremental Load"
                onClick={() => handleProgress("IncrementalLoad")}
                isDisabled={isDisabled}
                backgroundColor={`var(--button-background-color)`}
              />
            </div>
          </ProcessDiv>
        )
      ) : (
        <ProcessDiv>
          <img src={fileTransfer} alt="gif" height="100" width="300" />
        </ProcessDiv>
      )}
    </ManageIntegration>
  );
};

export default ManageIntegrationInitiate;
