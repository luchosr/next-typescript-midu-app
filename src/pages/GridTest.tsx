import * as React from "react";
import { useState } from "react";
// import { DataGrid } from "@material-ui/data-grid";
import { randomInt, randomUserName } from "@material-ui/x-grid-data-generator";
import {
  DataGrid,
  GridColDef,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";

const defaultColumns = [
  { field: "id" },
  { field: "username", width: 150 },
  { field: "age", width: 80, type: "number", hide: true },
];

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
const columnGroupingModel = [
  {
    groupId: "readyToBuild",
    headerName: "RTB - Ready to Build Summary",
    description: "",
    children: [
      { field: "surveyStatus" },
      { field: "rtoRpo" },
      { field: "informationClassification" },
      { field: "solutionDesign" },
      { field: "cloudProductsRegistered" },
      { field: "deploymentPatterns" },
      { field: "blueprint" },
      { field: "rTBTollgateStatus" },
    ],
  },
];

const preReqColumns = [
  {
    field: "applicationName",
    headerName: "Application Name",
    width: 250,
    hide: false,
  },
  {
    field: "narID",
    headerName: "NAR ID",
    width: 110,
    align: "left",
    hide: false,
  },
  {
    field: "surveyStatus",
    headerName: "Survey Status",
    width: 110,
    hide: false,
  },
  {
    field: "rtoRpo",
    headerName: "RTO/RPO",
    width: 110,
    hide: false,
  },
  {
    field: "informationClassification",
    headerName: "Information Classification",
    width: 180,
    hide: false,
  },
  {
    field: "solutionDesign",
    headerName: "Solution Design",
    width: 150,
    hide: false,
  },
  {
    field: "cloudProductsRegistered",
    headerName: "CloudProducts Registered",
    width: 220,
    hide: false,
  },
  {
    field: "deploymentPatterns",
    headerName: "Deployment Patterns",
    width: 220,
    hide: false,
  },
  {
    field: "blueprint",
    headerName: "Blueprint",
    width: 220,
    hide: false,
  },
  {
    field: "rTBTollgateStatus",
    headerName: "RTB Tollgate Status",
    width: 220,
  },
  { field: "testResults", headerName: "Test Results", width: 110 },
  {
    field: "auditingLoggingMonitoring",
    headerName: "Full Auditing, Logging, Monitoring",
    width: 220,
  },
  {
    field: "eKMVerification",
    headerName: "EKM Verification & Evidencing",
    width: 220,
  },
  {
    field: "rTRTollgateStatus",
    headerName: "RTR Tollgate Status",
    width: 220,
  },
];

const preReqRows = [
  {
    id: 1,
    narID: "12345-1",
    applicationName: "BestApp GB",
    surveyStatus: "Submitted",
    rtoRpo: "24 hours or less Last completed Backup",
    informationClassification: "Confidential",
    solutionDesign: "LINK",
    cloudProductsRegistered: "10 GCP 1Saas",
    deploymentPatterns: "N/A",
    blueprint: "Used",
    rTBTollgateStatus: "40%",
    testResults: "Pass",
    auditingLoggingMonitoring: "Link",
    eKMVerification: "loren ipsum",
    rTRTollgateStatus: "35%",
  },
];

const defaultRows = [
  { id: 1, username: "Pablo", age: 44 },
  { id: 2, username: "Ricardo", age: 32 },
  { id: 3, username: "Pedrito", age: 22 },
  { id: 4, username: "Maurito", age: 27 },
];

export default function GridTest() {
  const [columns, setColumns] = useState(defaultColumns);

  const change = () => {
    defaultColumns[2].hide = !columns[2].hide;
    setColumns([...defaultColumns]);
  };
  return (
    <div style={{ height: 400, width: "100%" }}>
      <button onClick={change}>Change</button>
      <DataGrid
        rows={preReqRows}
        columns={preReqColumns}
        experimentalFeatures={{ columnGrouping: true }}
        columnGroupingModel={columnGroupingModel}
        slotProps={{
          columnsPanel: {
            getTogglableColumns,
          },
        }}
      />
    </div>
  );
}
