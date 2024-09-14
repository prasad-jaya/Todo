
import { useContext } from "react";
import ListTask from "../components/ListTask";
import AuthContext from "../auth/AuthProvider";
import { IoLogOut } from "react-icons/io5";

const Account = () =>{
    const { logedUser, logOut } = useContext(AuthContext);
    console.log(logedUser);
    return(
        <>
        <div  className="flex min-h-full flex-col justify-center px-6 py-1 lg:px-8 mx-auto">
            <div className="flex sm:w-full md:w-3/5 mx-auto justify-end">
                <button onClick={logOut} className="flex place-items-center text-lg mr-2 text-slate-300 hover:text-indigo-500"><IoLogOut className="text-2xl mr-2"/>Log Out</button>   
            </div>
        <div className="sm:mx-auto   flex mt-10 justify-between md:w-3/5">
            <h1 className=" text-center sm:w-full text-3xl font-bold leading-9 tracking-tight text-gray-900">Welcome {logedUser.userName} !</h1> 
        </div>
        </div>
        
        <ListTask/>
        </>
    )
}

export default Account;