import React from 'react';
import './BidRoom.scss';
import BidInfo from '../bid-info/BidInfo';
import BidEnter from '../bid-enter/BidEnter';
import BidHistory from '../bid-history/BidHistory';
import { Link } from 'react-router-dom';

function Counter() {
  return (
    <div>
      <div className="counter__text">
        <span className="counter__main">04:30</span>
        <span className="counter__seconds">:00</span>
      </div>
    </div>
  );
}

function BidRoom(props) {
  const { isActive } = props;

  if (isActive === 'true') {
    return (
      <div>
        <div className="bid-room">
          <Link to="/">Go Back</Link>

          <div className="counter__wrapper">
            <Counter />
          </div>
          <div className="container bid__info">
            <BidInfo />
            <div className="bid__enter">
              <BidEnter />
            </div>
            <div className="bid__history">
              <BidHistory />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <p>This bid has expired</p>
    </div>
  );
}

export default BidRoom;
