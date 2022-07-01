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

  const [isCreateMode, setIsCreateMode] = useState(false)
  const [task, etTask] = useState([]);

  useEffect(()=>{
    const data =[
      {
        
      }
    ]
  }, [])

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
            <Form>
            <Form.Group className="mb-3" controlId="title">
            
              <Form.Control type="text" id='title' placeholder="Enter Title" />
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="text" as='textarea' placeholder="Description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control as="Select" >
                <option value={''}>Select task priority</option>
                <option value={'Low'}>Low</option>
                <option value={'Medium'}>Medium</option>
                <option value={'High'}>High</option> 
              </Form.Control  >
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
            <tr>
              <td>1</td>
              <td>Test</td>
              <td>Test Description</td>
              <td>High</td>
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
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
