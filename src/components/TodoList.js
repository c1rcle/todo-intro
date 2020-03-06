import React, { Fragment, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import AppContext from '../context/AppContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const appContext = useContext(AppContext);
  const { lists } = appContext;

  return (
    <Fragment>
      <Row>
        {lists.map(list => (
          <Col sm={4} className='form-group'>
            <TodoItem key={list.id} list={list} />
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export default TodoList;
