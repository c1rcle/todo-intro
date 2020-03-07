import React, { Fragment, useContext, useState } from 'react';
import {
  Card,
  Form,
  ListGroup,
  Button,
  InputGroup,
  Row,
  Col
} from 'react-bootstrap';
import Task from './Task';
import AppContext from '../context/AppContext';
import ItemContext from '../context/ItemContext';

const TodoItem = props => {
  const appContext = useContext(AppContext);
  const itemContext = useContext(ItemContext);

  const { removeList } = appContext;
  const { addTask, tasks } = itemContext;
  const { id, name } = props;

  const [content, setContent] = useState('');

  const addTaskPressed = event => {
    event.preventDefault();
    if (content !== '') addTask(content);
    setContent('');
  };

  return (
    <Fragment>
      <Card>
        <Card.Header as='h5' className='bg-primary text-white'>
          <Row>
            <Col className='trimText'>{name}</Col>
            <Col>
              <button className='close' onClick={() => removeList(id)}>
                ×
              </button>
            </Col>
          </Row>
        </Card.Header>

        <Card.Body>
          <Form onSubmit={addTaskPressed}>
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
          </Form>
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
