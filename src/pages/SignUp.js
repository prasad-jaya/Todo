import { useContext, useState } from "react";
import AuthContext from "../auth/AuthProvider";

const SignUp = () =>{

    const [formData, setFormData] = useState({userName: '' , password: ''});
    const { createUser } = useContext(AuthContext);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({...formData, [id]: value});
    };
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        createUser(formData);
    }
    return (
        <>
            <div  className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                        </div>
                        <div>
                            <label  className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
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
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
                    </form>
                </div>
            </div>     
        </>
    )
}

export default SignUp;