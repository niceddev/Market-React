import React from 'react'
import { IoSearchCircleOutline } from 'react-icons/io5'
import { Jumbotron, Form, Button, Container } from 'react-bootstrap'

function HeaderWrap() {
    return (
        <Jumbotron fluid className='headerWrapper'>
            <Container>
                <h1>Самый быстрый способ построить нечто!</h1>
                <Form inline>
                    <Form.Control
                        className="searchInput mb-2 mr-sm-2"
                        id="inlineFormInputName2"
                        placeholder="Найти материалы или инструменты"
                    />
                    <Button type='submit' className='searchBtn'><IoSearchCircleOutline size={40}/></Button>  
                </Form>
            </Container>
        </Jumbotron>
    )
}

export default HeaderWrap
