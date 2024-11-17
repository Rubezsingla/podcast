import React, {useEffect,useState} from "react"

import axios from "axios";

import {useNavigate,Link} from "react-router-dom"

function Login() {

    const[email,setEmail]=useState('');
    const[password,setpassword]=useState('');

    async function  submit(e){
        e.preventDefault();

        try{
            await axios.post("https://localhost:8000/Login",{
                email,password
            })
        }
        catch(e){
            console.log(e); 
        }
    }


    return(
        <div className="login">
            <h1>Login</h1>

        <form action="POST">
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
            <input type="password" onChange={(e)=>{setEmail(e.target.value)}} placeholder="password" />
            <input type="submit" onClick={submit} />
        </form>
        <br/>
        <p> or</p>
        <br/>

        <Link to='/signup'>Sign up</Link>
        </div>  
    )
    
}
export default Login;