import React, { Component } from 'react';
import { InputGroup, FormControl, Form, Button, Col } from 'react-bootstrap';

import '../App.css'

const log = console.log;

class Input extends Component {
    state = {
        adding_to_do: '',
        to_do_item: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        log(this.state.to_do_item);
        this.props.addToDo(this.state.to_do_item);
        // this.props.

        this.setState({
            to_do_item: ''
        });
    }

    render() {
        return (
            <div className='mt-3'>

                <Form onSubmit={e => this.handleSubmit(e)}>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formToDoInput">
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-default">Enter to do</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    aria-label="toDoInput"
                                    name='to_do_item'
                                    onChange={this.handleChange}
                                    value={this.state.to_do_item}
                                />
                            </InputGroup>
                        </Form.Group>


                    </Form.Row>

                    <Button variant="primary" type="submit" size='lg'>
                        Add
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Input;