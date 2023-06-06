import React, { useContext, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import FormHelperText from '@material-ui/core/FormHelperText';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { StoreContext } from './CARFStore/storeProvider';
import { types } from './CARFStore/storeReducer';

interface conditionalBodyProps {
  bodyStyle: any;
  bodyClassName: string;
  clickHandler: any;
  fieldToEdit: string;
  editionSuccess: boolean;
  editionHandler: any;
  deploymentPatterns: string;
  selectChangeHandler: any;
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
}: submissionBodyProps) => {
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
  editionHandler,
}: conditionalBodyProps) => {
  // const [inputValue, setInputValue] = React.useState('');
  const [store, dispatch] = useContext(StoreContext);
  // const [stateTollgates, setStateTollgates] = React.useState(store.tollgates);
  // const [textAreaComment, setTextAreaComment] = React.useState('');
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = React.useState(false);

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
  // const [deploymentPatternsCheck, setDeploymentPatternsCheck] =
  //   React.useState('yes');
  const [deploymentPatterns, setDeploymentPatterns] = React.useState(
    store.tollgates[1].pre_requisites[5]
  );

  const updatedTollgatesDispatcher = (updatedTollgates: any) => {
    dispatch({
      type: types.updateTollgates,
      payload: updatedTollgates,
    });
  };
  const handleTollgates = (
    solutionDesign: any,
    cloudProdReg: any,
    deploymentPatterns: any,
    resiliencyMeasures: any,
    auditingLogging: any,
    ekmVerification: any
  ) => {
    updatedTollgatesDispatcher([
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
        rationale_comment: text,
        status: 'Completed',
      });
    console.log('deployment patterns es :', deploymentPatterns);
  };
  const handleSaveButtonValidation = (fieldToEdit: string) => {
    fieldToEdit === 'Deployment Patterns' &&
    deploymentPatterns.all_deployment_patterns_implemented === 'no' &&
    deploymentPatterns.rationale_comment === ''
      ? setIsSaveButtonDisabled(true)
      : setIsSaveButtonDisabled(false);
  };
  const handleSaveButton = () => {
    editionHandler();
    handleTollgates(
      solutionDesign,
      cloudProdReg,
      deploymentPatterns,
      resiliencyMeasures,
      auditingLogging,
      ekmVerification
    );
  };

  const handleDeploymentPatternsCheck = (eventValue: any) => {
    setDeploymentPatterns({
      ...deploymentPatterns,
      all_deployment_patterns_implemented: eventValue,
      status: 'Completed',
    });
    eventValue === 'no'
      ? setIsSaveButtonDisabled(true)
      : setIsSaveButtonDisabled(false);
  };

  const handleDeploymentPatternsTextArea = (textValue: string) => {
    setDeploymentPatterns({
      ...deploymentPatterns,
      rationale_comment: textValue,
    });
    setIsSaveButtonDisabled(false);
  };

  const handleInputValue = (urlData: string, fieldToEdit: string) => {
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
      });
  };
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
            <CloseIcon />
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginLeft: 20,
          }}
        >
          {fieldToEdit === 'Deployment Patterns' ? (
            <h3>
              {!editionSuccess &&
                `Confirm if design implements all relevant Deployment Patterns`}
            </h3>
          ) : (
            <h2 id='simple-modal-title'>
              {!editionSuccess && `Edit ${fieldToEdit}`}
              {/* {fieldToEdit} */}
            </h2>
          )}
        </div>
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
                <form style={{ width: '100%' }}>
                  <FormControl
                    variant='outlined'
                    style={{
                      width: '90%',
                    }}
                  >
                    {' '}
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <div style={{ width: '100%' }}>
                        <InputLabel id='demo-simple-select-outlined-label'>
                          Deployment Patterns
                        </InputLabel>
                        <Select
                          labelId='demo-simple-select-outlined-label'
                          id='deployment-patterns'
                          style={{ width: '500px' }}
                          onChange={(e) =>
                            handleDeploymentPatternsCheck(e.target.value)
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
                            No - the design DOES NOT implement ALL of the
                            deployment patterns
                          </MenuItem>
                        </Select>
                        <FormHelperText>
                          If no, provide the rationale why in the comments
                          section
                        </FormHelperText>
                      </div>
                      <TextareaAutosize
                        aria-label='empty textarea'
                        minRows={4}
                        placeholder='leave a comment'
                        // onChange={(e) =>
                        //   console.log(e.target.value, 'el field es :', fieldToEdit)
                        // }
                        // onChange={(e) =>
                        //   handleTextArea(fieldToEdit, e.target.value)
                        // }
                        onChange={(e) =>
                          handleDeploymentPatternsTextArea(e.target.value)
                        }
                        style={{
                          borderColor: 'lightgray',
                          borderRadius: 5,
                          height: '50px',
                          marginLeft: '20px',
                        }}
                      />
                    </div>
                    <h4>Solution Design (URL)</h4>
                    <Link>
                      https://confluence.intranet.db.com/display/GMRR/Evidence_Docs_sdd_exitplanV2
                    </Link>
                    <FormHelperText>
                      If you have not provided your Solution Design URL, this
                      will be null
                    </FormHelperText>
                  </FormControl>
                  <div
                    style={{
                      marginTop: 50,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      width: '90%',
                    }}
                  >
                    <div>
                      <Button
                        variant='contained'
                        style={{ margin: '0 20px' }}
                        color='primary'
                        disabled={isSaveButtonDisabled}
                        onClick={() => handleSaveButton()}
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
                    </div>
                  </div>
                </form>
              )}

              {fieldToEdit === 'Solution Design' ||
              fieldToEdit === 'Resiliency Measure Test Results' ||
              fieldToEdit ===
                'Auditing, Logging, Monitoring, Alerting Metrics' ? (
                <div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                      // border: '1px solid red',
                    }}
                  >
                    <TextField
                      id={fieldToEdit}
                      label={fieldToEdit}
                      defaultValue=''
                      placeholder='please introduce a proper URL'
                      onChange={(e) =>
                        handleInputValue(e.target.value, fieldToEdit)
                      }
                      autoComplete='off'
                      // value={}
                      variant='outlined'
                      style={{ width: '500px' }}
                    />
                    <TextareaAutosize
                      aria-label='empty textarea'
                      minRows={4}
                      placeholder='leave a comment'
                      onChange={(e) =>
                        handleTextArea(fieldToEdit, e.target.value)
                      }
                      style={{
                        borderColor: 'lightgray',
                        borderRadius: 5,
                        height: '50px',
                        marginLeft: '20px',
                      }}
                    />
                  </div>

                  <div
                    style={{
                      marginTop: 50,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      width: '100%',
                    }}
                  >
                    <div>
                      <Button
                        variant='contained'
                        style={{ margin: '0 20px' }}
                        color='primary'
                        // disabled={!isSaveButtonDisabled}
                        onClick={() => handleSaveButton()}
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
                    </div>
                  </div>
                </div>
              ) : (
                ''
              )}
              {/* {fieldToEdit !== 'EKM Verification & Evidencing' &&
                fieldToEdit !== 'Deployment Patterns' && (
                  <>
                    {' '}
                    <TextField
                      id={fieldToEdit}
                      label={fieldToEdit}
                      defaultValue=''
                      placeholder='please introduce a proper URL'
                      onChange={(e) =>
                        handleInputValue(e.target.value, fieldToEdit)
                      }
                      autoComplete='off'
                      // value={}
                      variant='outlined'
                      style={{ width: '70%' }}
                    />
                    <TextareaAutosize
                      aria-label='empty textarea'
                      minRows={4}
                      placeholder='leave a comment'
                      // onChange={(e) =>
                      //   console.log(e.target.value, 'el field es :', fieldToEdit)
                      // }
                      onChange={(e) =>
                        handleTextArea(fieldToEdit, e.target.value)
                      }
                      style={{
                        borderColor: 'lightgray',
                        borderRadius: 5,
                        height: '50px',
                      }}
                    />
                  </>
                )} */}
              {/* {fieldToEdit === 'Blueprint' ||
              fieldToEdit === 'EKM Verification & Evidencing' ? null : (
                <TextareaAutosize
                  aria-label='empty textarea'
                  minRows={4}
                  placeholder='leave a comment'
       
                  onChange={(e) => handleTextArea(fieldToEdit, e.target.value)}
                  style={{
                    borderColor: 'lightgray',
                    borderRadius: 5,
                    height: '50px',
                  }}
                />
              )} */}
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

          {/* <div
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
                  // disabled={!isSaveButtonDisabled}
                  onClick={() => handleSaveButton()}
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
          </div> */}
        </form>
      </div>
    </div>
  );
};
