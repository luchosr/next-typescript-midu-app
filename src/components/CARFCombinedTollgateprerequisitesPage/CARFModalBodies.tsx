import React, { useContext, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import FormHelperText from '@material-ui/core/FormHelperText';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import DoneAllIcon from '@material-ui/icons/DoneAll';
// import { useAppContext } from './CARFStore/storeProvider';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from '@mui/material';
import { StoreContext } from './CARFStore/storeProvider';

interface conditionalBodyProps {
  bodyStyle: any;
  bodyClassName: string;
  clickHandler: any;
  fieldToEdit: string;
  editionSuccess: boolean;
  editionHandler: any;
  deploymentPatterns: string;
  selectChangeHandler: any;
  handleSave: any;
}
interface submissionBodyProps {
  bodyStyle: any;
  bodyClassName: string;
  clickHandler: any;
}

export const SubmissionBody = ({
  bodyStyle,
  bodyClassName,
  clickHandler,
}: // handleSave,
submissionBodyProps) => {
  return (
    <div style={bodyStyle} className={bodyClassName}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <h2>Submitted!</h2>

        <span style={{ cursor: 'pointer' }} onClick={clickHandler}>
          <CloseIcon />
        </span>
      </div>
      <p>
        You have submitted the mandatory pre-requisites for QA review. CARF team
        will contact you shortly to either:
      </p>
      <p>a) update one or more pre-requisite(s)</p>
      <p>b) schedule Tollgate Review</p>
    </div>
  );
};

