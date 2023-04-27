import { GridColDef } from "@mui/x-data-grid";

export const RTBcolumns: GridColDef[] = [
  {
    field: "applicationName",
    headerName: "Application Name",
    width: 250,
  },
  {
    field: "narID",
    headerName: "NAR ID",
    width: 110,
    align: "left",
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
    width: 220,
  },
  {
    field: "rTRTollgateStatus",
    headerName: "RTR Tollgate Status",
    width: 220,
  },
];

export const RTBrows = [
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
    rTBTollgateStatus: "45%",
    testResults: "Pass",
    auditingLoggingMonitoring: "Link",
    eKMVerification: "loren ipsum",
    rTRTollgateStatus: "35%",
  },
];
