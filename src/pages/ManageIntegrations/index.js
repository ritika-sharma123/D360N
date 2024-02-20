import React, { useEffect, useState } from "react";
import DataTable from "../../components/DataTable";
import { sampleRowData, sampleColumnData } from "../../mocks/SampleData";
import ProgressBar from "../../components/ProgressBar";

const ManageIntegrationsPage = () => {
  const createColumnsData = () => {
    let columnData = [];
    sampleColumnData.forEach((item, index) => {
      columnData.push({
        ...item,
      });
    });
    return columnData;
  };
  const [columnData, setColumnData] = useState(createColumnsData());

  useEffect(() => {
    setColumnData(createColumnsData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sampleColumnData]);

  return (
    <>
      <b>All Integrations</b>
      <DataTable columns={columnData} rows={sampleRowData} />
    </>
  );
};

export default ManageIntegrationsPage;
