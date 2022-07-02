import {
  Container,
  Form,
  Button,
} from "react-bootstrap";
import "./App.css";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import Layouts from "./components/Layouts/Layouts";
import TasksList from "./components/Task/TasksList";
import TaskCreate from "./components/Task/TaskCreate";

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
   taskData.unshift(taskItem);
   setTasks(taskData);

   setTitle('');
   setDescription('');
   setPriority('');

   console.log('tasks :', taskItem );
  } 

  return (
    <div className="App">
      <Layouts>
      
      <Container>
        {/* task-create-page  */}

        {
          isCreateMode  && (
            <TaskCreate
             title={title}
             setTitle={(val) => setTitle(val)}
             description={description}
             setDescription={(val) => setDescription(val)}
             priority={priority}
             setPriority={(val) => setPriority(val)}
             createTask={(e) => createTask(e)}

             ></TaskCreate>
          )
        }

      </Container>
      <Container>
        <TasksList tasks={tasks} onClickHandler = {() => setIsCreateMode(isCreateMode ? false  : true)}></TasksList>
      </Container>
      </Layouts>
      
    </div>
  );
}

export default App;
