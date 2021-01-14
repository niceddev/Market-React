import React from 'react'
import logoPNG from '../../assets/img/logo.png'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'
import { FooterNavbar, Contacts } from '../Footer'

function FooterWrap() {
    return (
        <Jumbotron className='footerWrap' fluid>
            <Container>
                <span>
                    <img
                        src={logoPNG}
                        width="100"
                        height="60"
                        className="d-inline-block align-top"
                        alt="Дом Строй Маркет Лого"
                    />
                    <h1>Дом Строй Маркет</h1>
                </span>
                <span>
                <Row>
                    <Col lg='9'>
                        <p>
                        <b>Dom Stroi Market</b> – интернет магазин стройматериалов и электроинстументов в Казахстане
                        Проект Dom Stroi Market объединяет филиалы магазины и их потенциальных клиентов, которым помогает удобно заказать материалы и инструменты с доставкой по всему Казахстану, самым простым способом.
                        </p>
                        <p><br/>
                        На нашем портале всегда действуют уникальные акции и скидки от компаний. Заказывайте доставку через Dom Stroi Market - это просто и удобно.
                        </p>
                        <p>
                        Для того, чтобы заказать доставку через наш сервис, просто выберите стройматериалы/электроинстументы, добавьте их в корзину и оформите заказ. Наш менеджер перезвонит для подтверждения.
                        </p>
                    </Col>
                    <Col>
                        <FooterNavbar />
                        <Contacts />
                    </Col>
                </Row>
                </span>
                <p className='copyright'>Copyright © 2020 - 2021. All right reserved.</p>
            </Container>
        </Jumbotron>
    )
}

export default FooterWrap
