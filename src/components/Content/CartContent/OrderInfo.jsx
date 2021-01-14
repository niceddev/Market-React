import React from 'react'
import { Card, Button, ListGroup } from 'react-bootstrap'

const OrderInfo = () => {

    return (
        <Card>
            <Card.Header as="h5">Ваш чек:</Card.Header>
            <Card.Body>
                <ListGroup>
                    <ListGroup.Item>1 товар</ListGroup.Item>
                    <ListGroup.Item>2 товар</ListGroup.Item>
                    <ListGroup.Item>3 товар</ListGroup.Item>
                    <ListGroup.Item>4 товар</ListGroup.Item>
                </ListGroup>
                <br />
                <Button variant="outline-warning" className='linkDefault'>Заказать</Button>
            </Card.Body>
        </Card>
    )
}

export default OrderInfo


