import React from 'react';
import './App.scss';
import BidRoom from './components/bid-room/BidRoom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './routes/main/Main';
import Config from './config';

function App() {
  const wsUrl = Config.WS_URL;
  const isActive = true;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path={['/bid-room/:bidId']}>
          <BidRoom isActive={isActive} wsUrl={wsUrl} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
