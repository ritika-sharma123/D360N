import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
import DataTable from "../../../components/DataTable";
import { sampleColumnData1, sampleRowData1 } from "../../../mocks/SampleData";
import ArrowLeft from "../../../images/ArrowLeft.png";
import styled from "styled-components";
import BreadCrumbs from "../../../components/BreadCrumbs";
import Button from "../../../components/Button";
import ProgressBar from "../../../components/ProgressBar";
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
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const ProgressBarContainer = styled.div`
  display: flex;
  gap: 0px;
`;
const ManageIntegrationInitiate = () => {
  // const { pathname } = useLocation();
  const {
    state: { rowDetail },
  } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const [isDisabled, setIsDisabled] = useState(false);
  const handleClick = () => handleProgress();
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const progressData = [
    { raw: "Queued", silver: "Queued", gold: "Queued", scale: 100 },
    { raw: "InProgress", silver: "Queued", gold: "Queued", scale: 100 },
    { raw: "Succeeded", silver: "InProgress", gold: "Queued", scale: 100 },
    { raw: "Succeeded", silver: "Succeeded", gold: "InProgress", scale: 100 },
    { raw: "Succeeded", silver: "Succeeded", gold: "Succeeded", scale: 100 },
  ];

 const pollStatus = async(run_id) =>{

        while (true) {

            const pp_progress = await fetch(`/execution_status/${run_id}`);
            const pp_progress_json = await pp_progress.json();
            console.log("Data:",pp_progress_json)

    if (pp_progress_json.raw_status === 'Succeeded' && status.silver_status === 'Succeeded' && status.gold_status === 'Succeeded') {
      console.log('Process completed successfully!');
      break;
    }
    await new Promise(resolve => setTimeout(resolve, 1000)); // 1000 milliseconds = 1 second
  }
  }




  const handleProgress = async() => {
        const response = await fetch("/execute_pipeline/InitialLoad");
        const res_json = await response.json();
        const run_id = res_json.run_id;
        pollStatus(run_id)


  };
  const breadData = [
    { path: "/all-manage-integrations", text: "All Integrations" },
    { path: "all-manage-integrations/:id", text: "Manage Integrations" },
  ];

  const handleInitiateLoad = () => {


    setIsDisabled(true);
  };

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
        <h1>{rowDetail?.integration_name}</h1>
      </Headingcontainer>
      <br></br>
      <DataTable rows={sampleRowData1} columns={sampleColumnData1} />
      <ProcessDiv>
        <ProgressBarContainer>
          <ProgressBar
            scale={data[0]?.scale}
            width="100px"
            status={data[0]?.raw}
          />
          <ProgressBar
            scale={data[0]?.scale}
            width="100px"
            status={data[0]?.silver}
          />
          <ProgressBar
            scale={data[0]?.scale}
            width="100px"
            status={data[0]?.gold}
          />
        </ProgressBarContainer>

        <Button
          name="Start Initial Load"
          onClick={handleProgress}
          isDisabled={isDisabled}
        />
      </ProcessDiv>
    </ManageIntegration>
  );
};

export default ManageIntegrationInitiate;
