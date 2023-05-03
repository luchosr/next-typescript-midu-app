import * as React from "react";
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridColDef,
  GridColumnGroupingModel,
} from "@mui/x-data-grid";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import { Button, TextField } from "@mui/material";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const preReqColumns: GridColDef[] = [
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

const preReqRows = [
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
const columnGroupingModel: GridColumnGroupingModel = [
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .appSummary-header": {
        backgroundColor: "#8497B0",
        color: "white",
        wordWrap: "break-word",
      },
      "& .readyToBuild-header": {
        backgroundColor: "#3459C4",
        color: "white",
        wordWrap: "break-word",
      },
      "& .readyToRelease-header": {
        backgroundColor: "#34A1C4",
        color: "white",
        wordWrap: "break-word",
      },
      "& .rTBTollgateStatus-cell ": {
        backgroundColor: "#D6DCE4",
        color: "#44546A",
        wordWrap: "break-word",
      },
      "& .rTRTollgateStatus-cell": {
        backgroundColor: "#D6DCE4",
        color: "#44546A",
        wordWrap: "break-word",
      },
    },
    paper: {
      position: "absolute",
      width: "50%",
      height: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

export default function StylingHeaderGrid() {
  const classes = useStyles();
  const [finalClickInfo, setFinalClickInfo] = useState(null);
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [linkUrl, setLinkUrl] = useState("");

  const handleOnCellClick = (params: any) => {
    setFinalClickInfo(params);
    finalClickInfo?.field === "solutionDesign" && setOpen(true);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setLinkUrl("");
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title" style={{ fontFamily: "inherited" }}>
        Solution Design
      </h2>
      {/* <p id="simple-modal-description">{`hola modal ${finalClickInfo?.field}`}</p> */}
      <form style={{ marginLeft: "100px" }}>
        <TextField
          id="outlined-helperText"
          label="Insert URL *"
          defaultValue=""
          autoComplete="off"
          // helperText="Some important text"
          variant="outlined"
          style={{ width: "80%", margin: "35px auto" }}
          onChange={(event) => setLinkUrl(event.target.value)}
        />
        <TextField
          id="outlined-helperText"
          label="Comment"
          defaultValue=""
          autoComplete="off"
          // helperText="Some important text"
          variant="outlined"
          style={{ width: "80%", margin: "0px auto" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginRight: "20%",
            marginTop: 30,
          }}
        >
          <Button
            variant="contained"
            style={{ margin: "0 20px" }}
            color="primary"
            disabled={!linkUrl}
            onClick={handleClose}
          >
            Save
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#FFFF", color: "black" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <div
      style={{ height: 500, width: "100%", margin: "57px" }}
      className={classes.root}
    >
      <DataGrid
        sx={{
          "& .MuiDataGrid-columnHeaderTitle": {
            whiteSpace: "normal",
            lineHeight: "normal",
          },
          "& .MuiDataGrid-columnHeader": {
            // Forced to use important since overriding inline styles
            height: "unset !important",
          },
          "& .MuiDataGrid-columnHeaders": {
            // Forced to use important since overriding inline styles
            maxHeight: "168px !important",
          },
        }}
        rows={preReqRows}
        columns={preReqColumns}
        experimentalFeatures={{ columnGrouping: true }}
        pageSize={5}
        rowsPerPageOptions={[5]}
        components={{
          Toolbar: CustomToolbar,
        }}
        disableSelectionOnClick
        density={"compact"}
        columnGroupingModel={columnGroupingModel}
        onCellClick={handleOnCellClick}
      />
      {/* {finalClickInfo &&
        `Final clicked id = ${finalClickInfo.id}, 
        Final clicked field = ${finalClickInfo.field}, 
        Final clicked value = ${finalClickInfo.value}`}
      {!finalClickInfo && `Click on a column`} */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
