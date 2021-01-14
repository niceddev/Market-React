import React from 'react'
import { Tabs, Tab, Row, Col, Form } from 'react-bootstrap'

const Delivery = () => {
    return (
        <Tabs defaultActiveKey='delivery' className='order-form'>
            <Tab eventKey="delivery" title="Доставка">
                <Form>
                    <Form.Group>
                        <Form.Control  type="text" placeholder="Улица" />
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Control  type="text" placeholder="Дом" />
                            </Col>
                            <Col>
                                <Form.Control  type="text" placeholder="Квартира" />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Control  type="text" placeholder="Подъезд" />
                            </Col>
                            <Col>
                                <Form.Control  type="text" placeholder="Этаж" />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control  as="textarea" placeholder="Комментарий" />
                    </Form.Group>
                </Form>
            </Tab>
            <Tab eventKey="pickup" title="Самовывоз">
                <p>Вы можете забрать свой заказ по адресу: 'ADRESS'</p>
                <Form>
                    <Form.Group>
                        <Form.Control  as="textarea" placeholder="Комментарий" />
                    </Form.Group>
                </Form>
            </Tab>
        </Tabs>
    )
}

export default Delivery
