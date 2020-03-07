import React, { Fragment, useContext } from 'react';
import { ListGroup, Form, Button, Row, Col } from 'react-bootstrap';
import ItemContext from '../context/ItemContext';

const Task = props => {
  const itemContext = useContext(ItemContext);
  const { checkTask, removeTask } = itemContext;
  const { task } = props;

  return (
    <Fragment>
      <ListGroup.Item>
        <Row>
          <Col xs='auto' className='my-auto ml-1 pr-0'>
            <Form.Check
              checked={task.checked}
              onChange={e => checkTask(task.id, e.target.checked)}
            />
          </Col>
          <Col align='left' className='m-auto'>
            {task.checked ? <div className='text-muted'>{task.content}</div> : task.content}
          </Col>
          <Col xs='auto' className='mr-1'>
            <Button variant='danger' onClick={() => removeTask(task.id)}>
              <i className='fas fa-times' />
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    </Fragment>
  );
};

export default Task;
