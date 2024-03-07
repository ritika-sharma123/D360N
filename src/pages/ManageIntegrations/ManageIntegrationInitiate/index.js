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
  const [rowData, setRowData] = useState([]);

  const pollStatus = async (run_id) => {
    const pp_progress = await fetch(`/execution_status/${run_id}`);
    const pp_progress_json = await pp_progress.json();
    setData({ ...pp_progress_json, scale: 100 });
    return pp_progress_json;
  };
  const handleProgress = async () => {
    setIsDisabled(true);
    const response = await fetch("/execute_pipeline/InitialLoad");
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
      try {
        const response = await axios.get("");
        console.log(response.data);
        // setRowData(response.data);
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
            onClick={handleProgress}
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
    </ManageIntegration>
  );
};

export default ManageIntegrationInitiate;
