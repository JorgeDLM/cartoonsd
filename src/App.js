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
          <Navbar />
          <Container fluid>
            <Row>
              <Col xs={{ size: 6, offset: 3 }}>
                <p className="text-center text-white font-weight-bold h1 mt-2">
                  Encuesta
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={{ size: 10, offset: 1 }}>
                <Switch>
                  <Route exact path={'/'} component={Inicio} />
                </Switch>
              </Col>
            </Row>
          </Container>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
