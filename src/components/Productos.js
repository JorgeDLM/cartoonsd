import React, { Component } from 'react';
import {
  Input,
  Col,
  Row,
  Form,
  Button,
  Label,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container
} from 'reactstrap';
import './Default.css';
import Navbar from './Navbar';
import FooterBlanco from './FooterBlanco';

class Inicio extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="fondoMorado blanco">
          <Navbar />
          <br />
          <Container fluid>
            Que productos tenemos:
            <hr />
            Costos
            <hr />
            comprar un video con nosotros:
          </Container>
          <FooterBlanco />
        </div>
        <br />
        <br />
        <br />
      </React.Fragment>
    );
  }
}
export default Inicio;
