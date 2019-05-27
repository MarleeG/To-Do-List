import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/header';
import Input from './components/input';

import ToDoList from './components/to_do_list';

class App extends Component {
  state = {
    app_name: 'Simple To Do List',
    to_do_item: '',
    to_do_list: ['Eat some sushi', 'Chill', 'Make dinner!'],
    button_text: 'Add',
    button_variant: 'primary',
    input_prepend_text: 'Enter a to do',
    updateIndex: undefined
  }

  // Handles Input Change
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
        [name]: value
    });
  }

  // Handles the form submission
  handleSubmit = (e) => {
    e.preventDefault();

    if(this.state.button_text === 'Add'){
      this.addToDo(this.state.to_do_item);

      this.setState({
          to_do_item: ''
      });
    }else{
      // deconstruct this.state
      let {
        to_do_list,
        updateIndex,
        to_do_item
      } = this.state;

      // create a copy of the current to do list 
      // to manipulate the data
      let to_do_list_copy = to_do_list;

      // update the to do list with the current value in the input
      to_do_list_copy[updateIndex] = to_do_item;

      // update the state
      this.setState({
        to_do_list: to_do_list_copy,
        to_do_item: '',
        updateIndex: undefined
      });


       // This will update the Form/Button to show that the user may update selected
        // to do
      this.updateButton('Add', 'primary', 'Enter to do');
    }
  }

  // This adds a to do to the list of to dos
  addToDo = (item) => {
    this.setState({
      to_do_list: [item, ...this.state.to_do_list]
    });
  }

  // Create a function that will delete the selected to do
  deleteToDo = (idx) => {
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

  // This will allow the user to make an update to any selected to do
  handleUpdate = (idx) => {
    // 
    this.setState({
      updateIndex: idx,
      to_do_item: this.state.to_do_list[idx]
    });

    // This will update the Form/Button to show that the user may update selected
    // to do
    this.updateButton('Update', 'warning', 'Update to do')
  }

  // This will the selected to do to be updated
  updateButton = (btn_text, variant, prepend_text) => {
    this.setState({
      button_text: btn_text,
      button_variant: variant,
      input_prepend_text: prepend_text
    });
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
              <Input 
                addToDo={(todo) => this.addToDo(todo)}
                handleChange={e => this.handleChange(e)}
                handleSubmit={e => this.handleSubmit(e)}
                to_do_item={this.state.to_do_item}
                button_text={this.state.button_text}
                button_variant={this.state.button_variant}
                input_prepend_text={this.state.input_prepend_text}
              />
            </Col>
            <Col className='display-to-dos'>
              <ToDoList 
                toDoList={this.state.to_do_list} 
                deleteToDo={idx => this.deleteToDo(idx)}
                handleUpdate={idx => this.handleUpdate(idx)}
                updateIndex={this.state.updateIndex}
                />
            </ Col>
          </ Row>
        </Container>
      </div>
    )
  }
}

export default App;
