import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { Container, Col, Row } from 'reactstrap';
import {
  FaComment,
  FaHome,
  FaPoll,
  FaCheckSquare,
  FaSignOutAlt,
  FaLock
} from 'react-icons/fa';
import Inicio from './Inicio';
import Logo from '../imgs/Logo.png';

export default props => {
  return (
    <React.Fragment>
      <div className="centro">
        <img src={Logo} className="tamanoLogo" />
      </div>
      <Menu>
        <p className="tenorme">Encuesta</p>
        <div className="bm-item-list">
          <Link className="link-sidebar mb-2" to={'/'}>
            <FaHome /> Inicio
          </Link>
        </div>
      </Menu>
    </React.Fragment>
  );
};
