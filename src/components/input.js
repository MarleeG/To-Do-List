import React from 'react';
import { InputGroup, FormControl, Form, Button, Col } from 'react-bootstrap';


const Input = props => {
    return(
        <div className='mt-3'>
                {/*Form */}
                <Form onSubmit={e => props.handleSubmit(e)}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formToDoInput">
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-default">{props.input_prepend_text}</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    aria-label="toDoInput"
                                    name='to_do_item'
                                    onChange={e => props.handleChange(e)}
                                    value={props.to_do_item}
                                />
                            </InputGroup>
                        </Form.Group>
                    </Form.Row>

                    <Button variant={props.button_variant} type="submit" size='lg'>
                        {props.button_text}
                    </Button>
                </Form>
            </div>
    )
}

export default Input;