import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);    //Why is { error, data } not working? 

    // Update state based on from input changes
    const setUsername = (event) => {    // const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const setPassword = async (event) => {    //const handleFormSubmit = async (event) => { 
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };
    return(
        <>
         <div className="bg-blue-50 h-screen flex justify-center items-center">
             <form className="w-72 mx-auto mb-12">
             <h1 className="text-6xl mb-4 text-gray-300"> Login</h1>
                 <input value={username} onChange={ev => setUsername(ev.target.value)} type="text" placeholder="username" className="block w-full rounded-sm p-2 mb-2 border" />
                 <input value={password} onChange={ev => setPassword(ev.target.value)}type="text" placeholder="password" className="block w-full rounded-sm p-2 mb-2 border" />   
                 <button className="bg-blue-500 text-white block w-full rounded-sm p-2"> login </button>
                 <Link to="/register">
                 <div className="mt-2">
                     <button className="bg-blue-500 text-white block w-full rounded-sm p-2"> Register </button>
                 </div>
                 </Link>
             </form>   
         </div>
 
      </>
     );
};

export default Login;

// export default function Login() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

// }