import React from 'react';
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

// function Row(props: { row: ReturnType<typeof createData> }) {
//   const { row } = props;
//   const [fieldToEdit, setFieldToEdit] = React.useState('');
//   const [narIdObject, setNarIdObject] = React.useState({});
//   const [isCompleted, setIsCompleted] = React.useState(['Ready to Build']);
//   const [isSubmitted, setIsSubmitted] = React.useState<string[]>([]);
//   const [editionSuccess, setEditionSuccess] = React.useState(false);
//   const [dropdownOpen, setDropdownOpen] = React.useState(false);
//   const [submissionModalOpen, setSubmissionModalOpen] = React.useState(false);
//   const [conditionalModalOpen, setConditionalModalOpen] = React.useState(false);
//   const [deploymentPatterns, setDeploymentPatterns] = React.useState('yes');
//   const [modalStyle] = React.useState(getModalStyle);
//   const classes = useRowStyles();
//   const preventDefault = (event: React.SyntheticEvent) =>
//     event.preventDefault();

//   const handleEdition = () => {
//     setEditionSuccess(!editionSuccess);
//   };
//   const handleConditionalModalOpen = (editingField: string) => {
//     setFieldToEdit(editingField);
//     setConditionalModalOpen(true);
//     setEditionSuccess(false);
//   };

//   const handleConditionalModalClose = () => {
//     setConditionalModalOpen(false);
//   };

//   const urlInputHandler = (preReq: string, value: string) => {
//     const newNarIdObject: object = { ...narIdObject };
//     // @ts-ignore
//     newNarIdObject.preReq.url = value;
//     setNarIdObject(newNarIdObject);
//   };

//   const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const deploymentPatternsSelect = event.target.value;
//     setDeploymentPatterns(deploymentPatternsSelect);
//   };

//   const handleSubmissionModalOpen = () => {
//     setSubmissionModalOpen(true);
//   };
//   const handleSubmissionModalClose = () => {
//     setSubmissionModalOpen(false);
//   };
//   const handleSubmission = (rowName: any) => {
//     const submissions = [...isSubmitted, rowName];
//     setIsSubmitted(submissions);
//     handleSubmissionModalOpen();
//     console.log('Is submitted es: ', isSubmitted);
//   };

//   // const conditionalBody = (
//   //   <div style={modalStyle} className={classes.paper}>
//   //     <div
//   //       style={{
//   //         display: 'flex',
//   //         flexDirection: 'row',
//   //         justifyContent: 'space-between',
//   //       }}
//   //     >
//   //       {fieldToEdit === 'Deployment Patterns' ? (
//   //         <h3>
//   //           {!editionSuccess &&
//   //             'Confirm if design implements all relevant Deployment Patterns'}
//   //         </h3>
//   //       ) : (
//   //         <h2 id='simple-modal-title'>
//   //           {!editionSuccess && `Edit ${fieldToEdit}`}
//   //         </h2>
//   //       )}

//   //       <span
//   //         style={{ cursor: 'pointer' }}
//   //         onClick={handleConditionalModalClose}
//   //       >
//   //         <CloseIcon />
//   //       </span>
//   //     </div>

//   //     <form style={{ marginLeft: '20px' }}>
//   //       {editionSuccess === false ? (
//   //         <div
//   //           style={{
//   //             display: 'flex',
//   //             flexDirection: 'row',
//   //             width: '90%',
//   //             justifyContent: 'space-between',
//   //             marginBottom: '25px',
//   //             padding: '25px 15px 15px 15px',
//   //             borderRadius: 10,
//   //           }}
//   //         >
//   //           {fieldToEdit === 'Deployment Patterns' && (
//   //             <div>
//   //               <FormControl variant='outlined' className={classes.formControl}>
//   //                 <InputLabel id='demo-simple-select-outlined-label'>
//   //                   Deployment Patterns
//   //                 </InputLabel>
//   //                 <Select
//   //                   labelId='demo-simple-select-outlined-label'
//   //                   id='deployment-patterns'
//   //                   value={deploymentPatterns}
//   //                   // @ts-ignore
//   //                   onChange={handleSelectChange}
//   //                   label='Deployment Patterns'
//   //                   inputProps={{
//   //                     deploymentPatterns: deploymentPatterns,
//   //                     id: 'outlined-age-native-simple',
//   //                   }}
//   //                 >
//   //                   <MenuItem value={'yes'}>
//   //                     Yes - the design implements ALL relevant deployment
//   //                     patterns
//   //                   </MenuItem>
//   //                   <MenuItem value={'no'}>
//   //                     No - the design DOES NOT implement ALL of the deployment
//   //                     patterns
//   //                   </MenuItem>
//   //                 </Select>
//   //                 <FormHelperText>
//   //                   If no, provide the rationale why in the comments section
//   //                 </FormHelperText>

