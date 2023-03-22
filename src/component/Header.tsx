
//import React from "react";
import "../style/login.css";
import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";

//import { Userinformation } from "../models/model_type";

import Form, { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'


import * as React from 'react';

interface IAppProps {
}

const Header: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <Navbar fixed = "top" bg = "dark" variant = "dark">
          <Container>
            <Navbar.Brand style = {{textAlign : 'center', margin: 'auto'}}>
              Project Management system
            </Navbar.Brand>

         
          </Container>
    </Navbar>
  );
};

export default Header;
