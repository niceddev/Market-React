import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";

function FooterNavbar() {
    return (
        <Nav defaultActiveKey="#" className="justify-content-center">
            <Nav.Link className='linkDefault' as={Link} to='/'>Главная</Nav.Link>
            <Nav.Link className='linkCart' as={Link} to='/cart'>Корзина</Nav.Link>
        </Nav>
    )
}

export default FooterNavbar
