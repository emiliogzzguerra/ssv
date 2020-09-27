import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';


import './App.css';
import Home from './views/Home';

import theme from './styles/theme';


function App() {
  return (
    <ThemeProvider theme={theme}>

    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
