import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    flexBasis: 200
  }
}));

function BidEnter() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div>
      <p>Express Bid:</p>
      <div className="row mb-3">
        <div className="col-6 my-1">
          <Button variant="contained" className="col">
            $200
          </Button>
        </div>
        <div className="col-6 my-1">
          <Button variant="contained" className="col">
            $300
          </Button>
        </div>
      </div>
      <Divider />

      <p>Enter your bid below</p>
      <div className="row">
        <div className="col">
          <TextField
            id="filled-adornment-amount"
            className="col"
            variant="filled"
            label="Amount"
            value={values.amount}
            onChange={handleChange('amount')}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              )
            }}
          />
        </div>
      </div>
      <div className="row my-3">
        <div className="col">
          <Button color="primary" variant="contained" size="large">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BidEnter;
