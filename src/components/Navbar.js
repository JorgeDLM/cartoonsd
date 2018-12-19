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

export default props => {
  return (
    <React.Fragment>
      {((props.error && props.error.statusCode === 401) ||
        props.token === null) && <Redirect to="/login" />}
      <Menu>
        <p className="tenorme">Encuesta</p>
        <Link className="link-sidebar mb-2" to={'/'}>
          <FaHome /> Inicio
        </Link>
      </Menu>
    </React.Fragment>
  );
};
