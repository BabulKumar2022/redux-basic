import React from 'react';
import {
    Container,
    Form,
    Button,
  } from "react-bootstrap";

const TaskCreate = (props) => {
    const {title, setTitle, description, setDescription, priority, setPriority, createTask} = props;
    return (
            <Form onSubmit={(e) => createTask(e)}>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Control type="text"  placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="text" as='textarea' placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <select className={'form-control'}  value={priority} onChange={(e) => setPriority(e.target.value)}>
                      <option value={''}>Select task priority</option>
                      <option value={'Low'}>Low</option>
                      <option value={'Medium'}>Medium</option>
                      <option value={'High'}>High</option> 
                  </select>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
            </Form>
    );
};

export default TaskCreate;