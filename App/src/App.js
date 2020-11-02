import React from 'react';
import { browserHistory } from 'react-router'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ReactDom, { render } from 'react-dom'

import Shopping from './Screen/Shopping.js'
import Chat from './Screen/Chat.js'
import ProductDetail from './Screen/ProductDetail'
import MLScreen from './Screen/MLScreen'
import Test from './test.js'

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path='/'>
          <Shopping />
        </Route>

        <Route exact path='/Chat'>
          <Chat />
        </Route>

        <Route exact path='/ProductDetail'>
          <ProductDetail />
        </Route>

        <Route exact path='/MLScreen'>
          <MLScreen />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
