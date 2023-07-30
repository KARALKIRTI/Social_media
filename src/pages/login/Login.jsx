import React, { useContext, useState } from 'react';
import "./login.scss";
import { Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

export default function Login() {
    const [inputs,setInputs] = useState({
        username:"",
        password:"",
    })
    const [err,setErr]=useState(false);
    const navigate=useNavigate()
    const handleChange = e=>{
        setInputs((prev)=>({...prev,[e.target.name]:e.target.value}));
    };
    const {login} =useContext(AuthContext);
    const handleLogin = async (e)=>{
        e.preventDefault();
        try{
            await login(inputs);
            navigate("/")
        }catch(err){
            setErr(true);
        }
    }
    console.log(err)
  return (
   <div className="login">
    <div className="card">
        <div className="left">
            <h1>Hello Folks</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, animi placeat! Molestias reprehenderit aut illo voluptate corrupti voluptatum quod ratione!</p>
            <span>Don't have an account?</span>
            <Link to="/register">
            <button>Register</button>
            </Link>
        </div>
        <div className="right">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder='Username' name="username" onChange={handleChange}/>
                <input type="password" placeholder='Password' name='password' onChange={handleChange}/>
                <button onClick={handleLogin}>Log in</button>
            </form>
        </div>
    </div>
   </div>
  )
}
