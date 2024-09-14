import { useContext, useState } from "react";
import AuthContext from "../auth/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import {showSuccessNotification ,showErrorNotification} from "../components/Notification";

const Login = () =>{

    const [formData, setFormData] = useState({userName: '' , password: ''});
    const [ error , setError] = useState('');
    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = async () =>{
        try {
            await login (formData.userName, formData.password);
            console.log('Success!');
            showSuccessNotification('Success!')
            navigate("/account");
        } catch (error) {
            showErrorNotification('Failed!')
            setError('Error in Login');
        }
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({...formData, [id]: value});
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        handleLogin();
        handleChange(event);
    }

    return (
        <>
            <div  className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Log in to your account</h2>
                            <p  className="mt-2 text-center text-sm leading-9 tracking-tight text-gray-400">Don't have an account? <Link className="text-indigo-600 hover:text-indigo-500" to="/signup">Sign up</Link> here to create one.</p>
                        </div>
                        <div>
                            <label  className="block text-sm font-medium leading-6 text-gray-900">User Name</label>
                            <div className="mt-2">
                                <input id="userName" value={formData.userName} onChange={handleChange} type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>
                        <div>
                            <label  className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="mt-2">
                                <input id="password" value={formData.password} onChange={handleChange} type="Password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>   
                        <button type="submit" onClick={handleLogin} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log In</button>
                        <div>{error}</div>
                    </form>
                </div>
            </div>     
        </>
    )
}

export default Login;