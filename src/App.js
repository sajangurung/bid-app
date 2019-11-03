import React from 'react';
import './App.scss';
import BidRoom from './components/bid-room/BidRoom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './routes/main/Main';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/bid-room">
          <BidRoom isActive="true" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
