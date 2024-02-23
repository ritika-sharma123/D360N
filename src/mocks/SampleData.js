export const sampleRowData = [
  {
    id: 1,
    integrations: "Integration 1",
    description: "ABCD",
    action: 14,
    align: "center",
  },
  { id: 2, integrations: "Integration 2", description: "ABCD", action: 14 },
];

export const sampleColumnData = [
  {
    field: "integrations",
    headerName: "Integrations",
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