//   //                 <h4>Solution Design (URL)</h4>
//   //                 <Link>
//   //                   https://confluence.intranet.db.com/display/GMRR/Evidence_Docs_sdd_exitplanV2
//   //                 </Link>
//   //                 <FormHelperText>
//   //                   If you have not provided your Solution Design URL, this will
//   //                   be null
//   //                 </FormHelperText>
//   //               </FormControl>
//   //             </div>
//   //           )}
//   //           {fieldToEdit !== 'EKM Verification & Evidencing' &&
//   //             fieldToEdit !== 'Deployment Patterns' && (
//   //               <TextField
//   //                 id={fieldToEdit}
//   //                 label={fieldToEdit}
//   //                 defaultValue='www.urlGivenByUser.com'
//   //                 autoComplete='off'
//   //                 variant='outlined'
//   //                 style={{ width: '70%' }}
//   //               />
//   //             )}
//   //           {fieldToEdit === 'Blueprint' ||
//   //           fieldToEdit === 'EKM Verification & Evidencing' ? null : (
//   //             <TextareaAutosize
//   //               aria-label='empty textarea'
//   //               minRows={4}
//   //               placeholder='Comment'
//   //               style={{
//   //                 borderColor: 'lightgray',
//   //                 borderRadius: 5,
//   //                 height: '50px',
//   //               }}
//   //             />
//   //           )}
//   //           {fieldToEdit === 'EKM Verification & Evidencing' && (
//   //             <div>
//   //               <p>
//   //                 Step A: Run the report{' '}
//   //                 <a href='shortcut.db.com/EKMReport'>
//   //                   shortcut.db.com/EKMReport
//   //                 </a>{' '}
//   //                 and action (if required) any steps to amend your EKM / LZ
//   //                 configuration as per{' '}
//   //                 <a href='shortcut.db.com/EKMGuide '>
//   //                   shortcut.db.com/EKMGuide
//   //                 </a>
//   //               </p>
//   //               <p>
//   //                 Step B: Export the report. Save in a confluence page. Provide
//   //                 the URL of the confluence page below
//   //               </p>
//   //               <TextField
//   //                 id={fieldToEdit}
//   //                 label={''}
//   //                 defaultValue=''
//   //                 placeholder='paste confluence URL here'
//   //                 autoComplete='off'
//   //                 variant='outlined'
//   //                 style={{ width: '90%' }}
//   //                 helperText='Mandatory'
//   //               />
//   //               <p>
//   //                 Step C: Provide any commentary / attestation required to
//   //                 explain / cover potential gaps highlighted in the report
//   //               </p>

//   //               <TextareaAutosize
//   //                 aria-label='empty textarea'
//   //                 minRows={4}
//   //                 placeholder='Comment'
//   //                 style={{
//   //                   borderColor: 'lightgray',
//   //                   borderRadius: 5,
//   //                   height: '50px',
//   //                   width: '90%',
//   //                 }}
//   //               />
//   //               <p>
//   //                 Step D: If any files or other sources are required to enhance
//   //                 the details provided in Step C, please provide a URL to these
//   //               </p>

