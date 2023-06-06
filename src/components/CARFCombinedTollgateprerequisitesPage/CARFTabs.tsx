/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
  makeStyles,
  withStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from "@material-ui/core/Typography";
// import TollgateVectorIcon from "../../../img/TollgateVector.png";
// import ReportVector from "../../../img/ReportVector.png";
// import StatusVector from "../../../img/StatusVector.png";
// import UserGuideVector from "../../../img/UserGuideVector.png";

import PhoneIcon from '@material-ui/icons/Phone';

interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      fontWeight: 'bold',
    },
  },
})((props: StyledTabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />
));

interface StyledTabProps {
  label: string;
}

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      color: 'rgba(0, 0, 0, 0.5)',
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      '&:focus': {
        fontWeight: 'bold',
        color: '#000000DE',
      },
    },
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme: Theme) => ({
  // root: {
  //   flexGrow: 1,
  // },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  tabsWrapper: {
    color: '#000000DE',
  },
  tabIconStyle: {
    width: 17,
    height: 18,
  },
  tabButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    outline: 'none',
    border: 'none',
    backgroundColor: 'none',
  },
  tabText: { paddingLeft: '5px' },
}));

export const CustomizedTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      {/* <div className={classes.tabsWrapper}>
        <div>
          <button className={classes.tabButton}>
            <img src={TollgateVectorIcon} className={classes.tabIconStyle} />
            <span className={classes.tabText}>Tollgate Pre-Requisites</span>
          </button>
          <button className={classes.tabButton}>
            <img src={StatusVector} className={classes.tabIconStyle} />
            <span className={classes.tabText}>Tollgate Status</span>
          </button>{" "}
          <button className={classes.tabButton}>
            <img src={UserGuideVector} className={classes.tabIconStyle} />
            <span className={classes.tabText}>User Guide</span>
          </button>
        </div>
      </div> */}
    </div>
  );
};
