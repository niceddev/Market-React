import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Delivery, CostumerContacts, OrderInfo } from "../Content";    


function CartPage() {
    return (
        <Container className='cartPageContainer'>
            <h1>Оформление заказа</h1>
            <h6>ДАННЫЕ ДЛЯ ДОСТАВКИ</h6><hr/>
            <Container> 
                <Row>
                    <Col sm>
                            <CostumerContacts />
                            <Delivery />
                    </Col>
                    <Col sm>
                        <OrderInfo />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default CartPage