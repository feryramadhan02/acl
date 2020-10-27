import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import '../assets/style/headers.scss';
//-----------------------------Buat kondisi menu ul jika sudah login-------------------
const Headers = () => {
    const history = useHistory();

    const toHome = () => {
        history.push("/")
    }

    return (
        <div className="containers">
            <nav>
                <div className="navigation-logo" onClick={toHome}>
                    <img src="https://src.kioser.com/img/logo.png" alt="" />
                </div>
                <div className="navigation-menu">
                    <ul>
                        <li><Button className="btn">Login</Button></li>
                        <li><Button className="btn">Register</Button></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Headers;
