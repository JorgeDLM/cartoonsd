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

class Corredores extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <Container fluid>
          si alguien es corredor, ingresa aqui y puede ver todas los requisitos
          de las propiedades que se necesitan y la fecha de visita de la
          persona. (los datos de las personas nos los quedamos nosotros para
          verlos desde el admin) ellos tienen que tener aqui como un boton para
          contactarnos si es que les interesa mostrarnos una propiedad que
          cumpla estos requisitos
        </Container>
      </React.Fragment>
    );
  }
}
export default Corredores;
