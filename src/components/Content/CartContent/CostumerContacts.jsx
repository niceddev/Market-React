import React from 'react'
import { Form } from 'react-bootstrap'

const CostumerContacts = () => {

    return (
        <Form>
            <Form.Group>
                <Form.Control  type="text" placeholder="+7(123) 456-78-90" />
            </Form.Group>
            <Form.Group>
                <Form.Control as="select" defaultValue="Выберите район">
                    <option>Выберите район</option>
                    <option>район 1</option>
                    <option>район 2</option>
                    <option>район 3</option>
                    <option>район 4</option>
                    <option>район 5</option>
                </Form.Control>
            </Form.Group>
        </Form>
    )
}

export default CostumerContacts


