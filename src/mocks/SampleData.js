export const sampleRowData = [
  {
    id: 1,
    sai: "Integration 1",
    description: "ABCD",
    action: 14,
    align: "center",
  },
  { id: 2, sai: "Integration 2", description: "ABCD", action: 14 },
  { id: 3, sai: "Integration 3", description: "ABCD", action: 14 },
  { id: 4, sai: "Integration 4", description: "ABCD", action: 14 },
];

export const sampleColumnData = [
  {
    field: "sai",
    headerName: "Sai",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "description",
    headerName: "Description",
    flex: 1,
    headerAlign: "center",
    align: "center",
    editable: true,
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
