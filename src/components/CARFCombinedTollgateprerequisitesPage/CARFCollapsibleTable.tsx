import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';

const useRowStyles = makeStyles({
  root: {
    backgroundColor: 'lime',
    '& > *': {
      borderBottom: 'unset',
    },
  },

  mainTableCell: { paddingLeft: 10 },
  dropdownIconButton: { marginRight: 10 },
});

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
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  };
}

const rows = [
  createData('Ready to Design', [
    {
      name: 'Advisory',
      status: 'Self Served',
      rationale:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor',
    },
  ]),
  createData('Ready to Build', [
    {
      name: 'Ready to Build Survey',
      status: 'Completed',
      rationale:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor',
    },
    {
      name: 'RTO / RPO',
      status: 'Completed',
      rationale:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor',
    },
  ]),
  createData('Ready to Release', [
    {
      name: 'RTO / RPO',
      status: 'Completed',
      rationale:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor',
    },
  ]),
];

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow style={{ backgroundColor: '#29B6F61A' }}>
        <TableCell className={classes.mainTableCell}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            className={classes.dropdownIconButton}
          >
            {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </IconButton>
          {row.name}
        </TableCell>
        <TableCell component="th" scope="row"></TableCell>
        <TableCell align="left"></TableCell>

        <TableCell
          align="right"
          style={{
            width: 300,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: '15px 8px 0px',
          }}
        >
          <Button
            variant="contained"
            disabled="true"
            onClick={() => handleClick(row)}
            style={{ textTransform: 'capitalize', fontSize: '9px' }}
          >
            <CheckCircleOutlineIcon style={{ marginRight: '5px' }} /> Submit
          </Button>
          <Button
            variant="contained"
            onClick={() => handleClick(row)}
            style={{
              textTransform: 'none',
              backgroundColor: '#0C234F',
              color: '#FFFFFF',
              fontSize: '9px',
            }}
          >
            <ErrorOutlineIcon style={{ marginRight: '5px' }} /> Raise a Finding
          </Button>
        </TableCell>
        <TableCell align="right"></TableCell>
        <TableCell align="right"></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {/* {row.history.map(historyRow => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        hola soy un date
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                    </TableRow>
                  ))} */}
                  {row.fields.map(field => (
                    <TableRow key={field?.name}>
                      <TableCell
                        component="th"
                        scope="row"
                        style={{ width: '33%' }}
                      >
                        {field?.name}
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ paddingLeft: 0, width: '8%' }}
                      >
                        {field?.status}
                      </TableCell>
                      <TableCell align="left" style={{ overflow: 'hidden' }}>
                        {field?.rationale}
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ overflow: 'hidden', width: '300px' }}
                      ></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
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
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow
            style={{
              backgroundColor: '#EDEFF2',
              width: '100%',
            }}
          >
            <TableCell
              style={{
                color: '#000000DE',
                width: '35%',
                fontSize: '1rem',
                paddingLeft: '50px',
              }}
            >
              Pre-Requisite
            </TableCell>
            <TableCell
              align="left"
              style={{ width: '10%', color: '#000000DE', fontSize: '1rem' }}
            >
              | Status
            </TableCell>
            <TableCell
              align="left"
              style={{ width: '35%', color: '#000000DE', fontSize: '1rem' }}
            >
              | Rationale
            </TableCell>
            <TableCell
              align="left"
              style={{ width: '7%', color: '#000000DE', fontSize: '1rem' }}
            >
              | Label
            </TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
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
