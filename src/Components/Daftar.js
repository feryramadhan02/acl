import React, { useState } from 'react';

const Daftar = () => {
    const[username,setUsername] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const changeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const changeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }

    const changePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    return (
        <div style={{marginTop: "160px"}}>
            <div className="container">
            <div className="row justify-content-center" >
                    
                    <div className="kotak col-md-6" >
                        <div > 
                            <h3 style={{marginTop: "8px"}} className="text-center">Register</h3>
                            <div className="card-body ">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" placeholder="Username" className="form-control" value={username} onChange={changeUsername}/> 
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" placeholder="Email" className="form-control" value={email} onChange={changeEmail}/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" placeholder="Password" className="form-control" value={password} onChange={changePassword}/>
                                </div>
                                <button type="button" class="btn btn-secondary btn-lg btn-block">Daftar</button>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Daftar;