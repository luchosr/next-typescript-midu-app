import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
  const classes = useStyles();

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
          <TollgateDataGrid rows={RTBrows} columns={RTBcolumns} />
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordionWrapper}>
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
      </Accordion>
    </div>
  );
}
