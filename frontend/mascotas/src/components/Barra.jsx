import React from "react";
import { Fragment } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../images/logo.png";

function Barra() {
  return (
    <Fragment>
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="/registro-publicacion">Perdí a mi mascota</Nav.Link>
              <Nav.Link href="/registro-publicacion">Encontré a una mascota</Nav.Link>
              <NavDropdown title="Publicaciones" id="basic-nav-dropdown">
                <NavDropdown.Item href="/publicaciones/encontrados">
                  Mascotas Encontradas
                </NavDropdown.Item>
                <NavDropdown.Item href="publicaciones/perdidos">
                  Mascotas Perdidas
                </NavDropdown.Item>
                <NavDropdown.Item href="publicaciones">
                  Ver Todas
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/login">
                  Iniciar Sesión
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}
export default Barra;
