import { useState } from "react"
import axios from "axios";
import { useNavigate,Link } from 'react-router-dom';


export default function Login() {
    const history = useNavigate();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const login = (e) => {
        e.preventDefault();
        axios.post(
            "https://reqres.in/api/login", {
            email: email, password: password
        }).then(() => {
            history('/')
        })
    };

    return(
        <div className="row justify-content-center mt-5 pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <h1 className="text-center mb-3">Login </h1>
                    <div className="form-group">
                        <label>Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                            onChange={e=>setEmail(e.target.value)}
                        id="email" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                            onChange={e => setPassword(e.target.value)}
                        id="pwd" />
                    </div>
                    <button type="button" onClick={login} className="btn btn-primary mt-4">Login</button>
                </div>
            </div>
        </div>
    )
}
