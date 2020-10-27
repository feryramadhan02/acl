import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import Headers from './Headers';


const Daftar = (props) => {
    const history = useHistory()
    const [input, setInput] = useState({
        nama: "",
        email: "",
        password: "",
        role: ""
    })
    // const [role, setRole] = useState("")

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.id]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        const min = 6
        if (input.nama && input.email && input.password && input.role !== "") {
            if (input.password.length < min) {
                alert('Masukkan password minimal 6 karakter')
            }
            else if (input.role === "User") {
                history.push("/user")
            }
            else if (input.role === "CS") {
                history.push("/cs")
            }
            else if (input.role === "Finance") {
                history.push("/financehome")
            }
            else if (input.role === "Admin") {
                history.push("/admin")
            }
            else {
                alert('Maaf role tidak ditemukan')
            }
        }
        else {
            alert('Semua form harus terisi !')
        }
        props.onChange(
            input
        )
    }


    return (
        <Fragment>
            <Headers />
            <div style={{ paddingTop: "100px" }}>
                <div className="container">
                    <div className="row justify-content-center" >

                        <div className="kotak col-md-6" >
                            <div >
                                <h3 style={{ marginTop: "8px", fontFamily: "roboto" }} className="text-center">Register</h3>
                                <div className="card-body tulisan">
                                    <form onSubmit={submit}>
                                        <div className="form-group ">
                                            <label>Username</label>
                                            <input type="text" id="nama" value={input.nama} onChange={handleInput} placeholder="Username" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" id="email" value={input.email} onChange={handleInput} placeholder="Email" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" id="password" value={input.password} onChange={handleInput} placeholder="Password" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>Role</label>
                                            <input type="text" id="role" value={input.role} onChange={handleInput} placeholder="Role" className="form-control" />
                                        </div>
                                        <button class="btn  btn-lg btn-block daftar">Daftar</button>
                                        <div className="text-center">
                                            <Link to="/Login" >
                                                Back to sign in
                                        </Link>
                                        </div>
                                    </form>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Daftar;