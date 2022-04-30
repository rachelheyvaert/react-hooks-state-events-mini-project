import React, {useState} from "react";
 
 
function NewTaskForm(props) {
 const [details, setDetails] = useState("")
 const [category, setCategory]= useState("All")
 
 function changeText(e){
setDetails(e.target.value)
}
function changeCategory(e){
  setCategory(e.target.value)
}
 
function handleSubmit(e){
 e.prevenDefault()
return  props.onTaskFormSubmit(details, category)
}
 
 
 function renderCategories(){
  let catRender = props.categories.map(category => {
    if(category !== "All") {
   return (
   <option key={category} value={category}>{category}</option>
)}
   })
   return catRender
 }
 
 return (
   <form className="new-task-form" onSubmit={handleSubmit}>
     <label>
       Details
       <input type="text" name="text" onChange={changeText} id="task-details" />
     </label>
     <label>
       Category
       <select name="category" onChange={changeCategory} id="task-categories">
         {renderCategories()}
       </select>
     </label>
     <input type="submit" value="Add task" onClick={handleSubmit}/>
   </form>
 );
}
 
export default NewTaskForm;
