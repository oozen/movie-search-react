import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

import './assets/style/app.scss';
const logo = require('./assets/images/logo.svg').default;

const App: FC = () => {
  return (
    <div className='wrapper'>
      <div className='header'>
        <img src={logo} />
      </div>
      <Router>
        <Switch>
        <Route path='/detail/:imdbID' render={(props: any) => <Detail imdbID={props.match.params.from as unknown as string} />} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
