import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';


import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import Home from './views/Home';
import ContactoDiputado from './views/ContactoDiputado';
import theme from './styles/theme';


function App() {
  return (
    <ThemeProvider theme={theme}>

    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/contacto-diputado' component={ContactoDiputado}/>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
