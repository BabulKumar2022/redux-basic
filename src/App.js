import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,

} from "react-bootstrap";
import "./App.css";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";

function App() {

  const [isCreateMode, setIsCreateMode] = useState()
  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  // const [isAdded, setIsAdded] = useState(false);




  useEffect(()=>{
    // const data =[
    //   {
    //     id : 1,
    //     title: 'First title',
    //     description: 'Test Description',
    //     priority: 'High'
        
    //   },
    //   {
    //     id : 2,
    //     title: 'Second title',
    //     description: 'Test Description',
    //     priority: 'Medium'
        
    //   },
    //   {
    //     id : 3,
    //     title: 'Third title',
    //     description: 'Test Description',
    //     priority: 'Low'
        
    //   }
    // ];

    // setTasks(data);
   
  }, [])

  

  const createTask = (e) => {
   e.preventDefault();

  //  data validation 
  if(title.length  === 0){
    alert('Please write a title');
    return false;
  }
  if(description.length  === 0){
    alert('Please write a description');
    return false;
  }
  if(priority.length  === 0){
    alert('Please select a priority');
    return false;
  }
   const taskItem ={
    id: 100,
    title,
    description,
    priority
   }

   const taskData = tasks;
   taskData.push(taskItem);
   setTasks(taskData);

   setTitle('');
   setDescription('');
   setPriority('');

   console.log('tasks :', taskItem );
  } 

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        {/* task-create-page  */}

        {
          isCreateMode  && (
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
          )
        }

      </Container>
      <Container>
        <div className="float-left">
          <h2 className="mt-5 pb-5">My Task</h2>
        </div>
        <div className="float-end">
          <button button  className="btn btn-primary" onClick={()=> setIsCreateMode(isCreateMode ? false  : true)}>
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
                <tr key={index}>
                <td>{index+1}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.priority}</td>
                <td>
                  <i
                    className="fa fa-pencil text-success pointer"
                    title="Edit Task"
                  ></i>
                  <i
                    className="fa fa-trash text-danger ml-2 pointer"
                    title="Delete Task"
                  ></i>
                </td>
              </tr>
              ))
            }
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
