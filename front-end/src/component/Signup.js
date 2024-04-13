
import React,{useState , useEffect} from "react";
import { useNavigate } from "react-router-dom"; 
const SignUp =()=>{
    const [name,setName]=useState("");
    const [dob , setDOB] =useState("");
    
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const navigate = useNavigate();

    
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth)
        {
            navigate('/')
        }
    })

    const collectData=async()=>{
        console.warn(name,email , dob , password);
        let result = await fetch('http://localhost:3000/register',{
        method:'post',
        body:JSON.stringify({name,dob ,password,email}),
        headers:{
            'Content-Type':'application/json'
        },
       
    });
    result = await result.json() 
    console.warn(result);
    localStorage.setItem("user",JSON.stringify(result));
        navigate('/');
    }
    
    
    return(
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" value={name} 
            onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>

            <input className="inputBox" type="text"  value={email} 
            onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>

            <input className="inputBox" type="date"  value={dob} 
            onChange={(e)=>setDOB(e.target.value)} placeholder="Enter Date of birth"/>

            <input className="inputBox" type="password"  value={password} 
            onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
            
            <button onClick={collectData} className="appButton" type="button">SignUp</button>
            </div>
    )
}
export default SignUp;