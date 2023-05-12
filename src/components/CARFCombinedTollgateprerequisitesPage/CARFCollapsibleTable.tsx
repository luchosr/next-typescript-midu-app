import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { rows, createData, Fields } from "./mockedData";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import DoneAllIcon from "@material-ui/icons/DoneAll";
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
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
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
import { Done } from "@mui/icons-material";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 10;
  const left = 25;

  return {
    top: `${top}%`,
    margin: "auto",
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
      width: "70%",
      display: "block",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    paper: {
      position: "absolute",
      width: "750px",
      height: "350px",
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
  const [fieldToEdit, setFieldToEdit] = React.useState("");
  const [editionSuccess, setEditionSuccess] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [readyToBuildModalOpen, setReadyToBuildModalOpen] =
    React.useState(false);
  const [readyToReleaseModalOpen, setReadyToReleaseModalOpen] =
    React.useState(false);
  const [conditionalModalOpen, setConditionalModalOpen] = React.useState(false);
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

  const handleEdition = () => {
    setEditionSuccess(!editionSuccess);
  };
  const handleConditionalModalOpen = (editingField: string) => {
    setFieldToEdit(editingField);
    setConditionalModalOpen(true);
    setEditionSuccess(false);
  };
  const handleReadyToReleaseModalOpen = () => {
    setReadyToReleaseModalOpen(true);
  };

  const handleReadyToReleaseModalClose = () => {
    setReadyToReleaseModalOpen(false);
  };
  const handleConditionalModalClose = () => {
    setConditionalModalOpen(false);
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
        <h2 id="simple-modal-title">Edit Ready to Build pre-requisites</h2>
        <span
          style={{ cursor: "pointer" }}
          onClick={handleReadyToBuildModalClose}
        >
          <CloseIcon />
        </span>
      </div>

      <form style={{ marginLeft: "30px", marginTop: "30px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "90%",
            marginBottom: "25px",
            justifyContent: "space-between",
          }}
        >
          <TextField
            id="solution-design"
            label="Solution Design"
            defaultValue="www.google.com"
            autoComplete="off"
            // helperText="Some important text"
            variant="outlined"
            style={{ width: "70%" }}
            // onChange={}
          />
          {/* <TextField
            id="solution-design-comment"
            label="Solution Design Comments"
            defaultValue="Hello I'm a Solution Design comment"
            autoComplete="off"
            // helperText="Some important text"
            variant="outlined"
            style={{ width: "35%" }}
            // onChange={}
          /> */}
          <TextareaAutosize
            aria-label="empty textarea"
            minRows={4}
            placeholder="Empty"
          />
        </div>

        {/* <TextField
          id="cloud-product-registration"
          label="Cloud Product Registration & Cloud Product Check"
          defaultValue="Cloud Product Registration page in Backstage"
          autoComplete="off"
          // helperText="Some important text"
          variant="outlined"
          style={{ width: "80%", marginBottom: "30px" }}
        /> */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "90%",
            marginBottom: "25px",
            justifyContent: "space-between",
          }}
        >
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Deployment Patterns
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="deployment-patterns"
              value={deploymentPatterns}
              // @ts-ignore
              onChange={handleSelectChange}
              label="Deployment Patterns"
              inputProps={{
                deploymentPatterns: deploymentPatterns,
                id: "outlined-age-native-simple",
              }}
            >
              <MenuItem value={"yes"}>
                Yes - the design implements ALL relevant deployment patterns
              </MenuItem>
              <MenuItem value={"no"}>
                No - the design DOES NOT implement ALL of the deployment
                patterns
              </MenuItem>
            </Select>
          </FormControl>
          {/* <TextField
            id="deployment-pattern-comment"
            label="Deployment Patterns Comments"
            defaultValue="Hello I'm a Deployment Patterns comment"
            autoComplete="off"
            // helperText="Some important text"
            variant="outlined"
            style={{ width: "35%" }}
            // onChange={}
          /> */}
          <TextareaAutosize
            aria-label="empty textarea"
            minRows={4}
            placeholder="Empty"
          />
        </div>

        <TextField
          id="blueprint"
          label="Blueprint"
          defaultValue="waltz.intranet.db.com/waltz/...../NAR-ID"
          autoComplete="off"
          // helperText="Some important text"
          variant="outlined"
          style={{ width: "63%", margin: "0px auto" }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginRight: "30%",
            marginTop: 50,
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
        <h2 id="simple-modal-title">Edit Ready to Release Pre-Requisites</h2>
        <span
          style={{ cursor: "pointer" }}
          onClick={handleReadyToReleaseModalClose}
        >
          <CloseIcon />
        </span>
      </div>

      <form style={{ marginLeft: "20px", marginTop: "30px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "90%",
            justifyContent: "space-between",
            marginBottom: "25px",
            padding: "25px 15px 15px 15px",
            border: "1px solid #4287f5",
            borderRadius: 10,
          }}
        >
          <TextField
            id="resiliency-measure-test-results"
            label="Resiliency Measure Test Results"
            defaultValue="www.urlGivenByUser.com"
            autoComplete="off"
            // helperText="Some important text"
            variant="outlined"
            style={{ width: "70%" }}
            // onChange={}
          />
          {/* <TextField
            id="solution-design-comment"
            label="Comments"
            defaultValue=""
            autoComplete="off"
            // helperText="Some important text"
            variant="outlined"
            style={{ width: "35%" }}
            // onChange={}
          /> */}
          <TextareaAutosize
            aria-label="empty textarea"
            minRows={3}
            placeholder="Comment"
            style={{
              borderColor: "lightgray",
              borderRadius: 5,
              height: "50px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "90%",
            marginBottom: "25px",
            justifyContent: "space-between",
            padding: "25px 15px 15px 15px",
            border: "1px solid #4287f5",
            borderRadius: 10,
          }}
        >
          <TextField
            id="cloud-product-registration"
            label="Auditing, Logging, Monitoring, Alerting Metrics"
            defaultValue="www.urlGivenByUser.com"
            autoComplete="off"
            // helperText="Some important text"
            variant="outlined"
            style={{ width: "70%" }}
          />

          <TextareaAutosize
            aria-label="empty textarea"
            minRows={4}
            placeholder="Comment"
            style={{
              borderColor: "lightgray",
              borderRadius: 5,
              height: "50px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "90%",
            marginBottom: "25px",
            justifyContent: "space-between",
            padding: "25px 15px 15px 15px",
            border: "1px solid #4287f5",
            borderRadius: 10,
          }}
        >
          <TextField
            id="ekm-verification-evidencing"
            label="EKM Verification & Evidencing"
            defaultValue="www.urlGivenByUser.com"
            autoComplete="off"
            // helperText="Some important text"
            variant="outlined"
            style={{ width: "70%" }}
          />
          {/* <TextField
            id="ekm-verification-evidencing-comment"
            label="Comments"
            defaultValue=""
            autoComplete="off"
            // helperText="Some important text"
            variant="outlined"
            style={{ width: "35%" }}
          /> */}
          <TextareaAutosize
            aria-label="empty textarea"
            minRows={4}
            placeholder="Comment"
            style={{
              borderColor: "lightgray",
              borderRadius: 5,
              height: "50px",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            // marginRight: "30%",
            marginTop: 50,
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
  const conditionalBody = (
    <div style={modalStyle} className={classes.paper}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h2 id="simple-modal-title">Edit {fieldToEdit}</h2>
        <span
          style={{ cursor: "pointer" }}
          onClick={handleConditionalModalClose}
        >
          <CloseIcon />
        </span>
      </div>

      <form style={{ marginLeft: "20px", marginTop: "30px" }}>
        {editionSuccess === false ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "90%",
              justifyContent: "space-between",
              marginBottom: "25px",
              padding: "25px 15px 15px 15px",
              // border: "1px solid #4287f5",
              borderRadius: 10,
            }}
          >
            {" "}
            {fieldToEdit === "Deployment Patterns" ? (
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Deployment Patterns
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="deployment-patterns"
                  value={deploymentPatterns}
                  // @ts-ignore
                  onChange={handleSelectChange}
                  label="Deployment Patterns"
                  inputProps={{
                    deploymentPatterns: deploymentPatterns,
                    id: "outlined-age-native-simple",
                  }}
                >
                  <MenuItem value={"yes"}>
                    Yes - the design implements ALL relevant deployment patterns
                  </MenuItem>
                  <MenuItem value={"no"}>
                    No - the design DOES NOT implement ALL of the deployment
                    patterns
                  </MenuItem>
                </Select>
              </FormControl>
            ) : (
              <TextField
                id={fieldToEdit}
                label={fieldToEdit}
                defaultValue="www.urlGivenByUser.com"
                autoComplete="off"
                // helperText="Some important text"
                variant="outlined"
                style={{ width: "70%" }}
              />
            )}
            {fieldToEdit === "Blueprint" ? null : (
              <TextareaAutosize
                aria-label="empty textarea"
                minRows={4}
                placeholder="Comment"
                style={{
                  borderColor: "lightgray",
                  borderRadius: 5,
                  height: "50px",
                }}
              />
            )}
            {/* {`Hello, here is the  modal`} */}
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Edition successful <DoneAllIcon />
          </div>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            // marginRight: "30%",
            marginTop: 50,
          }}
        >
          {editionSuccess === false ? (
            <>
              <Button
                variant="contained"
                style={{ margin: "0 20px" }}
                color="primary"
                // disabled={!linkUrl}
                onClick={handleEdition}
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
            </>
          ) : (
            <Button
              variant="contained"
              style={{ margin: "0 20px" }}
              color="primary"
              // disabled={!linkUrl}
              onClick={handleConditionalModalClose}
            >
              Close
            </Button>
          )}
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
          {/* {row.name === "Ready to Build" && (
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
          )} */}
          {/* {row.name === "Ready to Release" && (
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
          )} */}
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
        ></TableCell>
        <TableCell align="right"></TableCell>
        <TableCell align="right">
          <Button
            variant="contained"
            disabled={true}
            // onClick={() => handleOpen()}
            style={{
              textTransform: "capitalize",
              fontSize: "12px",
              margin: 0,
              // backgroundColor: "#0B62DA",
              // color: "#FFFFFF",
            }}
          >
            Submit
          </Button>
        </TableCell>
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
                        style={{ width: "33%", padding: 0 }}
                      >
                        {field?.name === "Solution Design" ||
                        field?.name === "Deployment Patterns" ||
                        field?.name === "Blueprint" ||
                        field?.name === "Resiliency Measure Test Results" ||
                        field?.name ===
                          "Auditing, Logging, Monitoring, Alerting Metrics" ||
                        field?.name === "EKM Verification & Evidencing" ||
                        field?.name ===
                          "Cloud Product Registration & Cloud Product Check" ? (
                          <Button
                            variant="text"
                            // onClick={() => handleReadyToReleaseModalOpen()}
                            onClick={() =>
                              handleConditionalModalOpen(field.name)
                            }
                            style={{
                              textTransform: "capitalize",
                              fontSize: "12px",
                              marginRight: "30px",
                            }}
                          >
                            <EditIcon style={{ marginRight: "5px" }} /> Edit
                          </Button>
                        ) : (
                          <div
                            style={{
                              display: "inline",

                              marginLeft: "95px",
                            }}
                          ></div>
                        )}
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
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {readyToBuildBody}
      </Modal>
      <Modal
        open={readyToReleaseModalOpen}
        onClose={handleReadyToReleaseModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {readyToReleaseBody}
      </Modal>
      <Modal
        open={conditionalModalOpen}
        onClose={handleConditionalModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {conditionalBody}
      </Modal>
    </React.Fragment>
  );
}

export const CARFCollapsibleTable = () => {
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
