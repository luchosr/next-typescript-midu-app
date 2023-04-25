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
  { field: "surveyStatus", headerName: "Survey Status", width: 110 },
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
    headerName: "CloudProducts Registered",
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
    testResults: "Pass",
    auditingLoggingMonitoring: "Link",
    eKMVerification: "loren ipsum",
    rTRTollgateStatus: "35%",
  },
  {
    id: 2,
    narID: "12345-1",
    applicationName: "BestApp GB",
    testResults: "Pass",
    auditingLoggingMonitoring: "Link",
    eKMVerification: "loren ipsum",
    rTRTollgateStatus: "35%",
  },
  {
    id: 3,
    narID: "12345-1",
    applicationName: "BestApp GB",
    testResults: "Pass",
    auditingLoggingMonitoring: "Link",
    eKMVerification: "loren ipsum",
    rTRTollgateStatus: "35%",
  },
  {
    id: 4,
    narID: "12345-1",
    applicationName: "BestApp GB",
    testResults: "Pass",
    auditingLoggingMonitoring: "Link",
    eKMVerification: "loren ipsum",
    rTRTollgateStatus: "35%",
  },
  {
    id: 5,
    narID: "12345-1",
    applicationName: "BestApp GB",
    testResults: "Pass",
    auditingLoggingMonitoring: "Link",
    eKMVerification: "loren ipsum",
    rTRTollgateStatus: "35%",
  },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
