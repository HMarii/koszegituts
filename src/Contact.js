import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAddressCard, faAt, faPhone, faComment} from '@fortawesome/free-solid-svg-icons'
function Contact() {
    return (
            <div className="content m-3 p-3">
            <Card bg="secondary" style={{ maxWidth: 'fit-content',textAlign: 'center', margin: 'auto' }}>
            <Card.Body>
                <Card.Title>Elérhetőség</Card.Title>
                
                <Card.Text>
                <FontAwesomeIcon icon={faAddressCard} /> Cím: Kőszeg, Árpád tér 27  <br></br>
                 <FontAwesomeIcon icon={faAt}/> Email: maromarak@gmail.com  <br></br>
                 <FontAwesomeIcon icon={faPhone}/> Telefon: +36 20 325 6582 
                </Card.Text>
                <a href="https://www.messenger.com/t/100002044828003" target="_blank" rel="noreferrer"><Button variant="primary"> Messenger <FontAwesomeIcon icon={faComment}/></Button></a>
            </Card.Body>
            </Card>
        </div>
        
    )
}

export default Contact
