import React from 'react';
import Button from 'react-bootstrap/Button';

import '../assets/style/headers.scss';

const Headers = () => {
    return (
        <div className="containers">
            <nav>
                <div className="navigation-logo">
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
