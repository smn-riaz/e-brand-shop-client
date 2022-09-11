import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { CustomerInfoContext } from "../../../App";
import './NavbarSection.css'

function NavbarSection() {
  const {customerInfo, setCustomerInfo, dashboardData, setDashboardData} = useContext(CustomerInfoContext)


  

  const handleSignOut = () => {
    
  }

  

  return (
    <main className="navbarsection">
      <>
        {["md"].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="px-3 py-2">
            <Container fluid>
              <Navbar.Brand><Link to="/" className=" text-dark text-decoration-none shop-name fs-3">E-Brand Shop</Link></Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                   E-Brand Shop
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-center flex-grow-1 pe-5">
                    <NavDropdown className="fw-bold"
                      title="Clothes"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >

                      <NavDropdown.Item >
                        <Link to="/jacket" className="px-1 text-dark text-decoration-none fw-bold">Jacket</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item >
                      <Link to="/jens" className="px-1 text-dark text-decoration-none fw-bold">Jens</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item >
                       <Link to="/blezzer" className="px-1 text-dark text-decoration-none fw-bold">Blezzer</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item >
                       <Link to="/shirt" className="px-1 text-dark text-decoration-none fw-bold">Shirt</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item >
                       <Link to="/tops" className="px-1 text-dark text-decoration-none fw-bold">Tops</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item >
                       <Link to="/shorts" className="px-1 text-dark text-decoration-none fw-bold">Shorts</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item >
                       <Link to="/kids" className="px-1 text-dark text-decoration-none fw-bold">Kids</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item >
                       <Link to="/saree" className="px-1 text-dark text-decoration-none fw-bold">Sharee</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item >
                       <Link to="/tshirt" className="px-1 text-dark text-decoration-none fw-bold">T-Shirt</Link>
                      </NavDropdown.Item>

                    </NavDropdown>
                    { !customerInfo.email ?
                      <Nav.Link className="px-3">
                      <Link
                        to="/signin"
                        className="fw-bold px-2 text-dark text-decoration-none"
                      >
                        Sign In
                      </Link>
                    </Nav.Link>
                    : 
                    <Nav.Link className="px-3">
                      <button
                       onClick={() => handleSignOut}
                        className="fw-bold border-0 bg-white p-1 text-dark shadow rounded text-decoration-none"
                      >
                        Sign Out <button className="border-0 bg-info rounded text-white">{customerInfo.name}</button>
                      </button>
                      
                    </Nav.Link>
                    }
                    {
                      !customerInfo.email &&
                      <Nav.Link className="px-3">
                      <Link
                        to="/register"
                        className="fw-bold px-2 text-dark text-decoration-none"
                      >
                        Register
                      </Link>
                    </Nav.Link>
                    }



                  
                      <Nav.Link className="px-3">
                      <Link 
                        to="/admin/dashboard"
                        className="fw-bold px-2 text-dark text-decoration-none"
                      >
                        Dashboard
                      </Link>
                    </Nav.Link>
                   

                    <Nav.Link className="px-3">
                      <Link
                        to="/cart"
                        className="fw-bold px-2 text-dark text-decoration-none"
                      >
                        <FontAwesomeIcon icon={faCartShopping} />
                        <sup className="border border-2 rounded border-info"><strong>{customerInfo.cart.length}</strong></sup>
                      </Link>
                    </Nav.Link>
                  </Nav>

                  <Form
                    className="d-flex pe-5
                "
                  >
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    </main>
  );
}

export default NavbarSection;
