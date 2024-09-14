import axios from "axios";
import { createContext, useCallback, useState } from "react";
import {showSuccessNotification ,showErrorNotification} from "../components/Notification";


const TodoContext = createContext();

const TodoContextProvider = ({children}) =>{
    const [toDoList, setToDoList] = useState([]);
  
    const fetchData = useCallback(async() =>{
        try {
            const response = await axios.get('http://localhost:3003/lists');
            setToDoList(response.data);
        } catch (error) {
            console.log(error);
        }   
    },[]);

    const createTask = async (title,description) =>{
        try {
            await axios.post('http://localhost:3003/lists',{
                title:title,
                description:description
            });
            showSuccessNotification('Create Task Successful!');
            fetchData();
            
        } catch (error) {
            showErrorNotification("Failed");
            console.log(error);
            
        }
    }

    const editTaskById = async (id,newTitle,newDescription) =>{
        try {
            await axios.put(`http://localhost:3003/lists/${id}`,{
                title:newTitle,
                description:newDescription
            });
            showSuccessNotification('Task Edit Successful!');
            fetchData();

        } catch (error) {
            showErrorNotification('Faild!');
            console.log(error);
        } 
    };
    const deleteTaskById = async (id) =>{
        try {
            await axios.delete(`http://localhost:3003/lists/${id}`);
            showSuccessNotification('Task Delete Successful!');
            fetchData(); 
        } catch (error) {
            console.log(error)
            showErrorNotification('Faild!');
        }  
    };

    const completeTask = async (list) =>{
        if(!list.status){
            await axios.put(`http://localhost:3003/lists/${list.id}`,{
                title:list.title,
                description:list.description,
                status:'completed',
            });
            showSuccessNotification('Task complete Successful!')
        }
        else{
            await axios.put(`http://localhost:3003/lists/${list.id}`,{
                title:list.title,
                description:list.description,
                status:'',
            }); 
            showSuccessNotification('Task Not complete!')
        }
        fetchData();
    }

    return <TodoContext.Provider value={{toDoList, fetchData, editTaskById, deleteTaskById, createTask, completeTask}}>
        {children}
    </TodoContext.Provider>
}

export {TodoContextProvider};
export default TodoContext;