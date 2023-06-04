import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { StoreProvider } from './CARFStore/storeProvider';
import { CARFTabNavigation } from './CARFTabNavigation';
import IconButton from '@material-ui/core/IconButton';
import FilledInput from '@material-ui/core/FilledInput';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import {
  TollgateIcon,
  TollgateStatusIcon,
  UserGuideIcon,
  SelfServiceReportsIcon,
  ApplicationCharacteristicsIcon,
  PreRequisitesStatusIcon,
} from './SVGIcons';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CARFCollapsibleTable } from './CARFCollapsibleTable';
import { CARFStackedBarChart } from './CARFStackedBarChart';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '95%',
      margin: '0px 28px',
    },
    heading: {
      fontSize: theme.typography.pxToRem(27),
    },
    margin: {
      margin: theme.spacing(1),
    },
    supportButton: {
      height: '40px',
      width: '120px',
      margin: '20px 0px 0px 20px',
      border: 'none',
      padding: 0,
    },
    tabsWrapper: {
      display: 'flex',
    },
    summaryAccordion: { width: '100%', margin: '50px 0px 50px 0px' },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      // width: "25ch",
    },
    homeButton: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      outline: 'none',
      border: 'none',
      backgroundColor: 'transparent',
      color: 'rgba(0, 0, 0, 0.4)',
      '&:focus': {
        opacity: 1,
        fontWeight: 'bold',
        color: '#000000DE',
      },
    },
  })
);

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

export function InputAdornments() {
  const classes = useStyles();
  // const [keyword, setKeyword] = useState<string>('');
  const [value, setValue] = useState<string>('');
  // const [inputText, setInputText] = useState<string>('');
  // const [values, setValues] = useState<State>({
  //   amount: '',
  //   password: '',
  //   weight: '',
  //   weightRange: '',
  //   showPassword: false,
  // });
  const [fieldToEdit, setFieldToEdit] = React.useState('');
  const [narIdObject, setNarIdObject] = React.useState({});
  const [isCompleted, setIsCompleted] = React.useState(['Ready to Build']);
  const [isSubmitted, setIsSubmitted] = React.useState<string[]>([]);
  const [editionSuccess, setEditionSuccess] = React.useState(false);
  // const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [submissionModalOpen, setSubmissionModalOpen] = React.useState(false);
  const [conditionalModalOpen, setConditionalModalOpen] = React.useState(false);
  const [deploymentPatterns, setDeploymentPatterns] = React.useState('yes');
  // const [modalStyle] = React.useState(getModalStyle);
  // const classes = useRowStyles();
  // const preventDefault = (event: React.SyntheticEvent) =>
  //   event.preventDefault();

  const handleEdition = () => {
    setEditionSuccess(!editionSuccess);
  };
  const handleConditionalModalOpen = (editingField: string) => {
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
    setDeploymentPatterns(deploymentPatternsSelect);
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
    console.log('Is submitted es: ', isSubmitted);
  };

  // const handleChange =
  //   (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setValues({ ...values, [prop]: event.target.value });
  //   };

  // const handleClickShowPassword = () => {
  //   setValues({ ...values, showPassword: !values.showPassword });
  // };

  // const handleMouseDownPassword = (
  //   event: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   event.preventDefault();
  // };

  // const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const lowerCase = e.target.value.toLowerCase();
  //   setInputText(lowerCase);
  // };

  // const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === 'Enter') {
  //     console.log(value);
  //   }
  // };
  const appCharacteristicsArray = [
    'NAR ID',
    'Application Name',
    'Information Classification',
    'Criticality',
    'Schrems II Relevant',
    'Personal Data',
    'R-Type',
    'CARF Assessment',
    'Materiality',
    'UK Important Business Service',
  ];

  return (
    <StoreProvider>
      <div className={classes.root}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div className={classes.tabsWrapper}>
            <CARFTabNavigation
              tabIcon={<HomeOutlinedIcon />}
              tabText='Home'
              isDisabled={true}
            />
            <CARFTabNavigation
              tabIcon={<TollgateIcon />}
              tabText='Tollgate Pre-Requisites'
              isDisabled={false}
            />
            <CARFTabNavigation
              tabIcon={<TollgateStatusIcon />}
              tabText='Tollgate Status'
              isDisabled={true}
            />
            <CARFTabNavigation
              tabIcon={<SelfServiceReportsIcon />}
              tabText='Self Service Reports'
              isDisabled={true}
            />
            <CARFTabNavigation
              tabIcon={<UserGuideIcon />}
              tabText='User Guide'
              isDisabled={true}
            />
          </div>

          <div className=''>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant='filled'
              style={{ minWidth: '350px' }}
              onSubmit={(e) => console.log(value)}
            >
              <InputLabel
                htmlFor='filled-adornment-password'
                style={{ fontSize: '14px' }}
              >
                Search using NAR ID or Application name
              </InputLabel>
              <FilledInput
                id='input-narid-appname'
                type='text'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && console.log(value)}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      type='submit'
                      onClick={() => console.log(value)}
                      aria-label='toggle password visibility'
                      edge='end'
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <button className={classes.supportButton}>
              {/* <SupportButton /> */}
            </button>
          </div>
        </div>
        <Accordion className={classes.summaryAccordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography className={classes.heading}>Summary</Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              border: '1px dashed #30445D4D',
              borderRadius: 5,
              margin: '15px',
            }}
          >
            <Typography>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h3 style={{ marginRight: '100px', marginLeft: '35px' }}>
                  <ApplicationCharacteristicsIcon /> Application Characteristics
                </h3>
                <h3 style={{ marginLeft: '15%' }}>
                  <PreRequisitesStatusIcon /> Pre-Requisites Status
                </h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    borderRight: '2px solid #DEE1E7',
                    paddingRight: '20px',
                    minWidth: '500px',
                  }}
                >
                  <ul style={{ listStyleType: 'none' }}>
                    {}
                    <li> NAR ID: </li>
                    <li>Application Name:</li>
                    <li>Information Classification:</li>
                    <li>Criticality: </li>
                    <li>Schrems II Relevant:</li>
                    <li>Personal Data:</li>
                    <li>R-Type:</li>
                    <li>CARF Assessment:</li>
                    <li>Materiality:</li>
                    <li>UK Important Business Service:</li>
                  </ul>

                  <ul style={{ listStyleType: 'none' }}>
                    <li> 12345-1</li>
                    <li>Best App GB</li>
                    <li>Confidential</li>
                    <li>Critical </li>
                    <li>Yes</li>
                    <li>Yes</li>
                    <li>Re- Architect</li>
                    <li>Null</li>
                    <li>Material</li>
                    <li>Not UK Important Business Service</li>
                  </ul>
                </div>
                <div style={{ width: '100%' }}>
                  <CARFStackedBarChart />
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <hr style={{ color: '#DEE1E7' }} />
        <CARFCollapsibleTable />
        {/* <CARFCollapsibleTable
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
      /> */}
      </div>
    </StoreProvider>
  );
}

export default InputAdornments;
