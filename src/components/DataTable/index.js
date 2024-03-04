import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const DataTable = ({ rows, columns, handleRowClick }) => {
  return (
    <>
      <DataGrid
        sx={{
          height: "350px !important",
          width: "100% ",
          ".MuiDataGrid-columnHeaders.MuiDataGrid-withBorderColor.css-1iyq7zh-MuiDataGrid-columnHeaders":
            {
              backgroundColor: "#FAFAFA !important",
            },
          ".MuiDataGrid-columnHeaderTitle.css-t89xny-MuiDataGrid-columnHeaderTitle":
            {
              fontWeight: 600,
              fontSize: 14,
            },
          ".MuiDataGrid-virtualScrollerContent.css-1kwdphh-MuiDataGrid-virtualScrollerContent":
            {
              width: "auto !important",
              height: "100.719px !important",
              minHeight: "100% !important",
            },
        }}
        rows={rows}
        columns={columns}
        disableColumnMenu={true}
        disableRowSelectionOnClick
        onRowClick={handleRowClick}
        hideFooter
        hideFooterPagination
        getRowHeight={() => "auto"}
        slots={{
          noRowsOverlay: () => <></>,
        }}
      />
    </>
  );
};

export default DataTable;
