
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "../assets/images/malik_hadi_logo.png";

function Header() {
  return (
    <Navbar expand="lg" className="navbar-dark bg-nav sticky-top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            alt="logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top mx-2"
          />
          <strong>Malik Hadi</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <NavDropdown title="Tasks" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/task1">
                Task 1 - Image Gallery
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/task2">
                Task 2 - Build a Calculator
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/task3">
                Task 3 - portfolio site
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/task4">
                Task 4 - Build a Stopwatch
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/task5">
                Task 5 - Tic Tac Toe
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/task6">
                Task 6 - Music Player
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/taskspdf">
                All Tasks pdf
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/offerletter">
                Offer Letter
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            <span className="navbar-text text-center">
              Internship at <strong>Ariesian Tech</strong>
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
