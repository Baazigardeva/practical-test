import React, {useState} from "react"
import "./register.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        date: "",
        myprofilepic: ""
    })

    const handleChange = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const {name, email, password, date} = user
        if (name && email && password && date){
            axios.post("http://localhost:9002/register", user)
            .then(res => {
                alert(res.data.message)
                navigate("/login")
            }
            )
        } else {
            alert("Invalid Input !!")
        }
    }

    return (
        <div className="register">
            {console.log("User",user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange}></input>
            <input type="text" name="date" value={user.date} placeholder="DD/MM/YYYY" onChange={handleChange}></input>
            <input type="file" name="myprofilepic" value={user.myprofilepic} onChange={handleChange}/> <br></br>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick = {() => navigate("/login")}>Login</div>
        </div>
    )
}

export default Register