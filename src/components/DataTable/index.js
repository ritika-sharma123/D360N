import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const DataTable = ({ rows, columns }) => {
  return (
    <>
      <DataGrid
        sx={{
          height: 350,
          width: "1172px",
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
        slots={{
          noRowsOverlay: () => <>jhgjj</>,
        }}
      />
    </>
  );
};

export default DataTable;
