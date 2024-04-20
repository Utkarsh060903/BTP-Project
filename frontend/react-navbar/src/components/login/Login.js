import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import {Link , useNavigate} from 'react-router-dom';
import ForgotPassword from "./ForgotPassword";


const Login = ({ setLoginUser}) => {

    const navigate = useNavigate();

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            navigate("/")
        })
    }

    return (
        <section className="loginn">
            <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            {/* <div className="forgot-password"> New div for forgot password */}
            {/* <Link to="/ForgotPassword">Forgot Password</Link> */}
            {/* </div> */}
            
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/register")}>Register</div>
        </div>
        </section>
        
    )
}

export default Login