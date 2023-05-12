import React from "react";
import clsx from "clsx";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
// import { SupportButton } from '@backstage/core-components';
import { CARFTabNavigation } from "./CARFTabNavigation";
import IconButton from "@material-ui/core/IconButton";
import FilledInput from "@material-ui/core/FilledInput";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import SearchIcon from "@material-ui/icons/Search";
import {
  TollgateIcon,
  TollgateStatusIcon,
  UserGuideIcon,
  SelfServiceReportsIcon,
  ApplicationCharacteristicsIcon,
  PreRequisitesStatusIcon,
} from "./SVGIcons";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { CARFCollapsibleTable } from "./CARFCollapsibleTable";
import { CARFStackedBarChart } from "./CARFStackedBarChart";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "95%",
      margin: "0px 28px",
    },
    heading: {
      fontSize: theme.typography.pxToRem(27),
    },
    margin: {
      margin: theme.spacing(1),
    },
    supportButton: {
      height: "40px",
      width: "120px",
      margin: "20px 0px 0px 20px",
      border: "none",
      padding: 0,
    },
    tabsWrapper: {
      display: "flex",
    },
    summaryAccordion: { width: "100%", margin: "50px 0px 50px 0px" },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      // width: "25ch",
    },
    homeButton: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      outline: "none",
      border: "none",
      backgroundColor: "transparent",
      color: "rgba(0, 0, 0, 0.4)",
      "&:focus": {
        opacity: 1,
        fontWeight: "bold",
        color: "#000000DE",
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

export default function InputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div className={classes.tabsWrapper}>
          <CARFTabNavigation
            tabIcon={<HomeOutlinedIcon />}
            tabText="Home"
            isDisabled={true}
          />
          <CARFTabNavigation
            tabIcon={<TollgateIcon />}
            tabText="Tollgate Pre-Requisites"
            isDisabled={false}
          />
          <CARFTabNavigation
            tabIcon={<TollgateStatusIcon />}
            tabText="Tollgate Status"
            isDisabled={true}
          />
          <CARFTabNavigation
            tabIcon={<SelfServiceReportsIcon />}
            tabText="Self Service Reports"
            isDisabled={true}
          />
          <CARFTabNavigation
            tabIcon={<UserGuideIcon />}
            tabText="User Guide"
            isDisabled={true}
          />
        </div>

        <div className="">
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="filled"
            style={{ minWidth: "350px" }}
          >
            <InputLabel
              htmlFor="filled-adornment-password"
              style={{ fontSize: "14px" }}
            >
              Search using NAR ID or Application name
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={"text"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
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
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Summary</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            border: "1px dashed #30445D4D",
            borderRadius: 5,
            margin: "15px",
          }}
        >
          <Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <h3 style={{ marginRight: "100px", marginLeft: "35px" }}>
                <ApplicationCharacteristicsIcon /> Application Characteristics
              </h3>
              <h3 style={{ marginLeft: "15%" }}>
                <PreRequisitesStatusIcon /> Pre-Requisites Status
              </h3>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderRight: "2px solid #DEE1E7",
                  paddingRight: "20px",
                  minWidth: "500px",
                }}
              >
                <ul style={{ listStyleType: "none" }}>
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

                <ul style={{ listStyleType: "none" }}>
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
              <div style={{ width: "100%" }}>
                <CARFStackedBarChart />
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr style={{ color: "#DEE1E7" }} />
      <CARFCollapsibleTable />
    </div>
  );
}
