import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const getModalStyle = () => {
  const top = 10;
  const left = 25;

  return {
    top: `${top}%`,
    margin: 'auto',
  };
};
export const useRowStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'lime',
      '& > *': {
        borderBottom: 'unset',
      },
      '& .MuiTableRow-root': {
        backgroundColor: 'red',
        marginLeft: 150,
      },
    },
    formControl: {
      width: '70%',
      display: 'block',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    paper: {
      position: 'relative',
      width: '750px',
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      backgroundColor: theme.palette.background.paper,
      maxHeight: '550px',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      overflow: 'auto',
    },
    deploymentPatternsSelect: {
      margin: '30px',
    },
    mainTableCell: { paddingLeft: 10, width: '80%' },
    dropdownIconButton: { marginRight: 10 },
    mainTableRow: { backgroundColor: '#29B6F61A' },
    labelTableCell: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: '15px 8px 0px',
      borderBottom: 'none',
    },
    submitButton: {
      textTransform: 'capitalize',
      fontSize: '12px',
      margin: 0,
    },
    submittedButton: {
      textTransform: 'capitalize',
      fontSize: '14px',
      color: '#01579B',
    },
    waltzPreReqLink: {
      textTransform: 'capitalize',
      fontSize: '12px',
      marginRight: '34px',
      color: 'black',
      marginLeft: '18px',
      lineHeight: '2.5',
    },
    editButton: {
      textTransform: 'capitalize!important' as any,
      fontSize: '12px',
      marginRight: '30px',
      marginTop: '5px',
    },
    preReqWhitespace: {
      display: 'inline',
      marginLeft: '76px',
    },
    selfServedStatus: {
      color: '#0A7CB5',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    completedStatus: {
      color: '#01579B',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    notRequiredStatus: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    inprogressStatus: {
      color: '#FFAA00',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    notStartedStatus: {
      color: '#8894A8',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    statusIcon: {
      marginRight: '5px!important',
    },
  })
);
