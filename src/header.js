import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Home from './Home.js'
import Services from './Services.js'
import Contact from './Contact.js'
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChessRook, faLaptop} from '@fortawesome/free-solid-svg-icons'
function header() {
    return (
        <div>
            <MemoryRouter>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand><h2><FontAwesomeIcon icon={faChessRook}></FontAwesomeIcon> KőszegITuts <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon></h2></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav defaultActiveKey="/home" className="ml-auto">
              <LinkContainer to ="/home">
              <Nav.Link>Főoldal</Nav.Link>
              </LinkContainer>
              <LinkContainer to ="/services">
              <Nav.Link>Szolgáltatások</Nav.Link>
              </LinkContainer>
              <LinkContainer to ="/contact">
              <Nav.Link>Elérhetőség</Nav.Link>
              </LinkContainer>
              </Nav>
          </Navbar.Collapse>
        </Container>    
    </Navbar>


          <Switch>
          <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/services" exact>
              <Services />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
    </MemoryRouter>
        </div>
    )
}

export default header
