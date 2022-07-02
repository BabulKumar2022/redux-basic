import React from 'react';
import Table from "react-bootstrap/Table";
import TaskDetail from './TaskDetail';


const TasksList = (props) => {
    const {tasks, onClickHandler} = props;
 
    return (
        <div>
            <div className="float-left">
          <h2 className="mt-5 pb-5">My Task</h2>
        </div>
        <div className="float-end">
          <button button  className="btn btn-primary" onClick={()=> props.onClickHandler()}>
            <i className="fa fa-plus-circle" ></i>
          </button>
        </div>
        <div className="clear-fix"></div>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Task Title</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              tasks.map((item, index) =>(
                <TaskDetail key={index} item={item} index={index}></TaskDetail>
              ))
            }
          </tbody>
        </Table>
        </div>
    );
};

export default TasksList;