export const ConditionalBody = ({
  bodyStyle,
  bodyClassName,
  clickHandler,
  fieldToEdit,
  editionSuccess,
  // deploymentPatterns,
  editionHandler,
  selectChangeHandler,
  handleSave,
}: conditionalBodyProps) => {
  const [inputValue, setInputValue] = React.useState('');
  // const { updateTollgates, updateSolutionDesign } = useAppContext();
  const [store, dispatch] = useContext(StoreContext);
  const [stateTollgates, setStateTollgates] = React.useState(store.tollgates);
  const [textAreaComment, setTextAreaComment] = React.useState('');

  const [solutionDesign, setSolutionDesign] = React.useState(
    store.tollgates[1].pre_requisites[3]
  );
  const [cloudProdReg, setCloudProdReg] = React.useState(
    store.tollgates[1].pre_requisites[4]
  );
  const [resiliencyMeasures, setResiliencyMeasures] = React.useState(
    store.tollgates[2].pre_requisites[0]
  );
  const [auditingLogging, setAuditingLogging] = React.useState(
    store.tollgates[2].pre_requisites[1]
  );
  const [ekmVerification, setEkmVerification] = React.useState(
    store.tollgates[2].pre_requisites[2]
  );
  const [deploymentPatternsCheck, setDeploymentPatternsCheck] =
    React.useState('yes');
  const [deploymentPatterns, setDeploymentPatterns] = React.useState(
    store.tollgates[1].pre_requisites[5]
  );
  // const [ekmInput, setEkmInput] = React.useState({
  //   confluence_url: store.tollgates[2].pre_requisites[2].confluence_url,
  //   comment: store.tollgates[2].pre_requisites[2].comment,
  //   files_url: store.tollgates[2].pre_requisites[2].files_url,
  // });

  const handleTollgates = (
    solutionDesign: any,
    cloudProdReg: any,
    deploymentPatterns: any,
    resiliencyMeasures: any,
    auditingLogging: any,
    ekmVerification: any
  ) => {
    console.log('EL tollgate final queda: ', [
      {
        name: 'Ready to Design',
        pre_requisites: [store.tollgates[0].pre_requisites[0]],
      },
      {
        name: 'Ready to Build',
        pre_requisites: [
          store.tollgates[1].pre_requisites[0],
          store.tollgates[1].pre_requisites[1],
          store.tollgates[1].pre_requisites[2],
          solutionDesign,
          cloudProdReg,
          deploymentPatterns,
          store.tollgates[1].pre_requisites[6],
        ],
      },
      {
        name: 'Ready to Release',
        pre_requisites: [resiliencyMeasures, auditingLogging, ekmVerification],
      },
    ]);
  };

  const handleTextArea = (fieldToEdit: string, text: string) => {
    fieldToEdit === 'Solution Design' &&
      setSolutionDesign({
        ...solutionDesign,
        comment: text,
      });
    fieldToEdit === 'Cloud Product Registration & Cloud Product Check' &&
      setCloudProdReg({
        ...cloudProdReg,
        comment: text,
      });
    fieldToEdit === 'Resiliency Measure Test Results' &&
      setResiliencyMeasures({
        ...resiliencyMeasures,
        comment: text,
      });
    fieldToEdit === 'Auditing, Logging, Monitoring, Alerting Metrics' &&
      setAuditingLogging({
        ...auditingLogging,
        comment: text,
      });
    fieldToEdit === 'Deployment Patterns' &&
      setDeploymentPatterns({
        ...deploymentPatterns,
        comment: text,
      });
  };

  const handleSaveButton = (
    fieldToEdit: string,
    urlData: string
    // commentData: string
  ) => {
    fieldToEdit === 'Solution Design' &&
      setSolutionDesign({
        ...solutionDesign,
        url: urlData,

        status: 'Completed',
      });
    fieldToEdit === 'Cloud Product Registration & Cloud Product Check' &&
      setCloudProdReg({
        ...cloudProdReg,
        url: urlData,

        status: 'Completed',
      });
    fieldToEdit === 'Resiliency Measure Test Results' &&
      setResiliencyMeasures({
        ...resiliencyMeasures,
        url: urlData,

        status: 'Completed',
      });
    fieldToEdit === 'Auditing, Logging, Monitoring, Alerting Metrics' &&
      setAuditingLogging({
        ...auditingLogging,
        url: urlData,

        status: 'Completed',
      });
    fieldToEdit === 'Deployment Patterns' &&
      setDeploymentPatterns({
        ...deploymentPatterns,
        // all_deployment_patterns_implemented: deploymentPatternsCheck,

        status: 'Completed',
      });

    handleTollgates(
      solutionDesign,
      cloudProdReg,
      deploymentPatterns,
      resiliencyMeasures,
      auditingLogging,
      ekmVerification
    );
    editionHandler();
  };

  console.log('EL tollgate final queda: ', [
    {
      name: 'Ready to Design',
      pre_requisites: [store.tollgates[0].pre_requisites[0]],
    },
    {
      name: 'Ready to Build',
      pre_requisites: [
        store.tollgates[1].pre_requisites[0],
        store.tollgates[1].pre_requisites[1],
        store.tollgates[1].pre_requisites[2],
        solutionDesign,
        cloudProdReg,
        deploymentPatterns,
        store.tollgates[1].pre_requisites[6],
      ],
    },
    {
      name: 'Ready to Release',
      pre_requisites: [resiliencyMeasures, auditingLogging, ekmVerification],
    },
  ]);
  // console.log('el nuevo solution design es: ', solutionDesign);
  const handleInputValue = (value: string) => {
    setInputValue(value);
    console.log('el input value es: ', inputValue);
  };
  // console.log('el deployment patterns check es: ', deploymentPatternsCheck);
  console.log('el store es: ', store);
  return (
    <div>
      <div style={bodyStyle} className={bodyClassName}>
        <div
          className=''
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          {' '}
          <span
            style={{
              cursor: 'pointer',
              // display: 'inline-block',
              // position: 'relative',
            }}
            onClick={clickHandler}
          >
            {/* <CloseIcon style={{ position: 'absolute', top: 0, left: 50 }} /> */}
            <CloseIcon />
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          {fieldToEdit === 'Deployment Patterns' ? (
            <h3>
              Confirm if design implements all relevant Deployment Patterns
            </h3>
          ) : (
            <h2 id='simple-modal-title'>
              {!editionSuccess && 'Edit'} {fieldToEdit}
            </h2>
          )}
        </div>

        {/* <form style={{ marginLeft: '20px', marginTop: '30px' }}> */}
        <form style={{ marginLeft: '20px', marginTop: '0px' }}>
          {editionSuccess === false ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                // width: '90%',
                justifyContent: 'space-between',
                marginBottom: '25px',
                // padding: '25px 15px 15px 15px',
                borderRadius: 10,
              }}
            >
              {fieldToEdit === 'Deployment Patterns' && (
                <form style={{ width: '75%' }}>
                  <FormControl
                    variant='outlined'
                    // className={classes.formControl}
                    style={{
                      width: '70%',
                      display: 'block',
                    }}
                  >
                    <InputLabel id='demo-simple-select-outlined-label'>
                      Deployment Patterns
                    </InputLabel>
                    <Select
                      labelId='demo-simple-select-outlined-label'
                      id='deployment-patterns'
                      style={{ width: '120%' }}
                      value={
                        deploymentPatterns.all_deployment_patterns_implemented
                      }
                      // @ts-ignore
                      // onChange={selectChangeHandler}
                      // onChange={(e) =>
                      //   setDeploymentPatternsCheck(e.target.value)
                      // }
                      onChange={(e) =>
                        setDeploymentPatterns({
                          ...deploymentPatterns,
                          all_deployment_patterns_implemented: e.target.value,
                        })
                      }
                      label='Deployment Patterns'
                      inputProps={{
                        deploymentPatterns: deploymentPatterns,
                        id: 'outlined-age-native-simple',
                      }}
                    >
                      <MenuItem value={'yes'}>
                        Yes - the design implements ALL relevant deployment
                        patterns
                      </MenuItem>
                      <MenuItem value={'no'}>
                        No - the design DOES NOT implement ALL of the deployment
                        patterns
                      </MenuItem>
                    </Select>
                    <FormHelperText>
                      If no, provide the rationale why in the comments section
                    </FormHelperText>

                    <h4>Solution Design (URL)</h4>
                    <Link>
                      https://confluence.intranet.db.com/display/GMRR/Evidence_Docs_sdd_exitplanV2
                    </Link>
                    <FormHelperText>
                      If you have not provided your Solution Design URL, this
                      will be null
                    </FormHelperText>
                  </FormControl>
                </form>
              )}
              {fieldToEdit !== 'EKM Verification & Evidencing' &&
                fieldToEdit !== 'Deployment Patterns' && (
                  <TextField
                    id={fieldToEdit}
                    label={fieldToEdit}
                    defaultValue=''
                    placeholder='please introduce a proper URL'
                    onChange={(e) => handleInputValue(e.target.value)}
                    autoComplete='off'
                    // value={}
                    variant='outlined'
                    style={{ width: '70%' }}
                  />
                )}
              {fieldToEdit === 'Blueprint' ||
              fieldToEdit === 'EKM Verification & Evidencing' ? null : (
                <TextareaAutosize
                  aria-label='empty textarea'
                  minRows={4}
                  placeholder='leave a comment'
                  // onChange={(e) =>
                  //   console.log(e.target.value, 'el field es :', fieldToEdit)
                  // }
                  onChange={(e) => handleTextArea(fieldToEdit, e.target.value)}
                  style={{
                    borderColor: 'lightgray',
                    borderRadius: 5,
                    height: '50px',
                  }}
                />
              )}
              {fieldToEdit === 'EKM Verification & Evidencing' && (
                <div style={{ overflow: 'hidden' }}>
                  <p>
                    Step A: Run the report{' '}
                    <a href='shortcut.db.com/EKMReport'>
                      shortcut.db.com/EKMReport
                    </a>{' '}
                    and action (if required) any steps to amend your EKM / LZ
                    configuration as per{' '}
                    <a href='shortcut.db.com/EKMGuide '>
                      shortcut.db.com/EKMGuide
                    </a>
                  </p>
                  <p>
                    Step B: Export the report. Save in a confluence page.
                    Provide the URL of the confluence page below
                  </p>
                  <TextField
                    id={fieldToEdit}
                    label={''}
                    // defaultValue=''
                    placeholder='paste confluence URL here'
                    autoComplete='off'
                    variant='outlined'
                    style={{ width: '90%' }}
                    value={ekmVerification.confluence_url}
                    onChange={(e) =>
                      setEkmVerification({
                        ...ekmVerification,
                        confluence_url: e.target.value,
                      })
                    }
                    helperText='Mandatory'
                  />
                  <p>
                    Step C: Provide any commentary / attestation required to
                    explain / cover potential gaps highlighted in the report
                  </p>

                  <TextareaAutosize
                    aria-label='empty textarea'
                    minRows={4}
                    placeholder='Comment2'
                    style={{
                      borderColor: 'lightgray',
                      borderRadius: 5,
                      height: '50px',
                      width: '90%',
                    }}
                    value={ekmVerification.comment}
                    onChange={(e) =>
                      setEkmVerification({
                        ...ekmVerification,
                        comment: e.target.value,
                      })
                    }
                  />
                  <p>
                    Step D: If any files or other sources are required to
                    enhance the details provided in Step C, please provide a URL
                    to these
                  </p>

                  <TextareaAutosize
                    aria-label='empty textarea'
                    minRows={4}
                    placeholder='Comment 1'
                    style={{
                      borderColor: 'lightgray',
                      borderRadius: 5,
                      height: '50px',
                      width: '90%',
                    }}
                    value={ekmVerification.files_url}
                    onChange={(e) =>
                      setEkmVerification({
                        ...ekmVerification,
                        files_url: e.target.value,
                      })
                    }
                  />
                </div>
              )}
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                fontSize: '1.5em',
                marginBottom: 50,
              }}
            >
              Saved!
            </div>
          )}

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            {editionSuccess === false ? (
              <>
                <Button
                  variant='contained'
                  style={{ margin: '0 20px' }}
                  color='primary'
                  // disabled={!linkUrl}
                  // onClick={editionHandler}
                  // onClick={() => console.log(`${fieldToEdit}.input`)}
                  // onClick={() =>
                  //   console.log(inputValue, 'el field es: ', fieldToEdit)
                  // }
                  // onClick={handleSave(fieldToEdit, {
                  //   name: 'Solution Design',
                  //   url: inputValue,
                  //   status: 'completado',
                  //   rationale:
                  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor',
                  //   label: null,
                  //   comment: 'hola tenes que arreglar los comentarios',
                  // })}
                  onClick={() => handleSaveButton(fieldToEdit, inputValue)}
                >
                  Save
                </Button>
                <Button
                  variant='contained'
                  style={{ backgroundColor: '#FFFF', color: 'black' }}
                  onClick={clickHandler}
                >
                  Cancel
                </Button>
              </>
            ) : (
              ''
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
