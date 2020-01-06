import React, { useState, useEffect } from 'react';
import './BidRoom.scss';
import BidInfo from '../bid-info/BidInfo';
import BidEnter from '../bid-enter/BidEnter';
import BidHistory from '../bid-history/BidHistory';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import Sockette from 'sockette';

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

let ws;

function BidRoom(props) {
  const { isActive, wsUrl } = props;
  const [messageList, setMessageList] = useState([]);
  const [amount, setAmount] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const onMessageReceived = ({ data }) => {
    const message = JSON.parse(data);
    setMessageList([
      ...messageList,
      {
        data: {
          ...message
        }
      }
    ]);
  };

  const onMessageWasSent = value => {
    setAmount(value);

    const message = {
      amount: parseFloat(value),
      createdAt: new Date().toISOString(),
      user: 'me'
    };

    ws.json({
      message: 'sendmessage',
      data: JSON.stringify(message)
    });

    setMessageList([
      ...messageList,
      {
        data: message
      }
    ]);
  };

  useEffect(() => {
    ws = new Sockette(wsUrl, {
      timeout: 5e3,
      maxAttempts: 1,
      onopen: e => console.log('connected:', e),
      onmessage: e => onMessageReceived(e),
      onreconnect: e => console.log('Reconnecting...', e),
      onmaximum: e => console.log('Stop Attempting!', e),
      onclose: e => console.log('Closed!', e),
      onerror: e => console.log('Error:', e)
    });

    const cleanup = () => {
      ws && ws.close();
      ws = null;
    };
    return cleanup;
  }, [messageList]);

  const handleClick = value => {
    onMessageWasSent(value);
    setOpen(!isOpen);
  };

  if (isActive) {
    return (
      <div>
        <div className="bid-room">
          <div className="counter__wrapper">
            <Link to="/">
              <div className="nav__back">
                <IconButton size="small">
                  <ArrowBackIcon color="action" />
                </IconButton>
              </div>
            </Link>
            <Counter />
          </div>
          <div className="container bid__info">
            <BidInfo />
            <div className="bid__enter">
              <BidEnter amount={amount} onClick={handleClick} />
            </div>
            <div className="bid__history">
              <BidHistory bids={messageList} />
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
