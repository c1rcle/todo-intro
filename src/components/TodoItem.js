import React, { Fragment } from 'react';
import { Card, Form, ListGroup, Button, InputGroup } from 'react-bootstrap';

const TodoItem = props => {
  const { list } = props;

  return (
    <Fragment>
      <Card bg='primary' text='white'>
        <Card.Header as='h5'>{list.name}</Card.Header>
        <Card.Body>
          <InputGroup className='mb-3'>
            <Form.Control type='text' placeholder='Enter a new task' />
            <InputGroup.Append>
              <Button variant='success'>Add</Button>
            </InputGroup.Append>
          </InputGroup>
        </Card.Body>
        <ListGroup variant='flush'></ListGroup>
      </Card>
    </Fragment>
  );
};

export default TodoItem;
