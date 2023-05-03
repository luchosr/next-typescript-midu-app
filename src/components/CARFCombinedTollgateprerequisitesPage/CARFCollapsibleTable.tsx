import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import EditIcon from "@material-ui/icons/Edit";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import { Modal, TextField } from "@mui/material";

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
    paper: {
      position: "absolute",
      width: "50%",
      height: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
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
  ]),
  createData("Ready to Release", [
    {
      name: "RTO / RPO",
      status: "Completed",
      rationale:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor",
    },
  ]),
];

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useRowStyles();

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
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
          // onChange={}
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
            // disabled={!linkUrl}
            onClick={handleModalClose}
          >
            Save
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#FFFF", color: "black" }}
            onClick={handleModalClose}
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
              onClick={() => handleModalOpen()}
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
              onClick={() => handleModalOpen()}
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
            disabled="false"
            onClick={() => handleOpen()}
            style={{ textTransform: "capitalize", fontSize: "12px" }}
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
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Pre-Requisite</TableCell>
                    <TableCell align="left">Status</TableCell>
                    <TableCell align="left">Rationale</TableCell>
                    <TableCell align="left">Label</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody style={{ marginLeft: 55 }}>
                  {/* {row.history.map(historyRow => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        hola soy un date
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                    </TableRow>
                  ))} */}
                  {row.fields.map((field) => (
                    <TableRow key={field?.name}>
                      <TableCell
                        align="left"
                        component="th"
                        scope="row"
                        style={{ width: "33%" }}
                      >
                        {field?.name}
                      </TableCell>
                      <TableCell align="left">{field?.status}</TableCell>
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
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
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
        {/* <TableHead>
          <TableRow
            style={{
              backgroundColor: "#EDEFF2",
              width: "100%",
            }}
          >
            <TableCell
              style={{
                color: "#000000DE",
                width: "35%",
                fontSize: "1rem",
                paddingLeft: "50px",
              }}
            >
              Pre-Requisite
            </TableCell>
            <TableCell
              align="left"
              style={{ width: "10%", color: "#000000DE", fontSize: "1rem" }}
            >
              | Status
            </TableCell>
            <TableCell
              align="left"
              style={{ width: "35%", color: "#000000DE", fontSize: "1rem" }}
            >
              | Rationale
            </TableCell>
            <TableCell
              align="left"
              style={{ width: "7%", color: "#000000DE", fontSize: "1rem" }}
            >
              | Label
            </TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead> */}
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
// function rand() {
//   throw new Error("Function not implemented.");
// }

// function setLinkUrl(value: string): void {
//   throw new Error("Function not implemented.");
// }
