import React, { Component } from 'react';
import logo from './logo.svg';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import Inicio from './components/Inicio';
import Productos from './components/Productos';
import QuienesSomos from './components/QuienesSomos';
import Navbar from './components/Navbar';
import './App.css';
import { slide as Menu } from 'react-burger-menu';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Inicio} />
          <Route exact path={'/productos'} component={Productos} />
          <Route exact path={'/quienes-somos'} component={QuienesSomos} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
