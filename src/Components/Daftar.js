import React from 'react';

const Daftar = () => {

    return (
        <div tyle={{marginTop: "250px"}}>
            <div className="container">
            <div className="row justify-content-center" >
                    
                    <div className="kotak col-md-6" >
                        <div > 
                            <h3 style={{marginTop: "8px"}} className="text-center">Register</h3>
                            <div className="card-body ">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" placeholder="Username" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" placeholder="Password" className="form-control"/>
                                </div>
                                
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Daftar;