//   //               <TextareaAutosize
//   //                 aria-label='empty textarea'
//   //                 minRows={4}
//   //                 placeholder='Comment'
//   //                 style={{
//   //                   borderColor: 'lightgray',
//   //                   borderRadius: 5,
//   //                   height: '50px',
//   //                   width: '90%',
//   //                 }}
//   //               />
//   //             </div>
//   //           )}
//   //         </div>
//   //       ) : (
//   //         <div
//   //           style={{
//   //             display: 'flex',
//   //             width: '100%',
//   //             flexDirection: 'row',
//   //             justifyContent: 'center',
//   //             fontSize: '1.5em',
//   //             marginBottom: 50,
//   //           }}
//   //         >
//   //           Saved!
//   //         </div>
//   //       )}

//   //       <div
//   //         style={{
//   //           display: 'flex',
//   //           flexDirection: 'row',
//   //           justifyContent: 'flex-end',
//   //           marginRight: 60,
//   //         }}
//   //       >
//   //         {editionSuccess === false ? (
//   //           <>
//   //             <Button
//   //               variant='contained'
//   //               style={{ margin: '0 20px' }}
//   //               color='primary'
//   //               // disabled={!linkUrl}
//   //               onClick={handleEdition}
//   //             >
//   //               Save
//   //             </Button>
//   //             <Button
//   //               variant='contained'
//   //               style={{ backgroundColor: '#FFFF', color: 'black' }}
//   //               onClick={handleConditionalModalClose}
//   //             >
//   //               Cancel
//   //             </Button>
//   //           </>
//   //         ) : (
//   //           ''
//   //         )}
//   //       </div>
//   //     </form>
//   //   </div>
//   // );

//   return (
//     <React.Fragment>
//       <TableRow className={classes.mainTableRow}>
//         <TableCell className={classes.mainTableCell}>
//           <IconButton
//             aria-label='expand row'
//             size='small'
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//             className={classes.dropdownIconButton}
//           >
//             {dropdownOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
//           </IconButton>
//           {/* ola ke ase{row.name} */}
//           {/* {mySampleObject?.tollgates?.ready_to_build.name} */}
//           {mySampleObject?.tollgates[0].name}
//         </TableCell>

//         <TableCell align='right' className={classes.labelTableCell}></TableCell>
//         <TableCell align='right'></TableCell>
//         <TableCell align='right'>
//           {row.name !== 'Ready to Design' && !isSubmitted.includes(row.name) ? (
//             <Button
//               variant='contained'
//               disabled={!isCompleted.includes(row.name)}
//               component={'button'}
//               onClick={() => handleSubmission(row.name)}
//               className={classes.submitButton}
//             >
//               Submit
//             </Button>
//           ) : row.name !== 'Ready to Design' &&
//             isSubmitted.includes(row.name) ? (
//             <Button className={classes.submittedButton} disabled={true}>
//               Submitted
//             </Button>
//           ) : (
//             ''
//           )}
//         </TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={dropdownOpen} timeout='auto' unmountOnExit>
//             <Box margin={1}>
//               <Table size='small' aria-label='purchases'>
//                 <TableHead style={{ backgroundColor: '#EDEFF2' }}>
//                   <TableRow>
//                     <TableCell align='left'>Pre-Requisite</TableCell>
//                     <TableCell align='left'>Status</TableCell>
//                     <TableCell align='left'>Rationale</TableCell>
//                     <TableCell align='left'>Label</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody style={{ marginLeft: 55 }}>
//                   {row.fields.map((field) => (
//                     <TableRow key={field?.name}>
//                       <TableCell
//                         align='left'
//                         component='th'
//                         scope='row'
//                         style={{ width: '33%', padding: 0 }}
//                       >
//                         {field?.name === 'Ready to Build Survey' ||
//                         field?.name === 'Blueprint' ? (
//                           <Link
//                             href='waltz.intranet.db.com/waltz/application/external-id/109235-1'
//                             target='_blank'
//                             rel='noopener'
//                             className={classes.waltzPreReqLink}
//                           >
//                             <span style={{ marginLeft: 3 }}>
//                               <EditIcon style={{ marginRight: '2px' }} /> Edit
//                             </span>
//                           </Link>
//                         ) : (
//                           ''
//                         )}

