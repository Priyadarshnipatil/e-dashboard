import React ,{useEffect}from "react";
// import { usenavigate } from "react-router-dom";

const Profile =()=>{
    const [email,setEmail]=React.useState('');
    const [password, setPassword] = React.useState('')
    // const navigate=useNavigate();


    return(
        <div className='login'>
            <h1>Users Data</h1>
           <input type='text' className='inputBox' placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
           <input type='password' className='inputBox' placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            {/* <button onClick={handleLogin} className="appButton" type="button">Login</button> */}
        </div>
    )
}

export default Profile