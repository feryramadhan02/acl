import React, { Fragment, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../assets/style/adminpage.scss';

const AdminPage = () => {
    const userDummy = [
        {
            id: 1,
            nama: "Andika",
            email: "andika@gmail.com",
            role: "user"
        },
        {
            id: 2,
            nama: "Andika2",
            email: "andika2@gmail.com",
            role: "cs"
        },
        {
            id: 3,
            nama: "Andika3",
            email: "andika3gmail.com",
            role: "finance"
        },
    ]

    const [userData, setUserData] = useState({
        id: 1,
        nama: "",
        email: "",
        role: "User"
    })
    const [dt, setDt] = useState([])


    // useEffect(() => {
    //     setUserData([...dt])
    // }, [dt])


    const handleInput = (e) => {
        setUserData({
            ...userData,
            [e.target.id]: e.target.value
        })
    }

    const addUser = (e) => {
        e.preventDefault()
        setDt(dt.concat(userData))
        setUserData({
            id: userData.id + 1,
            nama: "",
            email: "",
            role: "User"
        })
    }

    const deleteUser = (id) => {
        alert('Are you sure ?')
        setDt(dt.filter((user) => user.id !== id))
        console.log('del', id)
    }

    const updateUser = (id) => {
        console.log('update', id)
    }

    return (
        <Fragment>
            <div className="admin">
                <h2>Welcome Admin</h2>
                <div className="form-data">
                    <Form onSubmit={addUser}>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" id="nama" value={userData.nama} onChange={handleInput} placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" id="email" value={userData.email} onChange={handleInput} placeholder="Enter Email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>Role</Form.Label>
                            <Form.Control as="select" id="role" value={userData.role} onChange={handleInput}>
                                <option>User</option>
                                <option>Customer Service</option>
                                <option>Finance</option>
                                <option>Admin</option>
                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="add">Add</Button>
                    </Form>
                </div>

                <div className="data">
                    {userDummy.map((name) => (
                        <div key={name.id} className="data-user">
                            <p>Nama : <span>{name.nama}</span><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                </svg>
                            </p>
                            <p>Email : <span>{name.email}</span></p>
                            <p>Role : <span>{name.role}</span></p>
                        </div>
                    ))}
                </div>
                <div className="data">
                    {dt.map((item) => (
                        <div key={item.id} className="data-user">
                            <p>Nama : <span>{item.nama}</span><svg onClick={() => deleteUser(item.id)} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                                <svg onClick={() => updateUser(item.id)} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                </svg>
                            </p>
                            <p>Email : <span>{item.email}</span></p>
                            <p>Role : <span>{item.role}</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default AdminPage;