//                         {field?.name === 'Solution Design' ||
//                         field?.name === 'Deployment Patterns' ||
//                         field?.name === 'Resiliency Measure Test Results' ||
//                         field?.name ===
//                           'Auditing, Logging, Monitoring, Alerting Metrics' ||
//                         field?.name === 'EKM Verification & Evidencing' ||
//                         field?.name ===
//                           'Cloud Product Registration & Cloud Product Check' ? (
//                           <Button
//                             variant='text'
//                             onClick={() =>
//                               handleConditionalModalOpen(field.name)
//                             }
//                             className={classes.editButton}
//                           >
//                             <EditIcon style={{ marginRight: '5px' }} /> Edit
//                           </Button>
//                         ) : (
//                           ''
//                         )}
//                         {field.name === 'RTO / RPO' ||
//                         field.name === 'Information Classification' ||
//                         field.name === 'Advisory' ? (
//                           <div className={classes.preReqWhitespace}></div>
//                         ) : (
//                           ''
//                         )}
//                         <Link href='#' onClick={preventDefault}>
//                           {field?.name}
//                         </Link>
//                       </TableCell>
//                       <TableCell align='left'>
//                         {field.status === 'Self Served' && (
//                           <span className={classes.selfServedStatus}>
//                             <InfoIcon className={classes.statusIcon} />
//                             {field.status}
//                           </span>
//                         )}
//                         {field.status === 'Completed' && (
//                           <span className={classes.completedStatus}>
//                             <CheckCircleIcon className={classes.statusIcon} />
//                             {field.status}
//                           </span>
//                         )}

//                         {field.status === 'Not required' && (
//                           <span className={classes.notRequiredStatus}>
//                             <CancelIcon className={classes.statusIcon} />
//                             {field.status}
//                           </span>
//                         )}
//                         {field.status === 'In progress' && (
//                           <span className={classes.inprogressStatus}>
//                             <PlayCircleFilledIcon
//                               className={classes.statusIcon}
//                             />
//                             {field.status}
//                           </span>
//                         )}
//                         {field.status === 'Not started' && (
//                           <span className={classes.notRequiredStatus}>
//                             <WatchLaterIcon className={classes.statusIcon} />
//                             {field.status}
//                           </span>
//                         )}
//                       </TableCell>
//                       <TableCell align='left' style={{ overflow: 'hidden' }}>
//                         {field?.rationale}
//                       </TableCell>
//                       <TableCell
//                         align='left'
//                         style={{ overflow: 'hidden', width: '300px' }}
//                       ></TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//       <Modal
//         open={submissionModalOpen}
//         onClose={handleSubmissionModalClose}
//         aria-labelledby='simple-modal-title'
//         aria-describedby='simple-modal-description'
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <SubmissionBody
//           bodyStyle={modalStyle}
//           bodyClassName={classes.paper}
//           clickHandler={handleSubmissionModalClose}
//         />
//       </Modal>

//       <Modal
//         open={conditionalModalOpen}
//         onClose={handleConditionalModalClose}
//         aria-labelledby='simple-modal-title'
//         aria-describedby='simple-modal-description'
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//         }}
//       >
//         <ConditionalBody
//           bodyStyle={modalStyle}
//           bodyClassName={classes.paper}
//           clickHandler={handleConditionalModalClose}
//           fieldToEdit={fieldToEdit}
//           editionSuccess={editionSuccess}
//           deploymentPatterns={deploymentPatterns}
//           editionHandler={handleEdition}
//           selectChangeHandler={handleSelectChange}
//         />
//         {/* {conditionalBody} */}
//       </Modal>
//     </React.Fragment>
//   );
// }

// export const CARFCollapsibleTable = ({}:
// handleSubmissionModalOpen,
// handleSubmissionModalClose,
// handleConditionalModalOpen,
// handleConditionalModalClose,
// fieldToEdit,
// editionSuccess,
// deploymentPatterns,
// handleEdition,
// handleSelectChange,
// isSubmitted,
// isCompleted,
// handleSubmission,
export const CARFCollapsibleTable = () => {
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

  console.log('solution design es: ', solutionDesign);
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
          {mySampleObject.tollgates.map((tollgate) => (
            <Row
              key={tollgate.name}
              tollgate={tollgate}
              handleSave={handleSave}
              // preRequisites={tollgate?.pre_requisites}
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
