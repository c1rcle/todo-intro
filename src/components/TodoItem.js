import React, { Fragment, useContext, useState } from 'react';
import { Card, Form, ListGroup, Button, InputGroup } from 'react-bootstrap';
import Task from './Task';
import ItemContext from '../context/ItemContext';

const TodoItem = props => {
  const itemContext = useContext(ItemContext);
  const { addTask, tasks } = itemContext;
  const { name } = props;

  const [content, setContent] = useState('');

  const addTaskPressed = () => {
    if (content !== '') addTask(content);
    setContent('');
  };

  return (
    <Fragment>
      <Card>
        <Card.Header as='h5' className='bg-primary text-white'>
          {name}
        </Card.Header>

        <Card.Body>
          <InputGroup>
            <Form.Control
              type='text'
              placeholder='Enter a new task'
              value={content}
              onChange={e => setContent(e.target.value)}
            />
            <InputGroup.Append>
              <Button variant='success' onClick={addTaskPressed}>
                Add
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Card.Body>

        <ListGroup variant='flush'>
          {tasks.map(task => (
            <Task key={task.id} task={task} />
          ))}
        </ListGroup>
      </Card>
    </Fragment>
  );
};

export default TodoItem;
