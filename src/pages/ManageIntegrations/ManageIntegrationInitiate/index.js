import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DataTable from "../../../components/DataTable";
import { sampleColumnData, sampleRowData } from "../../../mocks/SampleData";

const ManageIntegrationInitiate = () => {
  const { id } = useParams();
  const [rowDetail, setRowDetail] = useState({});

  useEffect(() => {
    const rowDetails = sampleRowData.find((i) => i.id === +id);
    setRowDetail(rowDetails);
  }, [id]);

  return (
    <>
      <div className="home">
        <h2>{rowDetail.integrations}</h2>
        <br></br>
        <DataTable rows={sampleRowData} columns={sampleColumnData} />
      </div>
    </>
  );
};

export default ManageIntegrationInitiate;
