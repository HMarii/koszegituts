import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { MemoryRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChessRook, faLaptop} from '@fortawesome/free-solid-svg-icons'
function footer() {
    return (
        <div className="footer fixed-bottom">
        <MemoryRouter>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand><h3 className="brand"><FontAwesomeIcon icon={faChessRook}></FontAwesomeIcon> KőszegITuts <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon></h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                </Navbar.Collapse>
            </Navbar>

        </MemoryRouter>
        </div>
    )
}

export default footer
