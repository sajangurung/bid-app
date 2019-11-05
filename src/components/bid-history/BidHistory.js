import React from 'react';

function BidHistory() {
  const bids = [
    {
      id: '0202-3030',
      amount: 150,
      userName: 'user12',
      dateTime: '05:00:39'
    }
  ];

  return (
    <div>
      <h4>Bid History</h4>
      <ul>
        {bids.map(bid => {
          return (
            <li key={bid.id}>
              ${bid.amount} by {bid.userName} at {bid.dateTime}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BidHistory;
