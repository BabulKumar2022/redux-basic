import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Layouts/Header";
import Layouts from "./components/Layouts/Layouts";
import TaskCreate from "./components/Task/TaskCreate";
import TaskDetail from "./components/Task/TaskDetail";
import TasksList from "./components/Task/TasksList";
import TaskListPage from "./components/views/TaskListPage";



 function App() {
  return (
    <div>

     

<Layouts></Layouts>
     <Routes>
       <Route path="/about">
   
       </Route>
       <Route path="/taskDetail" >

       </Route>
       <Route path="/" >
      
       </Route>
     </Routes>
 

    </div>
    
  );
}
export default App;
