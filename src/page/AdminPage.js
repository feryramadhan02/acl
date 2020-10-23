import React, { Fragment } from 'react';
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

    return (
        <Fragment>
            <div className="admin">
                <h2>Welcome Admin</h2>
                <div className="form-data">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>Role</Form.Label>
                            <Form.Control type="text" placeholder="Enter Role" />
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
                            </svg></p>
                            <p>Email : <span>{name.email}</span></p>
                            <p>Role : <span>{name.role}</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default AdminPage;
