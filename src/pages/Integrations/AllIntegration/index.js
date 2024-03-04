import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import DataTable from "../../../components/DataTable";
import { sampleRowData } from "../../../mocks/SampleData";
import { useNavigate } from "react-router-dom";
import "./index.css";
import styled from "styled-components";
import Union from "../../../images/Union.png";
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

const AllIntegration = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const handleClick = () => navigate("/createintegration");
  useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((res) => setData(res));
  });

  const createColumnsData = () => {
    let columnData = [];
    sampleColumnData.forEach((item, index) => {
      if (item.field === "action") {
        columnData.push({
          ...item,
          renderCell: (props) => {
            return (
              <ActionLinks>
                <div>Edit</div>
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
  useEffect(() => {
    setColumnData(createColumnsData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sampleColumnData]);
  return (
    <div className="home">
      <div className="heading-container">
        <h2>All Integrations</h2>
        <Button
          image={Union}
          name="Create New"
          backgroundColor="white"
          color="black"
          onClick={handleClick}
        />
      </div>
      <DataTable columns={columnData} rows={sampleRowData} />
      <br></br>
    </div>
  );
};
export default AllIntegration;
