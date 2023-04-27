import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Switch from "@material-ui/core/Switch";
import { RTRcolumns, RTRrows } from "../components/ReadyToReleaseSummaryTable";
import TollgateDataGrid from "@/components/TollgateDataGrid";
import { RTBcolumns, RTBrows } from "../components/ReadyToBuildSummaryTable";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "33.33%",
      flexShrink: 0,
    },
    accordionWrapper: {
      margin: 57,
      backgroundColor: "#0288D126",
    },
  })
);

export default function SimpleAccordion() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const [columns, setColumns] = useState(RTBcolumns);

  const classes = useStyles();
  // const [columns, setColumns] = useState(defaultColumns);

  // const change = () => {
  //   defaultColumns[2].hide = !columns[2].hide;
  //   setColumns([...defaultColumns]);
  // };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    setColumns(RTRcolumns);
  };
  console.log("columns son ", [...RTBcolumns, ...RTRcolumns]);

  return (
    <div className={classes.root}>
      <Accordion className={classes.accordionWrapper}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Application Summary: <strong>Ready to Build</strong>
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          {/* <Switch
            checked={state.checkedB}
            onChange={handleChange}
            color="primary"
            name="checkedB"
            inputProps={{ "aria-label": "primary checkbox" }}
          /> */}
          <TollgateDataGrid />
        </AccordionDetails>
      </Accordion>
      {/* <Accordion className={classes.accordionWrapper}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Application Summary: <strong>Ready to Release</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TollgateDataGrid rows={RTRrows} columns={RTRcolumns} />
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}
