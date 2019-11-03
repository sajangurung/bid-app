import React from 'react';
import BidList from '../../components/bid-list/BidList';

export default class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <BidList />
      </div>
    );
  }
}
