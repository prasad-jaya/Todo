import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

const AddTask = ({onCancel, handleShowSubmit}) =>{
    const [ taskFormData , setTaskFormData] = useState({title:"", description:""});
    const { createTask } = useContext(TodoContext);

    const handleChange = (event) =>{
        const { id, value } = event.target;
        setTaskFormData({...taskFormData, [id]: value});
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        createTask(taskFormData.title,taskFormData.description);
        handleShowSubmit();
   }

    return(
        <div  className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                <form  className="space-y-6" onSubmit={handleSubmit}>
                
                        <div>  
                            <div className="mt-2">
                                <input type="text" id="title" value={taskFormData.title} onChange={handleChange} placeholder="Task Name"required className="block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>
                        <div>
                            <div className="mt-2">
                                <input type="text" id="description" value={taskFormData.description} onChange={handleChange} placeholder="Description"required className="block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>   
                       
                        <div className="flex justify-end">
                            <button type="submit" className="flex mr-4  w-24 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Task</button>
                            <button onClick={onCancel}className="flex w-24  justify-center rounded-md bg-slate-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600">Cancel</button>
                        </div> 
                </form>
            </div>
        </div>
    )
}
export default AddTask;