import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import '../assets/style/headers.scss';

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
                        <li><Link to="Login"><Button className="btn">Login</Button></Link></li>
                        <li><Link to="Daftar"><Button className="btn">Register</Button></Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Headers;
