import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridColumnGroupingModel,
} from "@mui/x-data-grid";
import { makeStyles } from "@material-ui/styles";
import { RTBrows } from "./ReadyToBuildSummaryTable";
import { Box } from "@material-ui/core";

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
type Props = {
  rows: any;
  columns: any;
};

const preReqColums: GridColDef[] = [
  {
    field: "applicationName",
    headerName: "Application Name",
    width: 250,
    headerClassName: "app-characteristics",
  },
  {
    field: "narID",
    headerName: "NAR ID",
    width: 110,
    align: "left",
    headerClassName: "app-characteristics",
  },
  {
    field: "lifecyclePhase",
    headerName: "Lifecycle Phase",
    width: 150,
    headerClassName: "app-characteristics",
  },
  {
    field: "rType",
    headerName: "R-Type",
    width: 110,
    headerClassName: "app-characteristics",
  },
  {
    field: "ARFassesment",
    headerName: "ARFAssessment",
    width: 150,
    headerClassName: "app-characteristics",
  },
  {
    field: "schremsIIRelevant",
    headerName: "Schrems II Relevant",
    width: 150,
    headerClassName: "app-characteristics",
  },
  {
    field: "gCPCloudCertification",
    headerName: "GCP Cloud Certification",
    width: 180,
    headerClassName: "app-characteristics",
  },
  {
    field: "appCriticality",
    headerName: "App Criticality",
    width: 110,
    headerClassName: "app-characteristics",
  },
  {
    field: "reviewer",
    headerName: "Reviewer",
    width: 110,
    headerClassName: "app-characteristics",
  },
  {
    field: "surveyStatus",
    headerName: "Survey Status",
    width: 110,
  },
  {
    field: "rtoRpo",
    headerName: "RTO/RPO",
    width: 110,
  },
  {
    field: "informationClassification",
    headerName: "Information Classification",
    width: 180,
  },
  {
    field: "solutionDesign",
    headerName: "Solution Design",
    width: 150,
  },
  {
    field: "cloudProductsRegistered",
    headerName: "Cloud Products Registered",
    width: 220,
  },
  {
    field: "deploymentPatterns",
    headerName: "Deployment Patterns",
    width: 220,
  },
  {
    field: "blueprint",
    headerName: "Blueprint",
    width: 120,
  },
  {
    field: "rTBTollgateStatus",
    headerName: "RTR Tollgate Status",
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

const columnGroupingModel: GridColumnGroupingModel = [
  {
    groupId: "readyToBuild",
    headerName: "RTB - Ready to Build Summary",
    description: "",
    headerClassName: "readyToBuild-header",
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
  {
    groupId: "readyToRelease",
    headerName: "RTR - Ready to Release Summary",
    description: "",
    children: [
      { field: "testResults" },
      { field: "auditingLoggingMonitoring" },
      { field: "eKMVerification" },
      { field: "rTRTollgateStatus" },
    ],
  },
];

const useStyles = makeStyles({
  root: {
    "& .app-characteristics": {
      backgroundColor: "rgba(255, 7, 0, 0.55)",
    },
  },
});
export default function TollgateDataGrid() {
  return (
    <Box
      style={{
        height: 500,
        width: "100%",
      }}
      // sx={{
      //   "& .readyToBuild-header": {
      //     backgroundColor: "rgba(255, 7, 0, 0.55)",
      //   },
      // }}
    >
      <DataGrid
        style={{ backgroundColor: "#FFFFFF" }}
        experimentalFeatures={{ columnGrouping: true }}
        rows={RTBrows}
        columns={preReqColums}
        pageSize={5}
        rowsPerPageOptions={[5]}
        components={{
          Toolbar: CustomToolbar,
        }}
        density={"compact"}
        columnGroupingModel={columnGroupingModel}
        disableSelectionOnClick
      />
    </Box>
  );
}
