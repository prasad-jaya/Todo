import { useContext,useEffect, useState } from "react";
import TodoContext from "../context/TodoContext";
import ListShow from "./ListShow";
import { MdOutlineAddCircle } from "react-icons/md";
import AddTask from "./AddTask";
import 'react-toastify/dist/ReactToastify.css';

const ListTask = () =>{
    const { toDoList, fetchData } = useContext(TodoContext);
    const [showCreate, setShowCreate] = useState(false);

    useEffect(() =>{
       fetchData();
    },[fetchData]);

    const handleCreateTask = () =>{
        setShowCreate(true);
    }
    const handleCancel = ()=>{
        setShowCreate(false);
    }
    const handleSubmit  = () =>{
        setShowCreate(false);
    }
    let content = null;
    if(showCreate){
        content = <AddTask onCancel={handleCancel} handleShowSubmit={handleSubmit}/>
    }
    const renderedLists = toDoList.map((list) =>{
        return <ListShow key={list.id} list={list}></ListShow>
    });
    return (
        <>
        <div  className="flex min-h-full flex-col justify-center px-6 py-2 lg:px-8">
            <div className="mt-6 sm:mx-auto sm:w-full  md:w-full">
                <div className="flex min-h-full flex-col justify-center px-1 py-1 lg:px-8">
                { showCreate ? 
                   content 
                :(
                    <div className="flex mt-6 sm:mx-auto sm:w-full  md:w-3/5">
                    <button onClick={handleCreateTask} className="flex place-items-center text-xl mr-2 text-slate-300 hover:text-indigo-500">
                        <MdOutlineAddCircle className="mr-2"/>
                        Add Task</button>
                    </div>
                )}
                </div>

                {renderedLists}
            </div>
            
        </div>
          
        </>
    )
};

export default ListTask;