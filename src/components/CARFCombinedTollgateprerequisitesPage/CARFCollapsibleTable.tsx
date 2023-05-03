import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
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
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
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
      height: 700,
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    deploymentPatternsSelect: {
      margin: "30px",
    },
    mainTableCell: { paddingLeft: 10, width: "80%" },
    dropdownIconButton: { marginRight: 10 },
  })
);

interface Fields {
  name: string;
  status: string;
  rationale: string;
}

function createData(name: string, fields: Fields[]) {
  return {
    name,
    fields,
    history: [
      { date: "2020-01-05", customerId: "11091700", amount: 3 },
      { date: "2020-01-02", customerId: "Anonymous", amount: 1 },
    ],
  };
}

const rows = [
  createData("Ready to Design", [
    {
      name: "Advisory",
      status: "Self Served",
      rationale:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    },
  ]),
  createData("Ready to Build", [
    {
      name: "Ready to Build Survey",
      status: "Completed",
      rationale:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    },
    {
      name: "RTO / RPO",
      status: "Completed",
      rationale:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    },
    {
      name: "Information Classification",
      status: "In progress",
      rationale:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    },
    {
      name: "Solution Design",
      status: "In progress",
      rationale:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    },
    {
      name: "Cloud Product Registration & Cloud Product Check",
      status: "Not started",
      rationale:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    },
    {
      name: "Deployment Patterns",
      status: "Not started",
      rationale:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    },
    {
      name: "Blueprint",
      status: "Not required",
      rationale:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    },
  ]),
  createData("Ready to Release", [
    {
      name: "Resiliency Measure Test Results",
      status: "Not started",
      rationale:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    },
    {
      name: "Auditing, Logging, Monitoring, Alerting Metrics",
      status: "Not required",
      rationale:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    },
    {
      name: "EKM Verification & Evidencing",
      status: "Not started",
      rationale:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    },
  ]),
];

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [readyToBuildModalOpen, setReadyToBuildModalOpen] =
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
              variant="filled"
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
              variant="filled"
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
                        {field.status === "Completed" && (
                          <span
                            style={{
                              color: "#01579B",
                              display: "flex",
                              alignItems: "baseline",
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
                          <span>
                            <CancelIcon /> {field.status}
                          </span>
                        )}
                        {field.status === "In progress" && (
                          <span
                            style={{
                              color: "#FFAA00",
                              display: "flex",
                              alignItems: "baseline",
                            }}
                          >
                            <PlayCircleFilledIcon
                              style={{
                                marginRight: "5px",
                              }}
                            />{" "}
                            {field.status}
                          </span>
                        )}
                        {field.status === "Not started" && (
                          <span
                            style={{
                              color: "#8894A8",
                              display: "flex",
                              alignItems: "baseline",
                            }}
                          >
                            <WatchLaterIcon
                              style={{
                                marginRight: "5px",
                              }}
                            />{" "}
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
