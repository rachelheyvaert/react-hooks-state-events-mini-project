import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
 
function App() {
 const [tasks, setTasks] = useState(TASKS);
 const [filterBy, setFilterBy] = useState("All")
 
 function filterTasksByCategory(e) {
   setFilterBy(e.target.innerText)
   filterTasks();
 }
   function filterTasks(){
     return tasks.filter(task =>{
       if (filterBy === "All"){
       return true
     } else {
    return task.category === filterBy
     }
   });
 }
 let filteredTasks = filterTasks();
 
function handleSubmit(details, category){
setTasks([...tasks,{text: details, category: category}])
document.getElementById("task-details").value= "";
document.getElementById("category-details").value="";
}
 
 return (
   <div className="App">
     <h2>My tasks</h2>
     <CategoryFilter categories={CATEGORIES} filterTasksByCategory={filterTasksByCategory} />
     <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleSubmit}/>
     <TaskList tasks={filteredTasks} setTask={setTasks}/>
   </div>
 );
}
 
export default App;
