import React, {Component} from 'react';
import { ListGroup, Button } from 'react-bootstrap';


// const ToDoList = (props) => {
//     return (

//     )
// }

class ToDoList extends Component{
    render() {
        return (
            <div>
                <ListGroup className='mt-3'>
                    {this.props.toDoList.length > 0 &&

                        this.props.toDoList.map((item, idx) => {
                            return (
                                <ListGroup.Item key={idx} action variant="flush" >
                                    {item}

                                    {/* {this.props.deleteToDo(idx)} */}
                                    <Button variant="link" size='sm' className='float-right' onClick={() => this.props.deleteToDo(idx)}>
                                        <i className='icon trash text-center'></i>
                                    </Button>
                                </ListGroup.Item>
                            )
                        })

                    }
                </ListGroup>
            </div>
        )
    }
}

export default ToDoList