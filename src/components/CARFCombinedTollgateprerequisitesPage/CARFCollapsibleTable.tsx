import React, { useContext } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { rows, createData, Fields, mySampleObject } from './mockedData';
import { getModalStyle, useRowStyles } from './styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import { Row } from './CARFTableRow';
import { StoreContext } from './CARFStore/storeProvider';

export const CARFCollapsibleTable = () => {
  const [store, dispatch] = useContext(StoreContext);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [globalTollgate, setGlobalTollgate] = React.useState(
    mySampleObject.tollgates
  );
  const [solutionDesign, setSolutionDesign] = React.useState(
    mySampleObject.tollgates[1]?.pre_requisites[3]
  );

  const handleSave = (preReq: any, value: any) => {
    preReq === 'Solution Design' && setSolutionDesign(value);
  };

  // console.log('solution design es: ', solutionDesign);
  // const classes = useRowStyles();

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
      <Table aria-label='collapsible table'>
        <TableBody>
          {store.tollgates.map((tollgate) => (
            <Row
              key={tollgate.name}
              tollgate={tollgate}
              handleSave={handleSave}
            />
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

// handleSubmissionModalOpen={handleSubmissionModalOpen}
// handleSubmissionModalClose={handleSubmissionModalClose}
// handleConditionalModalOpen={handleConditionalModalOpen}
// handleConditionalModalClose={handleConditionalModalClose}
// fieldToEdit={fieldToEdit}
// editionSuccess={editionSuccess}
// deploymentPatterns={deploymentPatterns}
// handleEdition={handleEdition}
// handleSelectChange={handleSelectChange}
// isSubmitted={isSubmitted}
// isCompleted={isCompleted}
// handleSubmission={handleSubmission}
