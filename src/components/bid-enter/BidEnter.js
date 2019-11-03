import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
      <p>Enter your bid below</p>
      <TextField
        id="filled-adornment-amount"
        className={clsx(classes.margin, classes.textField)}
        variant="filled"
        label="Amount"
        value={values.amount}
        onChange={handleChange('amount')}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>
        }}
      />

      <Button size="small">Submit</Button>
      <p>Quick Bid Suggestions: $200, $250, $300</p>
    </div>
  );
}

export default BidEnter;
