import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { rows, createData, Fields } from "./mockedData";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import EditIcon from "@material-ui/icons/Edit";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import CloseIcon from "@material-ui/icons/Close";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import { spawn } from "child_process";

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
const useRowStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "lime",
      "& > *": {
        borderBottom: "unset",
      },
      "& .MuiTableRow-root": {
        backgroundColor: "red",
        marginLeft: 150,
      },
    },
    formControl: {
      width: "280px",
      display: "block",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    paper: {
      position: "absolute",
      width: "50%",
      height: "80%",
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      overflow: "auto",
    },
    deploymentPatternsSelect: {
      margin: "30px",
    },
    mainTableCell: { paddingLeft: 10, width: "80%" },
    dropdownIconButton: { marginRight: 10 },
  })
);

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [readyToBuildModalOpen, setReadyToBuildModalOpen] =
    React.useState(false);
  const [readyToReleaseModalOpen, setReadyToReleaseModalOpen] =
    React.useState(false);
  const [deploymentPatterns, setDeploymentPatterns] = React.useState("yes");
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useRowStyles();
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();

  const handleReadyToBuildModalOpen = () => {
    setReadyToBuildModalOpen(true);
  };

  const handleReadyToBuildModalClose = () => {
    setReadyToBuildModalOpen(false);
  };

  const handleReadyToReleaseModalOpen = () => {
    setReadyToReleaseModalOpen(true);
  };

  const handleReadyToReleaseModalClose = () => {
    setReadyToReleaseModalOpen(false);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const deploymentPatternsSelect = event.target.value;
    setDeploymentPatterns(deploymentPatternsSelect);
  };

  const readyToBuildBody = (
    <div style={modalStyle} className={classes.paper}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h2 id="simple-modal-title">Edit Ready to Build fields</h2>
        <span
          style={{ cursor: "pointer" }}
          onClick={handleReadyToBuildModalClose}
        >
          <CloseIcon />
        </span>
      </div>

      <form style={{ marginLeft: "100px", marginTop: "30px" }}>
        <TextField
          id="solution-design"
          label="Solution Design"
          defaultValue="www.google.com"
          autoComplete="off"
          // helperText="Some important text"
          variant="outlined"
          style={{ width: "80%", margin: " auto" }}
          // onChange={}
        />
        <TextField
          id="solution-design-comment"
          label="Solution Design Comments"
          defaultValue="Hello I'm a Solution Design comment"
          autoComplete="off"
          // helperText="Some important text"
          variant="outlined"
          style={{ width: "80%", margin: "35px auto" }}
          // onChange={}
        />

        <TextField
          id="cloud-product-registration"
          label="Cloud Product Registration & Cloud Product Check"
          defaultValue="Cloud Product Registration page in Backstage"
          autoComplete="off"
          // helperText="Some important text"
          variant="outlined"
          style={{ width: "80%", marginBottom: "30px" }}
        />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Deployment Patterns
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="deployment-patterns"
            value={deploymentPatterns}
            onChange={handleSelectChange}
            label="Deployment Patterns"
            inputProps={{
              deploymentPatterns: deploymentPatterns,
              id: "outlined-age-native-simple",
            }}
          >
            <MenuItem value={"yes"}>Yes</MenuItem>
            <MenuItem value={"no"}>No</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="deployment-pattern-comment"
          label="Deployment Patterns Comments"
          defaultValue="Hello I'm a Deployment Patterns comment"
          autoComplete="off"
          // helperText="Some important text"
          variant="outlined"
          style={{ width: "80%", margin: "35px auto" }}
          // onChange={}
        />
        <TextField
          id="blueprint"
          label="Blueprint"
          defaultValue="waltz.intranet.db.com/waltz/...../NAR-ID"
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
            // disabled={!linkUrl}
            onClick={handleReadyToBuildModalClose}
          >
            Save
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#FFFF", color: "black" }}
            onClick={handleReadyToBuildModalClose}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
  const readyToReleaseBody = (
    <div style={modalStyle} className={classes.paper}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h2 id="simple-modal-title">Edit Ready to Release fields</h2>
        <span
          style={{ cursor: "pointer" }}
          onClick={handleReadyToReleaseModalClose}
        >
          <CloseIcon />
        </span>
      </div>

      <form style={{ marginLeft: "100px", marginTop: "30px" }}>
        <TextField
          id="solution-design"
          label="Resiliency Measure Test Results"
          defaultValue="www.urlGivenByUser.com"
          autoComplete="off"
          // helperText="Some important text"
          variant="outlined"
          style={{ width: "80%", margin: " auto" }}
          // onChange={}
        />
        <TextField
          id="solution-design-comment"
          label="Resiliency Measure Test Results Comments"
          defaultValue="Hello I'm a Resiliency Measure Test Results comment"
          autoComplete="off"
          // helperText="Some important text"
          variant="outlined"
          style={{ width: "80%", margin: "35px auto" }}
          // onChange={}
        />

        <TextField
          id="cloud-product-registration"
          label="Auditing, Logging, Monitoring, Alerting Metrics"
          defaultValue="www.urlGivenByUser.com"
          autoComplete="off"
          // helperText="Some important text"
          variant="outlined"
          style={{ width: "80%", marginBottom: "30px" }}
        />

        <TextField
          id="auditing-logging-monitoring-alerting-metrics"
          label="Auditing, Logging, Monitoring, Alerting Metrics Comments"
          defaultValue="Hello, I'm an Auditing, Logging, Monitoring, Alerting Metrics comment"
          autoComplete="off"
          // helperText="Some important text"
          variant="outlined"
          style={{ width: "80%", marginBottom: "35px" }}
          // onChange={}
        />
        <TextField
          id="ekm-verification-evidencing"
          label="EKM Verification & Evidencing"
          defaultValue="www.urlGivenByUser.com"
          autoComplete="off"
          // helperText="Some important text"
          variant="outlined"
          style={{ width: "80%", marginBottom: "35px" }}
        />
        <TextField
          id="ekm-verification-evidencing-comment"
          label="EKM Verification & Evidencing comments"
          defaultValue="Hello, I'm an EKM Verification & Evidencing comment"
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
            // disabled={!linkUrl}
            onClick={handleReadyToReleaseModalClose}
          >
            Save
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#FFFF", color: "black" }}
            onClick={handleReadyToReleaseModalClose}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );

  function handleClick(row: {
    name: string;
    fields: Fields[];
    history: { date: string; customerId: string; amount: number }[];
  }): void {
    throw new Error("Function not implemented.");
  }

  return (
    <React.Fragment>
      <TableRow style={{ backgroundColor: "#29B6F61A" }}>
        <TableCell className={classes.mainTableCell}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={classes.dropdownIconButton}
          >
            {dropdownOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </IconButton>
          {row.name}
          {row.name === "Ready to Build" && (
            <Button
              variant="text"
              onClick={() => handleReadyToBuildModalOpen()}
              style={{
                textTransform: "capitalize",
                fontSize: "12px",
                marginLeft: "10px",
              }}
            >
              <EditIcon style={{ marginRight: "5px" }} /> Edit
            </Button>
          )}
          {row.name === "Ready to Release" && (
            <Button
              variant="text"
              onClick={() => handleReadyToReleaseModalOpen()}
              style={{
                textTransform: "capitalize",
                fontSize: "12px",
                marginLeft: "10px",
              }}
            >
              <EditIcon style={{ marginRight: "5px" }} /> Edit
            </Button>
          )}
        </TableCell>

        <TableCell
          align="right"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: "15px 8px 0px",
            borderBottom: "none",
          }}
        >
          <Button
            variant="contained"
            disabled={true}
            // onClick={() => handleOpen()}
            style={{
              textTransform: "capitalize",
              fontSize: "12px",
              // backgroundColor: "#0B62DA",
              // color: "#FFFFFF",
            }}
          >
            <CheckCircleOutlineIcon style={{ marginRight: "5px" }} /> Submit
          </Button>
        </TableCell>
        <TableCell align="right"></TableCell>
        <TableCell align="right"></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={dropdownOpen} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableHead style={{ backgroundColor: "#EDEFF2" }}>
                  <TableRow>
                    <TableCell align="left">Pre-Requisite</TableCell>
                    <TableCell align="left">Status</TableCell>
                    <TableCell align="left">Rationale</TableCell>
                    <TableCell align="left">Label</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody style={{ marginLeft: 55 }}>
                  {row.fields.map((field) => (
                    <TableRow key={field?.name}>
                      <TableCell
                        align="left"
                        component="th"
                        scope="row"
                        style={{ width: "33%" }}
                      >
                        <Link href="#" onClick={preventDefault}>
                          {field?.name}
                        </Link>
                      </TableCell>
                      <TableCell align="left">
                        {field.status === "Self Served" && (
                          <span
                            style={{
                              color: "#0A7CB5",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <InfoIcon
                              style={{
                                marginRight: "5px",
                              }}
                            />
                            {field.status}
                          </span>
                        )}
                        {field.status === "Completed" && (
                          <span
                            style={{
                              color: "#01579B",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <CheckCircleIcon
                              style={{
                                marginRight: "5px",
                              }}
                            />
                            {field.status}
                          </span>
                        )}

                        {field.status === "Not required" && (
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <CancelIcon
                              style={{
                                marginRight: "5px",
                              }}
                            />
                            {field.status}
                          </span>
                        )}
                        {field.status === "In progress" && (
                          <span
                            style={{
                              color: "#FFAA00",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <PlayCircleFilledIcon
                              style={{
                                marginRight: "5px",
                              }}
                            />
                            {field.status}
                          </span>
                        )}
                        {field.status === "Not started" && (
                          <span
                            style={{
                              color: "#8894A8",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <WatchLaterIcon
                              style={{
                                marginRight: "5px",
                              }}
                            />
                            {field.status}
                          </span>
                        )}
                      </TableCell>
                      <TableCell align="left" style={{ overflow: "hidden" }}>
                        {field?.rationale}
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ overflow: "hidden", width: "300px" }}
                      ></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <Modal
        open={readyToBuildModalOpen}
        onClose={handleReadyToBuildModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {readyToBuildBody}
      </Modal>
      <Modal
        open={readyToReleaseModalOpen}
        onClose={handleReadyToReleaseModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {readyToReleaseBody}
      </Modal>
    </React.Fragment>
  );
}

export const CARFCollapsibleTable = () => {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const classes = useRowStyles();

  const currentRows = rows.filter((r, ind) => {
    return ind >= rowsPerPage * page && ind < rowsPerPage * (page + 1);
  });

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};
