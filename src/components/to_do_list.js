import React from 'react';
import { ListGroup, Button, Row, Col, Container } from 'react-bootstrap';

const ToDoList = (props) => {
    return(
        <div>
            <ListGroup className='mt-3' as="ul">
                {props.toDoList.length > 0 &&

                    props.toDoList.map((item, idx) => {
                        return (
                            <ListGroup.Item 
                                key={idx} 
                                variant="flush" 
                                as="li" 
                                action
                                disabled={props.updateIndex !== undefined && props.toDoList[props.updateIndex] === item? true: false}
                            >

                                <Container>
                                    <Row>

                                        <Col lg={6} className='float-left'>
                                            {item}
                                        </Col>
                                        <Col lg={6} className='float-right'>
                                            <Button 
                                                onClick={() => props.deleteToDo(idx)} 
                                                variant="link" 
                                                size='sm' 
                                                className='float-right'
                                                disabled={props.updateIndex !== undefined ? true: false}
                                            >
                                                <i className='icon trash text-center'></i>
                                            </Button>
                                            <Button variant="link" size='sm' className='float-right' onClick={() => props.handleUpdate(idx)}>
                                                <i className='icon edit text-center'></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </ListGroup.Item>
                        )
                    })
                }
        </ListGroup>
    </div>
    )
}

export default ToDoList