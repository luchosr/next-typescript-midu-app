import React from 'react';
import { rows, createData, Fields, mySampleObject } from './mockedData';
import { getModalStyle, useRowStyles } from './styles';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import EditIcon from '@material-ui/icons/Edit';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import InfoIcon from '@material-ui/icons/Info';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import { SubmissionBody, ConditionalBody } from './CARFModalBodies';
// import { useAppContext } from './CARFStore/storeProvider';

import {
  Box,
  Button,
  Collapse,
  IconButton,
  Link,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

// function getModalStyle() {
//   const top = 10;
//   const left = 25;

//   return {
//     top: `${top}%`,
//     margin: 'auto',
//   };
// }

export function Row({ tollgate, handleSave }: any) {
  // const { row } = props;
  const [fieldToEdit, setFieldToEdit] = React.useState('');
  const [narIdObject, setNarIdObject] = React.useState({});
  const [isCompleted, setIsCompleted] = React.useState(['Ready to Build']);
  const [isSubmitted, setIsSubmitted] = React.useState<string[]>([]);
  const [editionSuccess, setEditionSuccess] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [submissionModalOpen, setSubmissionModalOpen] = React.useState(false);
  const [conditionalModalOpen, setConditionalModalOpen] = React.useState(false);
  const [isDeploymentPatterns, setIsDeploymentPatterns] = React.useState('yes');
  // const [globalTollgate, setGlobalTollgate] = React.useState(tollgate);
  // const { updateTollgates, updateSolutionDesign } = useAppContext();
  const [solutionDesign, setSolutionDesign] = React.useState(
    tollgate[1]?.pre_requisites[3]
  );
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useRowStyles();
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();

  const handleEdition = () => {
    setEditionSuccess(!editionSuccess);
  };

  const handleSaveButton = (preReq: any, value: any) => {
    preReq === 'Solution Design' && updateSolutionDesign(value);
  };
  const handleConditionalModalOpen = (editingField: string) => {
    // const handleConditionalModalOpen = () => {
    setFieldToEdit(editingField);
    setConditionalModalOpen(true);
    setEditionSuccess(false);
  };

  const handleConditionalModalClose = () => {
    setConditionalModalOpen(false);
  };

  const urlInputHandler = (preReq: string, value: string) => {
    const newNarIdObject: object = { ...narIdObject };
    // @ts-ignore
    newNarIdObject.preReq.url = value;
    setNarIdObject(newNarIdObject);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const deploymentPatternsSelect = event.target.value;
    setIsDeploymentPatterns(deploymentPatternsSelect);
    console.log('El select de deployment patterns es: ', isDeploymentPatterns);
  };

  const handleSubmissionModalOpen = () => {
    setSubmissionModalOpen(true);
  };
  const handleSubmissionModalClose = () => {
    setSubmissionModalOpen(false);
  };
  const handleSubmission = (rowName: any) => {
    const submissions = [...isSubmitted, rowName];
    setIsSubmitted(submissions);
    handleSubmissionModalOpen();
    console.log('Is submitted es: ', rowName);
  };

  return (
    <React.Fragment>
      <TableRow className={classes.mainTableRow}>
        <TableCell className={classes.mainTableCell}>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={classes.dropdownIconButton}
          >
            {dropdownOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </IconButton>
          {tollgate.name}
        </TableCell>

        <TableCell align='right' className={classes.labelTableCell}></TableCell>
        <TableCell align='right'></TableCell>
        <TableCell align='right'>
          {tollgate?.name !== 'Ready to Design' &&
          !isSubmitted.includes(tollgate?.name) ? (
            <Button
              variant='contained'
              disabled={!isCompleted.includes(tollgate?.name)}
              component={'button'}
              onClick={() => handleSubmission(tollgate?.name)}
              className={classes.submitButton}
            >
              Submit
            </Button>
          ) : tollgate?.name !== 'Ready to Design' &&
            isSubmitted.includes(tollgate?.name) ? (
            <Button className={classes.submittedButton} disabled={true}>
              Submitted
            </Button>
          ) : (
            ''
          )}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={dropdownOpen} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Table size='small' aria-label='purchases'>
                <TableHead style={{ backgroundColor: '#EDEFF2' }}>
                  <TableRow>
                    <TableCell align='left'>Pre-Requisite</TableCell>
                    <TableCell align='left'>Status</TableCell>
                    <TableCell align='left'>Rationale</TableCell>
                    <TableCell align='left'>Label</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody style={{ marginLeft: 55 }}>
                  {tollgate?.pre_requisites.map((field: any) => (
                    <TableRow key={field?.name}>
                      <TableCell
                        align='left'
                        component='th'
                        scope='row'
                        style={{ width: '33%', padding: 0 }}
                      >
                        {field?.name === 'Ready to Build Survey' ||
                        field?.name === 'Blueprint' ? (
                          <Link
                            href='waltz.intranet.db.com/waltz/application/external-id/109235-1'
                            target='_blank'
                            rel='noopener'
                            className={classes.waltzPreReqLink}
                          >
                            <span style={{ marginLeft: 3 }}>
                              <EditIcon style={{ marginRight: '2px' }} /> Edit
                            </span>
                          </Link>
                        ) : (
                          ''
                        )}

                        {field?.name === 'Solution Design' ||
                        field?.name === 'Deployment Patterns' ||
                        field?.name === 'Resiliency Measure Test Results' ||
                        field?.name ===
                          'Auditing, Logging, Monitoring, Alerting Metrics' ||
                        field?.name === 'EKM Verification & Evidencing' ||
                        field?.name ===
                          'Cloud Product Registration & Cloud Product Check' ? (
                          <Button
                            variant='text'
                            onClick={() =>
                              handleConditionalModalOpen(field.name)
                            }
                            className={classes.editButton}
                          >
                            <EditIcon style={{ marginRight: '5px' }} /> Edit
                          </Button>
                        ) : (
                          ''
                        )}
                        {field.name === 'RTO / RPO' ||
                        field.name === 'Information Classification' ||
                        field.name === 'Advisory' ? (
                          <div className={classes.preReqWhitespace}></div>
                        ) : (
                          ''
                        )}
                        <Link href='#' onClick={preventDefault}>
                          {field?.name}
                        </Link>
                      </TableCell>
                      <TableCell align='left'>
                        {field.status === 'Self Served' && (
                          <span className={classes.selfServedStatus}>
                            <InfoIcon className={classes.statusIcon} />
                            {field.status}
                          </span>
                        )}
                        {field.status === 'Completed' && (
                          <span className={classes.completedStatus}>
                            <CheckCircleIcon className={classes.statusIcon} />
                            {field.status}
                          </span>
                        )}

                        {field.status === 'Not required' && (
                          <span className={classes.notRequiredStatus}>
                            <CancelIcon className={classes.statusIcon} />
                            {field.status}
                          </span>
                        )}
                        {field.status === 'In progress' && (
                          <span className={classes.inprogressStatus}>
                            <PlayCircleFilledIcon
                              className={classes.statusIcon}
                            />
                            {field.status}
                          </span>
                        )}
                        {field.status === 'Not started' && (
                          <span className={classes.notRequiredStatus}>
                            <WatchLaterIcon className={classes.statusIcon} />
                            {field.status}
                          </span>
                        )}
                      </TableCell>
                      <TableCell align='left' style={{ overflow: 'hidden' }}>
                        {field?.rationale}
                      </TableCell>
                      <TableCell
                        align='left'
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
      <Modal
        open={submissionModalOpen}
        onClose={handleSubmissionModalClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <SubmissionBody
          bodyStyle={modalStyle}
          bodyClassName={classes.paper}
          clickHandler={handleSubmissionModalClose}
        />
      </Modal>

      <Modal
        open={conditionalModalOpen}
        onClose={handleConditionalModalClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ConditionalBody
          bodyStyle={modalStyle}
          bodyClassName={classes.paper}
          clickHandler={handleConditionalModalClose}
          fieldToEdit={fieldToEdit}
          editionSuccess={editionSuccess}
          deploymentPatterns={isDeploymentPatterns}
          editionHandler={handleEdition}
          selectChangeHandler={handleSelectChange}
          handleSave={handleSaveButton}
        />
        {/* {conditionalBody} */}
      </Modal>
    </React.Fragment>
  );
}
