import React, { Component } from 'react';
import logo from './logo.svg';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import Inicio from './components/Inicio';
import Navbar from './components/Navbar';
import './App.css';
import { slide as Menu } from 'react-burger-menu';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Inicio} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
