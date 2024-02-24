export const sampleRowData = [
  {
    id: 1,
    integration_name: "SCDII_AZSQL_to_ADLS_Gen 2",
    description:
      "A pipeline implementing SCDII on Azure SQL DB data complied on business file (businessfile.json) associated to the integration",
    action: 14,
    align: "center",
  },
  {
    id: 2,
    integration_name: "SCDI_AZSQL_to_ADLS_Gen 2",
    description:
      "A pipeline implementing SCDI on Azure SQL DB data complied on business file (businessfile.json) associated to the integration",
    action: 14,
  },
];

export const sampleColumnData = [
  {
    field: "integration_name",
    headerName: "Integration Name",
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
    headerName: "",
    headerAlign: "center",
    align: "center",
    flex: 1,
    editable: true,
  },
];
export const sampleRowData1 = [
  {
    id: 1,
    integration_name: "SCDII_AZSQL_to_ADLS_Gen 2",
    description:
      "A pipeline implementing SCDII on Azure SQL DB data complied on business file (businessfile.json) associated to the integration",
    source_info: "AzSQL-Database name: DLXpressAZSQL",
    target_info: "Blob: trailpocstorage, container: dlxlpressappdata",
    align: "center",
  },
];

export const sampleColumnData1 = [
  {
    field: "integration_name",
    headerName: "Integration Name",
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
    field: "source_info",
    headerName: "Source Information",
    flex: 1,
    headerAlign: "center",
    align: "center",
    editable: true,
  },
  {
    field: "target_info",
    headerName: "Target Information",
    flex: 1,
    headerAlign: "center",
    align: "center",
    editable: true,
  },
];
