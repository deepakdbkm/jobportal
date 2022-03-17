import React,{ useState,useEffect } from 'react'
import { Form} from 'reactstrap';

import { useHistory } from 'react-router-dom'
function Login()
{
    const[username,setUsername] =useState("")
    const[password,setPassword] =useState("")
    const history =useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info'))
        {
        history.push("/add")
    }
    
},[])
async function login()
{
    // alert(username)
    // alert(password)
    // let item=(username,password);
    let result=await fetch('http://localhost:8080/api/login',{
        method:'POST',
        headers:{
            
            'Accept': 'application/json',

            'Content-Type': 'application/json'


        },
        body: JSON.stringify({
           
            username: 'username',
            password: 'password',
          })

    });
    result=await result.json
    localStorage.setItem("user-info",JSON.stringify(result))
    history.push("/add")
}
return(
    <div>
        <Form>
        <h1>Login page</h1>
        <input type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)}/><br/>
        <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/><br/>
        <button onClick={login} className ="btn btn-primary">Login</button>
        </Form>
    </div>

)
}
export default Login;