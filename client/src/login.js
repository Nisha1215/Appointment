import {useState} from "react";
import { useNavigate } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
const Login=()=>{
    const navigate =useNavigate();
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const loginUser=(e) =>{
        e.preventDefault();
    
    const data={
        email:email,
        password:password
    };
    fetch ('http://localhost:8000/user/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }).then(response =>{
        if (response.ok){
            return response.json();
        }
        else{
            alert('Login failed');
        }

    }).then(data=> {
        if(data.message==='Invalid Credentials'){
            alert('Invalid Credentials');
            return;
        }
        console.log('Login successful:',data);
        localStorage.setItem('token',data.token);
        localStorage.setItem('firstname',data.data);
        //navigate to home page or dashboard
        navigate('/'); // Redirect to home page
    }).catch(error=>{
        console.error('Error:',error);
        alert('An error occured while logging in');
    });

    }


    return(
        <div className="container"
        >
            <h1> Login </h1>
            <hr/>
            <form>
                <div className="form-group">
                    <label> Email</label>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Enter your Email"></input>
                </div>
                <div className="form-group">
                    <label> Password</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)}className="form-control" placeholder="Enter your Password"></input>
                </div>
                <button type="submit" onClick={loginUser}className="btn btn-primary">Login</button>

            </form>
        </div>
    )
}
export default Login;