import CloseIcon from '@material-ui/icons/Close';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from '@mui/material';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export const readyToReleaseBody = (
  <div style={modalStyle} className={classes.paper}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <h2 id='simple-modal-title'>Edit Ready to Release Pre-Requisites</h2>
      <span
        style={{ cursor: 'pointer' }}
        onClick={handleReadyToReleaseModalClose}
      >
        <CloseIcon />
      </span>
    </div>

    <form style={{ marginLeft: '20px', marginTop: '30px' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '90%',
          justifyContent: 'space-between',
          marginBottom: '25px',
          padding: '25px 15px 15px 15px',
          border: '1px solid #4287f5',
          borderRadius: 10,
        }}
      >
        <TextField
          id='resiliency-measure-test-results'
          label='Resiliency Measure Test Results'
          defaultValue='www.urlGivenByUser.com'
          autoComplete='off'
          // helperText="Some important text"
          variant='outlined'
          style={{ width: '70%' }}
          // onChange={}
        />
        <TextareaAutosize
          aria-label='empty textarea'
          minRows={3}
          placeholder='Comment'
          style={{
            borderColor: 'lightgray',
            borderRadius: 5,
            height: '50px',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '90%',
          marginBottom: '25px',
          justifyContent: 'space-between',
          padding: '25px 15px 15px 15px',
          border: '1px solid #4287f5',
          borderRadius: 10,
        }}
      >
        <TextField
          id='cloud-product-registration'
          label='Auditing, Logging, Monitoring, Alerting Metrics'
          defaultValue='www.urlGivenByUser.com'
          autoComplete='off'
          // helperText="Some important text"
          variant='outlined'
          style={{ width: '70%' }}
        />

        <TextareaAutosize
          aria-label='empty textarea'
          minRows={4}
          placeholder='Comment'
          style={{
            borderColor: 'lightgray',
            borderRadius: 5,
            height: '50px',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '90%',
          marginBottom: '25px',
          justifyContent: 'space-between',
          padding: '25px 15px 15px 15px',
          border: '1px solid #4287f5',
          borderRadius: 10,
        }}
      >
        <TextField
          id='ekm-verification-evidencing'
          label='EKM Verification & Evidencing'
          defaultValue='www.urlGivenByUser.com'
          autoComplete='off'
          // helperText="Some important text"
          variant='outlined'
          style={{ width: '70%' }}
        />

        <TextareaAutosize
          aria-label='empty textarea'
          minRows={4}
          placeholder='Comment'
          style={{
            borderColor: 'lightgray',
            borderRadius: 5,
            height: '50px',
          }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          // marginRight: "30%",
          marginRight: 50,
          marginTop: 50,
        }}
      >
        <Button
          variant='contained'
          style={{ margin: '0 20px' }}
          color='primary'
          // disabled={!linkUrl}
          onClick={handleReadyToReleaseModalClose}
        >
          Save
        </Button>
        <Button
          variant='contained'
          style={{ backgroundColor: '#FFFF', color: 'black' }}
          onClick={handleReadyToReleaseModalClose}
        >
          Cancel
        </Button>
      </div>
    </form>
  </div>
);
