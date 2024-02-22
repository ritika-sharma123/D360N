import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const DataTable = ({ rows, columns, handleRowClick }) => {
  return (
    <>
      <DataGrid
        sx={{
          height: 350,
          maxWidth: "950px",
          ".MuiDataGrid-columnHeaders.MuiDataGrid-withBorderColor.css-1iyq7zh-MuiDataGrid-columnHeaders":
            {
              backgroundColor: "#FAFAFA !important",
            },
          ".MuiDataGrid-columnHeaderTitle.css-t89xny-MuiDataGrid-columnHeaderTitle":
            {
              fontWeight: 600,
              fontSize: 14,
            },
        }}
        rows={rows}
        columns={columns}
        disableColumnMenu={true}
        disableRowSelectionOnClick
        onRowClick={handleRowClick}
        slots={{
          noRowsOverlay: () => <>jhgjj</>,
        }}
      />
    </>
  );
};

export default DataTable;
