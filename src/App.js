import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";
import { router } from "./routes/Router";
import { TodoContextProvider } from "./context/TodoContext";
import { ToastContainer } from 'react-toastify';



const App = () =>{

    
    return (
       <AuthProvider>
            <TodoContextProvider>
                <ToastContainer />     
                <RouterProvider router={router} />
            </TodoContextProvider>
       </AuthProvider>
    )
};

export default App;