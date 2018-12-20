import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { Container, Col, Row } from 'reactstrap';
import {
  FaComment,
  FaHome,
  FaPoll,
  FaHandPointRight,
  FaSignOutAlt,
  FaPenAlt
} from 'react-icons/fa';
import Inicio from './Inicio';
import Logo from '../imgs/Logo3.png';

export default props => {
  return (
    <React.Fragment>
      <div className="pabchico fondoBlanco">
        <Menu>
          <p className="tenorme">Nosotros</p>
          <div className="bm-item-list">
            <Link className="link-sidebar" to={'/'}>
              <FaHome /> Inicio
            </Link>
          </div>
          <div className="bm-item-list">
            <Link className="link-sidebar" to={'/productos'}>
              <FaHandPointRight /> Productos
            </Link>
          </div>
          <div className="bm-item-list">
            <Link className="link-sidebar" to={'/quienes-somos'}>
              <FaPenAlt /> ¿Quiénes somos?
            </Link>
          </div>
        </Menu>
        <div className="d-block d-sm-none pizenorme">
          <div className="pabchico pizenorme centro">
            <img src={Logo} className="tamanoLogo" />
          </div>
        </div>
        <div className="pabchico d-none d-sm-block centro">
          <img src={Logo} className="tamanoLogo" />
        </div>
      </div>
    </React.Fragment>
  );
};
