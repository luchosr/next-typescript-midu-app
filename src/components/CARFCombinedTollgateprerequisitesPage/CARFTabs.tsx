import React from 'react';
import {
  makeStyles,
  withStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TollgateVectorIcon from '../../../img/TollgateVector.png';
import ReportVector from '../../../img/ReportVector.png';
import StatusVector from '../../../img/StatusVector.png';
import UserGuideVector from '../../../img/UserGuideVector.png';

import PhoneIcon from '@material-ui/icons/Phone';

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    // backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      minWidth: 72,
      //   fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(4),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        // color: '#40a9ff',
        // opacity: 1,
        // border: '1px solid red',
      },
      '&$selected': {
        // color: '#1890ff',
        // fontWeight: theme.typography.fontWeightMedium,
        fontWeight: 'bold',
      },
      '&:focus': {
        // color: '#40a9ff',
      },
    },
    selected: {},
  }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

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
      //   backgroundColor: '#635ee7',
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
      //   fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      '&:focus': {
        // opacity: 1,
        fontWeight: 'bold',
        color: '#000000DE',
      },
    },
  }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    color: '#000000DE',
  },
}));

export const CustomizedTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo2}>
        <div className="">
          <button
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              outline: 'none',
              border: 'none',
              backgroundColor: 'none',
            }}
          >
            <img src={TollgateVectorIcon} style={{ width: 17, height: 18 }} />{' '}
            <span style={{ paddingLeft: '5px' }}>Tollgate Pre-Requisites</span>
          </button>
          <button
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              outline: 'none',
              border: 'none',
              backgroundColor: 'none',
            }}
          >
            <img src={StatusVector} style={{ width: 17, height: 18 }} />{' '}
            <span style={{ paddingLeft: '5px' }}>Tollgate Status</span>
          </button>{' '}
          <button
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              outline: 'none',
              border: 'none',
              backgroundColor: 'none',
            }}
          >
            <img src={UserGuideVector} style={{ width: 17, height: 18 }} />{' '}
            <span style={{ paddingLeft: '5px' }}>User Guide</span>
          </button>
        </div>
      </div>
    </div>
  );
};
