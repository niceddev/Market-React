import React from 'react'
import { IoLogoVk, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5'
import { Nav } from 'react-bootstrap'

function Contacts() {
    return (
        <Nav defaultActiveKey="#" className="socials justify-content-center">
            <Nav.Link href='#'><IoLogoVk size={25} /></Nav.Link>
            <Nav.Link href='#'><IoLogoInstagram size={25} /></Nav.Link>
            <Nav.Link href='#'><IoLogoFacebook size={25} /></Nav.Link>
            <Nav.Link href='#'>+7 777 777-77-77</Nav.Link>
        </Nav>
    )
}

export default Contacts
