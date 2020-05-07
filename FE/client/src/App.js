import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Main from './components/main/Main';
import Match from './components/match/Match';
import Select from './components/select/Select';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/select' component={Select} />
        <Route path='/match/:id' component={Match} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
