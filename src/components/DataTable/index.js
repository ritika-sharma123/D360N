import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const DataTable = ({ rows, columns }) => {
  return (
    <>
      <DataGrid
        sx={{ height: 400, width: "100%" }}
        rows={rows}
        columns={columns}
      />
    </>
  );
};

export default DataTable;
