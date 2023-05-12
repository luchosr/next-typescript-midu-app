import { GridColDef, GridColumnGroupingModel } from "@mui/x-data-grid";
import Link from "@material-ui/core/Link";

export const preReqColumns: GridColDef[] = [
  {
    field: "applicationName",
    headerName: "Application Name",
    width: 250,
    headerClassName: "appSummary-header",
  },
  {
    field: "narID",
    headerName: "NAR ID",
    width: 110,
    align: "left",
    headerClassName: "appSummary-header",
  },
  {
    field: "lifecyclePhase",
    headerName: "Lifecycle Phase",
    width: 150,
    headerClassName: "appSummary-header",
  },
  {
    field: "rType",
    headerName: "R-Type",
    width: 110,
    headerClassName: "appSummary-header",
  },
  {
    field: "cARFassessment",
    headerName: "CARF Assessment",
    width: 150,
    headerClassName: "appSummary-header",
  },
  {
    field: "schremsIIRelevant",
    headerName: "Schrems II Relevant",
    width: 100,
    headerClassName: "appSummary-header",
  },
  {
    field: "gCPCloudCertification",
    headerName: "GCP Cloud Certification",
    width: 180,
    headerClassName: "appSummary-header",
  },
  {
    field: "appCriticality",
    headerName: "App Criticality",
    width: 110,
    headerClassName: "appSummary-header",
  },
  {
    field: "reviewer",
    headerName: "Reviewer",
    width: 110,
    headerClassName: "appSummary-header",
  },
  {
    field: "surveyStatus",
    headerName: "Survey Status",
    width: 110,
    headerClassName: "readyToBuild-header",
  },
  {
    field: "rtoRpo",
    headerName: "RTO/RPO",
    width: 110,
    headerClassName: "readyToBuild-header",
  },
  {
    field: "informationClassification",
    headerName: "Information Classification",
    width: 180,
    headerClassName: "readyToBuild-header",
  },
  {
    field: "solutionDesign",
    headerName: "Solution Design",
    width: 150,
    headerClassName: "readyToBuild-header",
    // @ts-ignore
    renderCell: (params) => <Link href="#">{params.value}</Link>,
  },
  {
    field: "cloudProductsRegistered",
    headerName: "Cloud Products Registered",
    width: 220,
    headerClassName: "readyToBuild-header",
  },
  {
    field: "deploymentPatterns",
    headerName: "Deployment Patterns",
    width: 220,
    headerClassName: "readyToBuild-header",
  },
  {
    field: "blueprint",
    headerName: "Blueprint",
    width: 120,
    headerClassName: "readyToBuild-header",
  },
  {
    field: "rTBTollgateStatus",
    headerName: "RTB Tollgate Status",
    width: 220,
    headerClassName: "readyToBuild-header",
    cellClassName: "rTBTollgateStatus-cell",
  },
  {
    field: "testResults",
    headerName: "Test Results",
    headerClassName: "readyToRelease-header",
    width: 110,
  },
  {
    field: "auditingLoggingMonitoring",
    headerName: "Auditing, Logging, Monitoring",
    headerClassName: "readyToRelease-header",
    width: 220,
  },
  {
    field: "eKMVerification",
    headerName: "EKM Verification & Evidencing",
    headerClassName: "readyToRelease-header",
    width: 220,
  },
  {
    field: "rTRTollgateStatus",
    headerName: "RTR Tollgate Status",
    headerClassName: "readyToRelease-header",
    cellClassName: "rTRTollgateStatus-cell",
    width: 220,
  },
];
export const preReqRows = [
  {
    id: 1,
    narID: "12345-1",
    lifecyclePhase: "Production",
    rType: "Re-Architect",
    cARFassessment: "Ready to design",
    schremsIIRelevant: "Yes",
    gCPCloudCertification: "In scope",
    appCriticality: "Critical",
    reviewer: "Robin Aveline",
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
export const columnGroupingModel: GridColumnGroupingModel = [
  {
    groupId: "appSummary",
    headerName: "Application Summary",
    description: "",
    headerClassName: "appSummary-header",
    children: [
      { field: "applicationName" },
      { field: "narID" },
      { field: "lifecyclePhase" },
      { field: "rType" },
      { field: "cARFassessment" },
      { field: "schremsIIRelevant" },
      { field: "gCPCloudCertification" },
      { field: "appCriticality" },
      { field: "reviewer" },
    ],
  },
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
    headerClassName: "readyToRelease-header",
    children: [
      { field: "testResults" },
      { field: "auditingLoggingMonitoring" },
      { field: "eKMVerification" },
      { field: "rTRTollgateStatus" },
    ],
  },
];
