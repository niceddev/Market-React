import React from 'react'
import { IoCallOutline } from 'react-icons/io5'
import { CitiesModal } from ".";
import { Link } from "react-router-dom";
import logoPNG from '../../assets/img/logo.png'
import { Nav, Container, Row, Col } from 'react-bootstrap'

const HeaderLinks = () => {
    return (
        <Container fluid className='headerLinks'>
            <Container>
            <Row>
                <Col xl={4} lg={2} md={6} sm={12}>
                    <Link to='/'>
                        <img src={logoPNG} className="logoImg d-inline-block align-top" alt="Дом Строй Маркет Лого"/>
                        <h4>Дом Строй Маркет</h4>
                    </Link>
                </Col>
                <Col xl={8} lg={10} md={6} sm={12}>
                    <Nav>
                        <Nav.Link href="#">
                            <IoCallOutline size={25}/>{' '} +7 777 777-77-77
                        </Nav.Link>
                        <CitiesModal />
                        <Nav.Link className='linkDefault' as={Link} to='/login'>Войти</Nav.Link>
                        <Nav.Link className='linkCart'  as={Link} to='/cart'>Корзина</Nav.Link>
                    </Nav>
                </Col>
            </Row>
            </Container>
        </Container>
    )
}

export default HeaderLinks