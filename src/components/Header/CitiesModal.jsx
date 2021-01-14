import React, { useState, useEffect } from 'react'
import { Button, Nav, Modal, Container } from 'react-bootstrap'
import { IoLocationOutline } from 'react-icons/io5'
import axios from 'axios'
import {useSelector} from 'react-redux'

const CitiesModal = () => {
    const [show, showToggle] = useState(false);
    const handleClose = () => showToggle(false);
    const handleShow = () => showToggle(true);

    const [cities, setCity] = useState([]);
    const [location, activeCity] = useState('');
    const chooseCity = (city) => {
        activeCity(city);
        showToggle(false);
    } 

    useEffect(() => {

        axios.get('http://localhost:3000/db.json').then(({data}) => {
            setCity(data.cities)
        })
        
    }, []);

    return (
        <div>
            <Nav.Link onClick={handleShow} href='#'><IoLocationOutline size={25}/>{' '} {location === '' ? 'Нур-Султан' : location}</Nav.Link>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Container className='contentWrap'>
                        <Container fluid className='itemsParent citiesContent'> 
                        {
                            cities.map((item, index) => {
                                return (
                                    <Button key={index} onClick={()=>chooseCity(item.city)} variant="outline-warning">{item.city}</Button>
                                )
                            })
                        }
                        </Container>
                    </Container>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default CitiesModal