import React, { useState } from "react";
import { Link } from 'react-router-dom';

const LoginAdmin = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const onChangeUsername = (e) => {
        const value = e.target.value;
        setUsername(value)
    }
    
    const onChangePassword = (e) => {
        const value = e.target.value;
        setPassword(value)
    }



    return (
        <div  style={{marginTop: "120px"}}>
            <div className="container">
                
                <div className="row justify-content-center" >
                    
                    <div className="kotak col-md-6" >
                        <div > 
                            <h3 style={{marginTop: "8px"}} className="text-center">Login</h3>
                            <div className="card-body ">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" placeholder="Username" className="form-control" value={username} onChange={onChangeUsername} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" placeholder="Password" className="form-control" value={password} onChange={onChangePassword} />
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div class="form-group form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                                
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <Link to="/Daftar" class="text-right">
                                            Create an account
                                        </Link>
                                    </div>
                                </div>
                                
                                <button className="btn btn-primary">Login</button>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
        </div>

    )
}

export default LoginAdmin;