import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
import DataTable from "../../../components/DataTable";
import { sampleColumnData, sampleRowData } from "../../../mocks/SampleData";
import ArrowLeft from "../../../images/ArrowLeft.png";
import styled from "styled-components";
import BreadCrumbs from "../../../components/BreadCrumbs";
import Button from "../../../components/Button";

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

const ManageIntegrationInitiate = () => {
  // const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [rowDetail, setRowDetail] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);

  const breadData = [
    { path: "/all-manage-integrations", text: "All Integrations" },
    { path: "all-manage-integrations/:id", text: "Manage Integrations" },
  ];

  useEffect(() => {
    const rowDetails = sampleRowData.find((i) => i.id === +id);
    setRowDetail(rowDetails);
  }, [id]);

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
        <h1>{rowDetail.integrations}</h1>
      </Headingcontainer>
      <br></br>
      <DataTable rows={sampleRowData} columns={sampleColumnData} />
      <ProcessDiv>
        {/* {isDisabled && (
          <div>
            <ProgressBar />
          </div>
        )} */}
        <Button
          name="Start Initial Load"
          onClick={handleInitiateLoad}
          isDisabled={isDisabled}
        />
      </ProcessDiv>
    </ManageIntegration>
  );
};

export default ManageIntegrationInitiate;
