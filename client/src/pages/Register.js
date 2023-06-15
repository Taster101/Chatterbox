import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // async function register (ev){
    //     ev.preventDefault();
    //     await fetch
    // }

    return(
       
            <div className="bg-blue-50 h-screen flex justify-center items-center">
                <form className="w-72 mx-auto mb-12">
                <h1 className="text-6xl mb-4 text-gray-300"> Register</h1>
                    <input value={email} onChange={ev => setEmail(ev.target.value)}type="text" placeholder="email" className="block w-full rounded-sm p-2 mb-2 border" />  
                    <input value={username} onChange={ev => setUsername(ev.target.value)} type="text" placeholder="username" className="block w-full rounded-sm p-2 mb-2 border" />
                    <input value={password} onChange={ev => setPassword(ev.target.value)}type="text" placeholder="password" className="block w-full rounded-sm p-2 mb-2 border" />   
                    <button className="bg-blue-500 text-white block w-full rounded-sm p-2"> Register </button>
            
                </form>    
            </div>

    )
}