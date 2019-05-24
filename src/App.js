import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/header';
import Input from './components/input';

import './App.css'
import ToDoList from './components/to_do_list';

const log = console.log;

class App extends Component {
  state = {
    app_name: 'Simple To Do List',
    to_do_list: ['Eat some sushi', 'Chill']
  }

  // This adds a to do to the list of to dos
  addToDo = (item) => {
    this.setState({
      to_do_list: [item, ...this.state.to_do_list]
    }, () => log(`To do list: ${this.state.to_do_list}`));
  }

  // Create a function that will delete the selected to do
  deleteToDo = (idx) => {
    log('deleting...', idx)
    let to_do_list_copy = this.state.to_do_list;

    let new_to_dos = [];

    to_do_list_copy.forEach((item, index)=> {
      if(index !== idx){
        new_to_dos = [item, ...new_to_dos]
      }
    })

    this.setState({
      to_do_list: new_to_dos
    })
  }

  render() {
    return (
      <div className="App">
        <Container>
          {/* Heading */}
          <Row>
            <Col lg={12}>
              <Header name={this.state.app_name} />
            </Col>
          </Row>

          {/* To do's */}
          <Row className='justify-content-md-center mx-auto to-do'>
            <Col lg={5} className='input'>
              <Input addToDo={(todo) => this.addToDo(todo)}/>
            </Col>
            <Col className='display-to-dos'>
              <ToDoList toDoList={this.state.to_do_list} deleteToDo={idx => this.deleteToDo(idx)}/>
            </ Col>
          </ Row>

        </Container>

      </div>
    )
  }
}

export default App;
