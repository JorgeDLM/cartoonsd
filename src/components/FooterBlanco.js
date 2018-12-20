import React, { Component } from 'react';
import { Button, Col, Row, Container } from 'reactstrap';
import logo from '../imgs/LogoSinCara.png';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

class FooterBlanco extends React.PureComponent {
  constructor(props) {
    super(props);
    this.footer = React.createRef();
    this.stepping = React.createRef();
  }

  componentDidMount() {
    this.calcularStep();
  }

  calcularStep() {
    if (this.footer.current !== null) {
      let rect = this.footer.current.getBoundingClientRect();
      let dimn = window.innerHeight - (rect.y + rect.height);
      if (dimn > 0) {
        this.stepping.current.style.minHeight = `${dimn}px`;
      }
    }
    let botones = document.querySelectorAll('#contacto');
    for (let b of botones) {
      b.classList.remove('btn-secondary');
    }
  }

  render() {
    return (
      <React.Fragment>
        <div id="stepping" ref={this.stepping} />
        <div ref={this.footer} className="parchico footer">
          <div className="fondoBlanco negro ">
            <Container fluid className="pargrande pabmuygrande">
              {/*pantallas de celular*/}
              <div className="d-block d-sm-none">
                <Row className="centro">
                  <Col lg={4} xl={4}>
                    <div>
                      <img src={logo} className="logoFooter" alt="logo" />
                    </div>
                  </Col>

                  <Col lg={5} xl={5}>
                    <div>
                      <div className="wbold pargrande">
                        Expertos en hacer publicidad animada
                      </div>
                      <div className="pizmuychico tchica">
                        ¿Quieres aumentar tus ventas?
                        <br />
                        ¿Quieres llamar la atención de tus clientes?
                        <br />
                        -Un video animado, es la publicidad que más rápido atrae
                        la atención de los clientes.
                        <br />
                        -En Estados Unidos el 96% de la población compra por
                        internet, ¿qué esperas?
                      </div>
                    </div>
                  </Col>

                  <Col lg={3} xl={3}>
                    <div>
                      <div className="tgrande wbold pargrande">
                        CONTACTANOS:
                        <div className="parmuychico">
                          <Row>
                            <Col className="derecha">
                              <Button
                                id="contacto"
                                href="tel:2227067092"
                                className="botonMorado claseBotonFooter"
                              >
                                <FaPhone className="paddingmini tgrande" />
                              </Button>
                            </Col>
                            <Col className="izquierda">
                              <Button
                                id="contacto"
                                href="https://wa.me/522227067092?text=Estoy%20interesado%20en%20agendar%20una%20cita."
                                className="botonVerde claseBotonFooter"
                              >
                                <FaWhatsapp className="tmuygrande pdemuychico" />
                              </Button>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              {/*pantallas medianas*/}
              <div className="d-none d-sm-block d-lg-none">
                <Row>
                  <Col sm={7} md={8}>
                    <div className="pizchico pargrande">
                      <img src={logo} className="logoFooter" alt="logo" />
                    </div>
                  </Col>

                  <Col sm={5} sm={4}>
                    <div className="parchico">
                      <div className="tgrande wbold">
                        CONTACTANOS: <br />
                        <FaPhone className="tgrande" /> 222 706 7092
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

              {/*pantallas grandes*/}
              <div className="d-none d-lg-block">
                <Row>
                  <Col lg={4} xl={4}>
                    <div className="pizchico pargrande">
                      <img src={logo} className="logoFooter" alt="logo" />
                    </div>
                  </Col>

                  <Col lg={5} xl={5}>
                    <div>
                      <div className="wbold">
                        Expertos en hacer publicidad animada
                      </div>
                      <div className="pizmuychico tchica">
                        ¿Quieres aumentar tus ventas?
                        <br />
                        ¿Quieres llamar la atención de tus clientes?
                        <br />
                        -Un video animado, es la publicidad que más rápido atrae
                        la atención de los clientes.
                        <br />
                        -En Estados Unidos el 96% de la población compra por
                        internet, ¿qué esperas?
                      </div>
                    </div>
                  </Col>

                  <Col lg={3} xl={3}>
                    <div>
                      <div className="tgrande wbold">
                        CONTACTANOS: <br />
                        <FaPhone className="tgrande" /> 222 706 7092
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FooterBlanco;
