import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Items = () => {
    
  const storage = useSelector(({ contentItems }) => contentItems.items)

  return (
    <Container className='contentWrap'>
      <h1>Металлопрокат</h1><hr/>
      <Container fluid className='itemsParent'> 
        {
          storage.map(
            (item, index) => {
              return (
                <Card key={index} className="itemCards">
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <h6>{item.title}</h6><hr/>
                    <Row>
                      <Col>
                        <h5>{item.price.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} тг</h5>
                      </Col>  
                      <Col>
                        <Button variant="outline-warning">Заказать</Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              )
            }
          )
        }
      </Container>
    </Container>
  )
}

export default Items