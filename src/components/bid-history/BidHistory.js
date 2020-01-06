import React from 'react';

function BidHistory(props) {
  const bids = props.bids.map(({ data }) => {
    return {
      id: '0202-3030' + Math.random(),
      amount: data.amount,
      userName: data.user,
      dateTime: new Date(data.createdAt).toLocaleTimeString()
    };
  });

  return (
    <div>
      <h4>Bid History</h4>
      <ul>
        {bids.map(bid => {
          return (
            <li key={bid.id} className="bid__details">
              ${bid.amount} by {bid.userName} at {bid.dateTime}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BidHistory;
