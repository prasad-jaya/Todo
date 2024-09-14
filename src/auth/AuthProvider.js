import { createContext, useState } from "react";

const AuthContext = createContext();
const AuthProvider = ({children}) =>{
    const [user, setUser] = useState([
        {userName: 'user',password:'user',id:69}
    ]);
    const [logedUser, setLogedUser] = useState({userName:'',isAuthenticated:false})

    const createUser = async(newUser) =>{
        const updateUser = await {...newUser,id:(Math.ceil(Math.random() * 1000))}
        setUser((prevUser) => ([...prevUser,updateUser]));
    }
    console.log(user);

    const login = (userName, password) =>{
        const userValidate = user.filter((person) =>{
            return person.userName === userName && person.password === password;
        });
        return new Promise ((resolve, reject) =>{
            if(userValidate.length > 0){
                setLogedUser({userName: userValidate[0].userName, isAuthenticated:true})
                resolve("success");
            }
            else{
                reject("Incorrect Password");
            }
        });
    }     
    const logOut = () =>{
        setLogedUser({userName:'', isAuthenticated:false}); 
    }

    return(
        <AuthContext.Provider value={{logedUser, login,  createUser, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider};
export default AuthContext;