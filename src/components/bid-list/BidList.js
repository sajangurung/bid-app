import React from 'react';
import BidCard from '../bid-card/BidCard';

function BidList() {
  const bids = 'characters'.split('');
  return (
    <div>
      {bids.map((_, i) => {
        return (
          <div key={i}>
            <BidCard />
          </div>
        );
      })}
    </div>
  );
}

export default BidList;
