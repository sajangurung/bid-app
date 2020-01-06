import React, { useState, useEffect } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

function BidEnter(props) {
  const [amount, setAmount] = useState(props.amount);
  const onClick = value => {
    props.onClick(value);
    setAmount(0);
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
            value={amount}
            onChange={e => setAmount(e.target.value)}
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
          <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={() => onClick(amount)}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BidEnter;
