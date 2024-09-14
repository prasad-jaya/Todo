import { useContext, useState } from "react";
import { GoCheckCircleFill } from "react-icons/go";
import { GoXCircleFill } from "react-icons/go";
import { MdEditDocument } from "react-icons/md";
import ListEdit from "./ListEdit";
import TodoContext from "../context/TodoContext";

const ListShow = ({ list }) =>{
    const [showEdit, setShowEdit] = useState(false);
    const { deleteTaskById, completeTask } = useContext(TodoContext);

    const handleEditClick = () =>{
        setShowEdit(!showEdit);
    }
    const handleSubmit  = () =>{
        setShowEdit(false);
    }
    const handleCancel = () =>{
        setShowEdit(false);
    }
    const handleDeleteClick = () =>{
        deleteTaskById(list.id);
    }
    const handleCompleteClick = () =>{
        completeTask(list);
    }
    let content = null;
    if(showEdit)
        content = <ListEdit onSubmit={handleSubmit} handleCancel={handleCancel} list={list}/>
    
    return(
        <div  className="flex min-h-full flex-col justify-center px-1 py-1 lg:px-8">
            {content}
            <div className="mt-6 sm:mx-auto sm:w-full  md:w-3/5">
                <div className="p-6 bg-white border border-gray-200 rounded-lg drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-between">
                        <div className="flex place-items-center">
                             <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{list.title}</h5><p className="ml-3 pb-1 text-center text-sm  tracking-tight text-green-600"> {list.status || ''}</p>
                        </div>
                        <div className="flex w-24 justify-end">
                            <button ><GoCheckCircleFill onClick={handleCompleteClick} className="text-xl mr-2 text-slate-300 hover:text-green-600"/> </button>
                            <button onClick={handleEditClick} ><MdEditDocument className="text-xl mr-2 text-slate-300 hover:text-indigo-500"/></button>
                            <button onClick={handleDeleteClick}><GoXCircleFill className="text-xl text-slate-300 hover:text-red-600"/></button>
                        </div>
                    </div>
                    {showEdit ? null : (
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {list.description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ListShow;