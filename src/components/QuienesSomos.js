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

class QuienesSomos extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="fondoMorado blanco">
          <Navbar />
          <br />
          <Container>
            <div className="wbold tgrande">¿Qué hacemos?</div>{' '}
            <div className="tchica justificado pabgrande">
              Desarrollamos videos animados de calidad para que tu puedas
              generar impacto en tus clientes, ¿Sabías que dentro de 10 años se
              espera que el 80% de las compras se realicen por intenet?.
            </div>
            <div className="wbold tgrande">¿Cómo trabajamos?</div>{' '}
            <div className="tchica justificado pabgrande">
              Cuéntanos que deseas y nosotros buscaremos desarrollarlo para ti.
            </div>
            <div className="wbold tgrande">¿Quiénes somos?</div>{' '}
            <div className="tchica justificado pabmuygrande">
              Somos un grupo de diseñadores y programadores que buscan abaratar
              el costo de produccion de videos animados, buscando ver por los
              intereses de nuestros clientes y entregando producto de calidad.
            </div>
            <div className="wbold tgrande">Ejemplos:</div>{' '}
            <div className="pabmediano">carrousel de videos</div>
          </Container>
          <FooterBlanco />
        </div>
      </React.Fragment>
    );
  }
}
export default QuienesSomos;
