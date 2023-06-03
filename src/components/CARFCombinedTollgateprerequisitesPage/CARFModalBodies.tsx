import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import FormHelperText from '@material-ui/core/FormHelperText';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import DoneAllIcon from '@material-ui/icons/DoneAll';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from '@mui/material';

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
  deploymentPatterns,
  editionHandler,
  selectChangeHandler,
}: conditionalBodyProps) => {
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
                <div style={{ width: '75%' }}>
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
                      value={deploymentPatterns}
                      // @ts-ignore
                      onChange={selectChangeHandler}
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
                </div>
              )}
              {fieldToEdit !== 'EKM Verification & Evidencing' &&
                fieldToEdit !== 'Deployment Patterns' && (
                  <TextField
                    id={fieldToEdit}
                    label={fieldToEdit}
                    defaultValue=''
                    placeholder='please introduce a proper URL'
                    onChange={(e) => console.log(e.target.value)}
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
                    defaultValue=''
                    placeholder='paste confluence URL here'
                    autoComplete='off'
                    variant='outlined'
                    style={{ width: '90%' }}
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
                  onClick={editionHandler}
                  // onClick={() => console.log(`${fieldToEdit}.input`)}
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
