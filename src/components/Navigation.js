import React from "react";
import { Navbar, Container, Button, Offcanvas, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" variant="dark" text-decoration="none"className="mb-2">
        <Container>
          <Navbar.Brand href="#">SPOOM!</Navbar.Brand>
          <Button variant="dark" onClick={handleShow}>
            <MenuIcon />
          </Button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>SPOOM!</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ListGroup>
                <ListGroupItem>
                  <Link className="text-decoration-none" to="/Home">Home</Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link className="text-decoration-none" to="/Profile">Profile</Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link className="text-decoration-none" to="/Search">Search</Link>
                </ListGroupItem>
              </ListGroup>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
