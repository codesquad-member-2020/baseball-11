import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'
import Main from './components/main/Main';
import Match from './components/match/Match';
import Select from './components/select/Select';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);
  body {
    font-family: "Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width : 100%;
    height: 100vh;
    background : url('/images/main-background.jpg') no-repeat;
    background-size : 100% 100%;
  }
  #root {
    height : 100%;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path='/select' component={Select} />
        <Route path='/' component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
